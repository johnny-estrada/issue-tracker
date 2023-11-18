import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

// const user = [{ name: 'Johnny', isAdmin: true }];

// data
import { projects, tasks, lineChart, barChart } from "./data/index";

function App() {
  const [user, setUser] = useState({ name: "Johnny", isAdmin: true });
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {isLoggedIn ? (
                <Dashboard
                  projectData={projects}
                  taskData={tasks}
                  lineChartData={lineChart}
                  barChartData={barChart}
                />
              ) : (
                <Login />
              )}
            </>
          }
        />
        <Route
          path="/projects"
          element={<Projects projectData={projects} taskData={tasks} />}
        />
        <Route path="/tasks" element={<Tasks taskData={tasks} />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
