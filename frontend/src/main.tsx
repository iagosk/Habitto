import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import LoginView from "./views/LoginView.tsx";
import RegisterView from "./views/RegisterView.tsx";
import UserDashboardView from "./views/UserDashboardView.tsx";
import HomeView from "./views/HomeView.tsx";
import ProfileView from "./views/ProfileView.tsx";
import EatingHabitsView from "./views/EatingHabitsView.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import TrainingHabits from "./views/TrainingHabitsView.tsx";
import SettingsView from "./views/SettingsView.tsx";
import HydrationHabitsView from "./views/HydrationHabitsView.tsx";
import ReportsView from "./views/ReportsView.tsx";



createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='login' element={<LoginView />}></Route>
      <Route path='register' element={<RegisterView />}></Route>
      <Route path='dashboard' element={<UserDashboardView />}>
        <Route index element={<HomeView />}></Route>
        <Route path="profile" element={<ProfileView />}></Route>
        <Route path="eating-habits" element={<EatingHabitsView />}></Route>
        <Route path="training-habits" element={<TrainingHabits />}></Route>
        <Route path="hydration-habits" element={<HydrationHabitsView />}></Route>
        <Route path="settings" element={<SettingsView />}></Route>
        <Route path="reports" element={<ReportsView />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);
