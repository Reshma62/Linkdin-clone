import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Profile from "../pages/Profile";
import Registation from "../pages/Registation";
import Login from "../pages/Login";
import ForgetPassword from "../pages/ForgetPassword";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route path="/profile" element={<Profile />} />
        <Route index element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/registation" element={<Registation />} />
      <Route path="/forgotpassword" element={<ForgetPassword />} />
    </Route>
  )
);
/* export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registation",
    element: <Registation />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/forgotpassword",
    element: <ForgetPassword />,
  },
]); */
