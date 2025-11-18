import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SubjectsSection from "./pages/SubjectsSection";
import AppLayout from "./AppLayout";
import { SubjectsProvider } from "./context/SubjectsProvider";
import SubjectDetail from "./pages/SubjectDetail";

function App() {
  return (
    <div className="h-screen">
      <SubjectsProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/subjects" element={<SubjectsSection />} />
            <Route path="/subjects/:id" element={<SubjectDetail />} />
          </Route>
        </Routes>
      </SubjectsProvider>
    </div>
  );
}

export default App;
