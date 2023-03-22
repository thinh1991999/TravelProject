import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Layout from "./components/Layout";
import Detail from "./pages/Detail";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import { fetchGlobalData } from "./store/slices/globalSlice";
import { useAppDispatch, useAppSelector } from "./store/hook";
import { InfinitySpin } from "react-loader-spinner";
import Auth from "./pages/Auth";
import Signin from "./components/Authen/Signin";
import Signup from "./components/Authen/Signup";
import Notifications from "./pages/Notifications";
import Verify from "./components/Authen/Verify";
import ForgotPw from "./components/Authen/ForgotPw";
import ResetPw from "./components/Authen/ResetPw";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/detail/:id",
    element: (
      <Layout showHeadSub={false}>
        <Detail />
      </Layout>
    ),
  },
  {
    path: "/search",
    element: (
      <Layout>
        <Search />
      </Layout>
    ),
  },
  {
    path: "/profile",
    element: (
      <Layout showHeadSub={false}>
        <Profile />
      </Layout>
    ),
  },
  {
    path: "/authen/signin",
    element: (
      <Auth>
        <Signin />
      </Auth>
    ),
  },
  {
    path: "/authen/signup",
    element: (
      <Auth>
        <Signup />
      </Auth>
    ),
  },
  {
    path: "/authen/verify",
    element: (
      <Auth>
        <Verify />
      </Auth>
    ),
  },
  {
    path: "/authen/forgot-password",
    element: (
      <Auth>
        <ForgotPw />
      </Auth>
    ),
  },
  {
    path: "/authen/reset-pw",
    element: (
      <Auth>
        <ResetPw />
      </Auth>
    ),
  },
  {
    path: "/notifications",
    element: (
      <Layout showHeadSub={false}>
        <Notifications />
      </Layout>
    ),
  },
]);

function App() {
  const dispatch = useAppDispatch();
  const mainLoading = useAppSelector((state) => state.global.mainLoading);
  useEffect(() => {
    dispatch(fetchGlobalData());
  }, [dispatch]);

  if (mainLoading) {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex justify-center items-center">
        <InfinitySpin width="200" color="#bd1e59" />
      </div>
    );
  }
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
