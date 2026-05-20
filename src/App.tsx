import { Routes, Route, Navigate } from "react-router-dom";
import ZhHome from "./pages/ZhHome";
import EnHome from "./pages/EnHome";

export default function App() {
  return (
    <Routes>
      <Route path="/zh" element={<ZhHome />} />
      <Route path="/en" element={<EnHome />} />
      <Route path="*" element={<Navigate to="/zh" replace />} />
    </Routes>
  );
}
