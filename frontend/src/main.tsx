import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import LoginView from "./views/LoginView.tsx";
import RegisterView from "./views/RegisterView.tsx";
import UserDashboardView from "./views/UserDashboardView.tsx";
import HomeView from "./views/HomeView.tsx";
import ProfileView from "./views/ProfileView.tsx";
import HabitsView from "./views/HabitsView.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='login' element={<LoginView />}></Route>
      <Route path='register' element={<RegisterView />}></Route>
      <Route path='dashboard' element={<UserDashboardView />}>
        <Route index element={<HomeView />}></Route>
        <Route path="profile" element={<ProfileView />}></Route>
        <Route path="habits" element={<HabitsView />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
);
