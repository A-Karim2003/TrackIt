import { createContext, useContext, useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE/SUBJECTS":
      return { ...state, subjects: action.payload };
    case "READ/SUBJECTS":
      return {};
    case "UPDATE/SUBJECTS":
      return {};
    case "DELETE/SUBJECTS":
      return {};
    case "Add/Task":
      return { ...state };
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

const SubjectsContext = createContext(null);
function SubjectsProvider({ children }) {
  const [{ subjects, status }, dispatch] = useReducer(reducer, {
    subjects: [],
    status: "idle",
  });

  //? READ SUBJECTS
  useEffect(() => {
    dispatch({ type: "loading" });
    async function fetchSubjects() {
      try {
        const res = await fetch("http://localhost:9000/subjects", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const subjects = await res.json();
        dispatch({ type: "CREATE/SUBJECTS", payload: subjects });
        dispatch({ type: "success" });
      } catch (error) {
        dispatch({ type: "error" });
        console.error(error.message);
      }
    }

    fetchSubjects();
  }, []);

  function addTask(task, subjectId) {
    dispatch({
      type: "Add/Task",
      payload: {
        task,
        subjectId,
      },
    });
  }

  function addSubject(subject) {
    dispatch({ type: "Add/Subject", payload: subject });
  }

  return (
    <SubjectsContext value={{ subjects, status, addTask, addSubject }}>
      {children}
    </SubjectsContext>
  );
}

function useSubjects() {
  return useContext(SubjectsContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { SubjectsProvider, useSubjects };
