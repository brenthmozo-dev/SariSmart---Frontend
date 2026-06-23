import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LaunchScreen from "./pages/0_LaunchScreen";
import Onboarding from "./pages/1_onboarding";
import HomePage from "./pages/2_Homepage";
import InventoryPage from "./pages/3_InventoryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route shows the launch screen */}
        <Route path="/" element={<LaunchScreen />} />
        
        {/* Onboarding page */}
        <Route path="/onboarding" element={<Onboarding />} />
        
        {/* Main App Pages */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        
        {/* Catch-all: redirect any weird URLs back to launch */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}