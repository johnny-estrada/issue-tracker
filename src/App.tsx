import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./services/state/redux/store";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import Projects from "./pages/projects/Projects";
import EditProject from "./pages/projects/components/EditProject";
import CreateProject from "./pages/projects/components/CreateProject";
import CreateTask from "./pages/tasks/components/CreateTask";
import EditTask from "./pages/tasks/components/EditTask";
import TaskInformation from "./pages/tasks/TaskInformation";
import Tasks from "./pages/tasks/Tasks";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/SignUp";

// data
import { lineChart, barChart } from "./data/index";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer />
        <Routes>
          {/* Public Routes */}
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
            <Route path="/tasks/:id" element={<TaskInformation />} />
            <Route path="/tasks/create-task" element={<CreateTask />} />
            <Route path="/tasks/edit-task/:id" element={<EditTask />} />

            <Route path="/notifications" element={<Notifications />} />

            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
