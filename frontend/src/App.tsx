import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard1 from "./pages/Dashboard/Dashboard1";
import Clients from "./pages/Clients";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import TaskInformation from "./pages/Tasks/MainTaskDetails";
import TimeTracker from "./pages/TimeTracker";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/SignUp";
import { OverlayProvider } from "./services/providers/OverlayContext";
import Support from "./pages/Support";

function App() {
  return (
    <BrowserRouter>
      <OverlayProvider>
        <Provider store={store}>
          <ToastContainer />
          <Routes>
            {/* Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Private Routes */}
            <Route path="" element={<PrivateRoute />}>
              <Route index={true} path="/" element={<Dashboard1 />} />

              <Route path="/clients" element={<Clients />} />
              <Route path="/projects" element={<Projects />} />

              <Route path="/tasks" element={<Tasks />} />
              <Route path="/tasks/:id" element={<TaskInformation />} />
              <Route path="/time-tracker" element={<TimeTracker />} />

              <Route path="/notifications" element={<Notifications />} />
              <Route path="/support" element={<Support />} />

              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </Provider>
      </OverlayProvider>
    </BrowserRouter>
  );
}

export default App;
