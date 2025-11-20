import { createContext, useContext, useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE/SUBJECT":
      return { ...state, subjects: [...state.subjects, action.payload] };
    case "READ/SUBJECTS":
      return { ...state, subjects: action.payload };
    case "UPDATE/SUBJECT":
      return {};
    case "DELETE/SUBJECT":
      return {
        ...state,
        subjects: state.subjects.filter(
          (subject) => subject.id !== action.payload
        ),
      };
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
        "content-type": "application/json",
      },

      body: JSON.stringify(subject),
    });

    const data = await res.json();
    console.log(data);

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

  //? DELETE SUBJECT

  async function deleteSubject(id) {
    const res = await fetch(`${ENDPOINT}/${id}`, {
      method: "DELETE",
    });
    dispatch({ type: "DELETE/SUBJECT", payload: id });
  }

  return (
    <SubjectsContext value={{ subjects, status, addSubject, deleteSubject }}>
      {children}
    </SubjectsContext>
  );
}

function useSubjects() {
  return useContext(SubjectsContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { SubjectsProvider, useSubjects };
