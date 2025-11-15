import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Subjects from "./pages/Subjects";
import Subject from "./pages/Subject";
import AppLayout from "./AppLayout";

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Subjects" element={<Subjects />}>
            <Route path=":id" element={<Subject />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
