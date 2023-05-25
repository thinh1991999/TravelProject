import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ToastContainer } from "react-toastify";
import { InfinitySpin } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/hook";
import { fetchGlobalData } from "./store/slices/globalSlice";

import Layout from "./components/Layout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Signin from "./components/Authen/Signin";
import Signup from "./components/Authen/Signup";
import Notifications from "./pages/Notifications";
import Verify from "./components/Authen/Verify";
import ForgotPw from "./components/Authen/ForgotPw";
import ResetPw from "./components/Authen/ResetPw";
import BecomeHost from "./pages/BecomeHost";
import AboutPlace from "./components/BecomeHost/AboutPlace";
import Structure from "./components/BecomeHost/Structure";
import PrivacyType from "./components/BecomeHost/PrivacyType";
import Location from "./components/BecomeHost/Location";
import FloorPlan from "./components/BecomeHost/FloorPlan";
import StandOut from "./components/BecomeHost/StandOut";
import Amenities from "./components/BecomeHost/Amenities";
import Photos from "./components/BecomeHost/Photos";
import Title from "./components/BecomeHost/Title";
import Description from "./components/BecomeHost/Description";
import FinishSetup from "./components/BecomeHost/FinishSetup";
import Price from "./components/BecomeHost/Price";
import Done from "./components/BecomeHost/Done";
import LayoutHosting from "./components/LayoutHosting";
import Listing from "./pages/Listing";
import Hosting from "./pages/Hosting";
import Checkout from "./pages/Checkout";

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
    path: "/checkout",
    element: (
      <Layout showHeadSub={false}>
        <Checkout />
      </Layout>
    ),
  },
  {
    path: "/become-a-host/about-your-place",
    element: (
      <BecomeHost next="/become-a-host/structure" level={0}>
        <AboutPlace />
      </BecomeHost>
    ),
  },
  {
    path: "/become-a-host/structure",
    element: (
      <BecomeHost
        back="/become-a-host/about-your-place"
        next="/become-a-host/privacy-type"
        level={1}
      >
        <Structure />
      </BecomeHost>
    ),
  },
  {
    path: "/become-a-host/privacy-type",
    element: (
      <BecomeHost
        back="/become-a-host/structure"
        next="/become-a-host/location"
        level={2}
      >
        <PrivacyType />
      </BecomeHost>
    ),
  },
  {
    path: "/become-a-host/location",
    element: (
      <BecomeHost
        back="/become-a-host/privacy-type"
        next="/become-a-host/floor-plan"
        level={3}
      >
        <Location />
      </BecomeHost>
    ),
  },
  {
    path: "/become-a-host/floor-plan",
    element: (
      <BecomeHost
        back="/become-a-host/location"
        next="/become-a-host/stand-out"
        level={4}
      >
        <FloorPlan />
      </BecomeHost>
    ),
  },
  {
    path: "/become-a-host/stand-out",
    element: (
      <BecomeHost
        back="/become-a-host/floor-plan"
        next="/become-a-host/amenities"
        level={5}
      >
        <StandOut />
      </BecomeHost>
    ),
  },
  {
    path: "/become-a-host/amenities",
    element: (
      <BecomeHost
        back="/become-a-host/stand-out"
        next="/become-a-host/photos"
        level={6}
      >
        <Amenities />
      </BecomeHost>
    ),
  },
  {
    path: "/become-a-host/photos",
    element: (
      <BecomeHost
        back="/become-a-host/amenities"
        next="/become-a-host/title"
        level={7}
      >
        <Photos />
      </BecomeHost>
    ),
  },
  {
    path: "/become-a-host/title",
    element: (
      <BecomeHost
        back="/become-a-host/photos"
        next="/become-a-host/description"
        level={8}
      >
        <Title />
      </BecomeHost>
    ),
  },
  {
    path: "/become-a-host/description",
    element: (
      <BecomeHost
        back="/become-a-host/title"
        next="/become-a-host/finish-setup"
        level={9}
      >
        <Description />
      </BecomeHost>
    ),
  },
  {
    path: "/become-a-host/finish-setup",
    element: (
      <BecomeHost
        back="/become-a-host/description"
        next="/become-a-host/price"
        level={10}
      >
        <FinishSetup />
      </BecomeHost>
    ),
  },
  {
    path: "/become-a-host/price",
    element: (
      <BecomeHost
        back="/become-a-host/finish-setup"
        next="/become-a-host/done"
        level={11}
      >
        <Price />
      </BecomeHost>
    ),
  },
  {
    path: "/become-a-host/done",
    element: (
      <BecomeHost back="/become-a-host/price" level={12}>
        <Done />
      </BecomeHost>
    ),
  },
  {
    path: "/hosting",
    element: (
      <LayoutHosting>
        <Hosting />
      </LayoutHosting>
    ),
  },
  {
    path: "/hosting/listing",
    element: (
      <LayoutHosting showFooter={false}>
        <Listing />
      </LayoutHosting>
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
