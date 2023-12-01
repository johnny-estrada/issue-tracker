import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// const user = [{ name: 'Johnny', isAdmin: true }];

// data
import { projects, tasks, lineChart, barChart } from "./data/index";

function App() {
  // const [user, setUser] = useState({ name: "Johnny", isAdmin: true });

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Private Routes */}
          <Route path="" element={<PrivateRoute />}>
            <Route
              index={true}
              path="/"
              element={
                <Dashboard
                  projectData={projects}
                  taskData={tasks}
                  lineChartData={lineChart}
                  barChartData={barChart}
                />
              }
            />
            <Route
              path="/projects"
              element={<Projects projectData={projects} taskData={tasks} />}
            />
            <Route path="/tasks" element={<Tasks projectData={projects} />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
