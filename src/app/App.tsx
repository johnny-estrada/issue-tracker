import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./store";
import PrivateRoute from "../components/PrivateRoute";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import EditProject from "../pages/EditProject";
import CreateProject from "../pages/CreateProject";
import CreateTask from "../pages/CreateTask";
import EditTask from "../pages/EditTask";
import TaskDetails from "../pages/TaskDetails";
import Tasks from "../pages/Tasks";
import Notifications from "../pages/Notifications";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import EditProfile from "../pages/EditProfile";

// data
import { lineChart, barChart } from "../data/index";

function App() {
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
                <Dashboard lineChartData={lineChart} barChartData={barChart} />
              }
            />

            <Route path="/projects" element={<Projects />} />
            <Route
              path="/projects/create-project"
              element={<CreateProject />}
            />
            <Route
              path="/projects/edit-project/:id"
              element={<EditProject />}
            />

            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/:id" element={<TaskDetails />} />
            <Route path="/tasks/create-task" element={<CreateTask />} />
            <Route path="/tasks/edit-task/:id" element={<EditTask />} />

            <Route path="/notifications" element={<Notifications />} />

            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/edit-profile" element={<EditProfile />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
