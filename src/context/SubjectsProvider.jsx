import { createContext, useContext, useEffect, useReducer } from "react";

function reducer(state, action) {
  console.log(action);

  switch (action.type) {
    case "CREATE/SUBJECT":
      return { ...state, subjects: [...state.subjects, action.payload] };
    case "READ/SUBJECTS":
      return { ...state, subjects: action.payload };
    case "UPDATE/SUBJECT":
      return {};
    case "DELETE/SUBJECT":
      return {};
    case "Add/Task":
      return {};
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

  function addSubject(subject) {
    dispatch({ type: "CREATE/SUBJECT", payload: subject });
  }

  //? FETCH SUBJECTS
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
        dispatch({ type: "READ/SUBJECTS", payload: subjects });
        dispatch({ type: "success" });
      } catch (error) {
        dispatch({ type: "error" });
        console.error(error.message);
      }
    }

    fetchSubjects();
  }, []);

  return (
    <SubjectsContext value={{ subjects, status, addSubject }}>
      {children}
    </SubjectsContext>
  );
}

function useSubjects() {
  return useContext(SubjectsContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { SubjectsProvider, useSubjects };
