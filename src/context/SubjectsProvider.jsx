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
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(subject),
    });

    const data = await res.json();
    dispatch({ type: "CREATE/SUBJECT", payload: data });
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
    const res = await fetch(`${ENDPOINT}/${subjectId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ name: newTitle }),
    });
    dispatch({ type: "UPDATE/SUBJECT", payload: { subjectId, newTitle } });
  }

  //? DELETE SUBJECT
  async function deleteSubject(subjectId) {
    const res = await fetch(`${ENDPOINT}/${subjectId}`, {
      method: "DELETE",
    });

    dispatch({ type: "DELETE/SUBJECT", payload: subjectId });
  }
  /*=======================TASK SECTION=======================*/
  //? CREATE TASK
  async function createTask(subjectId, newTask) {
    //* gets the object that needs updating
    const res = await fetch(`${ENDPOINT}/${subjectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const subject = await res.json();

    //* Add new task into the object
    await fetch(`${ENDPOINT}/${subjectId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ tasks: [...subject.tasks, newTask] }),
    });

    dispatch({ type: "ADD/TASK", payload: { newTask, subjectId } });
  }

  //? UPDATE TASK
  async function updateTask(subjectId, taskId, newText) {
    const res = await fetch(`${ENDPOINT}/${subjectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const subject = await res.json();

    const newtasks = subject.tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : subject
    );

    await fetch(`${ENDPOINT}/${subjectId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tasks: newtasks }),
    });

    dispatch({
      type: "UPDATE/TASK",
      payload: {
        subjectId,
        taskId,
        newText,
      },
    });
  }

  //? DELETE TASK
  async function deleteTask(subjectId, taskId) {
    const res = await fetch(`${ENDPOINT}/${subjectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

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

    dispatch({
      type: "DELETE/TASK",
      payload: { subjectId, taskId },
    });
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
