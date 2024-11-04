import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@/index.css";
import Dashboard from "@/Pages/Dashboard";
import Puzzle from "@/Pages/Puzzle";
import Home from "@/Pages/Home";
import Scenario from "@/Pages/Scenario";
import CompLayout from "@/layouts/CompLayout";
import Overview from "@/Pages/Overview";
import HomeLayout from "@/layouts/HomeLayout"
import Signup from "@/Pages/Signup"
import LoginForm from "@/Pages/Login";
import Tmp from "./Pages/Tmp";
import Admin from "@/layouts/AdminLayout"
import AdminDashboard from "@/Pages/AdminDashboard"
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route element={<Admin />}>
        <Route path="/Admin" element={<AdminDashboard />} />
        </Route>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route path="/Tmp" element={<Tmp/>}/>
        </Route>
        <Route element={<CompLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route path="/scenario" element={<Scenario />} />
          <Route path="/overview" element={<Overview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
