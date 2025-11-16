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
    async function fetchSubjects() {
      const res = await fetch("http://localhost:9000/subjects", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const subjects = await res.json();
      dispatch({ type: "CREATE/SUBJECTS", payload: subjects });
    }
    fetchSubjects();
  }, []);

  return (
    <SubjectsContext value={{ subjects, status }}>{children}</SubjectsContext>
  );
}

function useSubjects() {
  return useContext(SubjectsContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { SubjectsProvider, useSubjects };
