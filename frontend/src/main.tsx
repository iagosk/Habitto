import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import LoginView from "./views/LoginView.tsx";
import RegisterView from "./views/RegisterView.tsx";
import "./App.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path='/login' element={<LoginView />}></Route>
      <Route path='/register' element={<RegisterView />}></Route>
    </Routes>
  </BrowserRouter>,
);
