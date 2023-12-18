import Login from "./pages/login";
import Register from "./pages/register";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Nav";
import LeftBar from "./components/Leftbar";
import RightBar from "./components/Rightbar";
import Home from "./pages/home";

// import { useContext } from "react";

// import { AuthContext } from "./context/authContext";

function App() {
  // const { currentUser } = useContext(AuthContext);

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/chatChat/",
      element: <Layout />,
      children: [
        {
          path: "/chatChat/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/chatChat/login",
      element: <Login />,
    },
    {
      path: "/chatChat/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
