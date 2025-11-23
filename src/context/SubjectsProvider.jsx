import { createContext, useContext, useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE/SUBJECT":
      return { ...state, subjects: [...state.subjects, action.payload] };
    case "READ/SUBJECTS":
      return { ...state, subjects: action.payload };
    case "UPDATE/SUBJECT":
      return {
        ...state,
        subjects: state.subjects.map((subject) =>
          subject.id === action.payload.subjectId
            ? { ...subject, name: action.payload.newTitle }
            : subject
        ),
      };
    case "DELETE/SUBJECT":
      return {
        ...state,
        subjects: state.subjects.filter(
          (subject) => subject.id !== action.payload
        ),
      };
    case "ADD/TASK":
      return {
        ...state,
        subjects: state.subjects.map((subject) =>
          subject.id === action.payload.subjectId
            ? {
                ...subject,
                tasks: [...subject.tasks, action.payload.newTask],
              }
            : subject
        ),
      };
    case "UPDATE/TASK":
      return {
        ...state,
        subjects: state.subjects.map((subject) => {
          return subject.id === action.payload.subjectId
            ? {
                ...subject,
                tasks: subject.tasks.map((task) =>
                  task.id === action.payload.taskId
                    ? { ...task, text: action.payload.newText }
                    : task
                ),
              }
            : subject;
        }),
      };
    case "DELETE/TASK":
      return {
        ...state,
        subjects: state.subjects.map((subject) => {
          return subject.id === action.payload.subjectId
            ? {
                ...subject,
                tasks: subject.tasks.filter(
                  (task) => task.id !== action.payload.taskId
                ),
              }
            : subject;
        }),
      };
    case "loading":
      return { ...state, status: "loading" };
    case "success":
      return { ...state, status: "success" };
    case "error":
      return { ...state, status: "error" };
    default:
      throw new Error("Unknown action");
  }
}

const ENDPOINT = "http://localhost:9000/subjects";

const SubjectsContext = createContext(null);
function SubjectsProvider({ children }) {
  const [{ subjects, status }, dispatch] = useReducer(reducer, {
    subjects: [],
    status: "idle",
  });

  //? CREATE SUBJECTS
  async function addSubject(subject) {
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(subject),
      });

      if (!res.ok)
        throw new Error("Failed to create subject. Please try again.");

      const data = await res.json();
      dispatch({ type: "CREATE/SUBJECT", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  }

  //? READ SUBJECTS
  useEffect(() => {
    dispatch({ type: "loading" });
    async function fetchSubjects() {
      try {
        const res = await fetch(ENDPOINT, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const subjects = await res.json();
        dispatch({ type: "READ/SUBJECTS", payload: subjects });
        dispatch({ type: "success" });
      } catch (error) {
        dispatch({ type: "error" });
        console.error(error.message);
      }
    }

    fetchSubjects();
  }, []);

  //? UPDATE SUBJECT
  async function updateSubject(subjectId, newTitle) {
    try {
      const res = await fetch(`${ENDPOINT}/${subjectId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ name: newTitle }),
      });

      if (!res.ok)
        throw new Error("Failed to update subject. Please try again.");

      dispatch({ type: "UPDATE/SUBJECT", payload: { subjectId, newTitle } });
    } catch (error) {
      console.log(error.message);
    }
  }

  //? DELETE SUBJECT
  async function deleteSubject(subjectId) {
    try {
      const res = await fetch(`${ENDPOINT}/${subjectId}`, {
        method: "DELETE",
      });
      if (!res.ok)
        throw new Error("Failed to delete subject. Please try again.");

      dispatch({ type: "DELETE/SUBJECT", payload: subjectId });
    } catch (error) {
      console.log(error.message);
    }
  }
  /*=======================TASKS SECTION=======================*/
  //? CREATE TASK
  async function createTask(subjectId, newTask) {
    //* gets the object that needs updating
    try {
      const res = await fetch(`${ENDPOINT}/${subjectId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok)
        throw new Error("Unable to load subject details. Please try again.");

      const subject = await res.json();

      //* Add new task into the object
      const patchRes = await fetch(`${ENDPOINT}/${subjectId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ tasks: [...subject.tasks, newTask] }),
      });

      if (!patchRes.ok)
        throw new Error("Could not save task. Try again in a moment.");

      dispatch({ type: "ADD/TASK", payload: { newTask, subjectId } });
    } catch (error) {
      console.log(error.message);
    }
  }

  //? UPDATE TASK
  async function updateTask(subjectId, taskId, newText) {
    try {
      const res = await fetch(`${ENDPOINT}/${subjectId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok)
        throw new Error(
          "Could not load task data. Please refresh and try again."
        );

      const subject = await res.json();

      const newtasks = subject.tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      );

      const patchRes = await fetch(`${ENDPOINT}/${subjectId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tasks: newtasks }),
      });

      if (!patchRes.ok)
        throw new Error(
          "Failed to update task. Something went wrong saving changes."
        );

      dispatch({
        type: "UPDATE/TASK",
        payload: {
          subjectId,
          taskId,
          newText,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  //? DELETE TASK
  async function deleteTask(subjectId, taskId) {
    try {
      const res = await fetch(`${ENDPOINT}/${subjectId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok)
        throw new Error("Could not retrieve task list. Refresh and try again.");

      //* return subject which needs task deletion
      const subject = await res.json();

      //* replace existing tasks array with new filtered tasks
      const newTasks = subject.tasks.filter((task) => task.id !== taskId);

      await fetch(`${ENDPOINT}/${subjectId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tasks: newTasks }),
      });

      if (!res.ok)
        throw new Error("Failed to delete task. Please try again later.");

      dispatch({
        type: "DELETE/TASK",
        payload: { subjectId, taskId },
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <SubjectsContext
      value={{
        subjects,
        status,
        addSubject,
        deleteSubject,
        updateSubject,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </SubjectsContext>
  );
}

function useSubjects() {
  return useContext(SubjectsContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { SubjectsProvider, useSubjects };
