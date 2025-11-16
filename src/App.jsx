import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Subjects from "./pages/Subjects";
import Subject from "./pages/Subject";
import AppLayout from "./AppLayout";
import { SubjectsProvider } from "./context/SubjectsProvider";

function App() {
  return (
    <div className="h-screen">
      <SubjectsProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Subjects" element={<Subjects />}>
              <Route path=":id" element={<Subject />} />
            </Route>
          </Route>
        </Routes>
      </SubjectsProvider>
    </div>
  );
}

export default App;
