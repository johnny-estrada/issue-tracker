import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./state/redux/store";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import EditProject from "./pages/Projects/EditProject";
import CreateProject from "./pages/Projects/CreateProject";
import Tasks from "./pages/Tasks";
import CreateTask from "./pages/Tasks/CreateTask";
import EditTask from "./pages/Tasks/EditTask";
import TaskInformation from "./pages/Tasks/TaskInformation";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/SignUp";
import TestForm from "./pages/TestForm";

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
            <Route index={true} path="/" element={<Dashboard />} />

            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/create" element={<CreateProject />} />
            <Route path="/projects/edit/:id" element={<EditProject />} />

            <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/:id" element={<TaskInformation />} />
            <Route path="/tasks/create" element={<CreateTask />} />
            <Route path="/tasks/edit/:id" element={<EditTask />} />

            <Route path="/notifications" element={<Notifications />} />

            <Route path="/settings" element={<Settings />} />
            <Route path="/test" element={<TestForm />} />
            <Route path="/upload" element={<TestForm />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
