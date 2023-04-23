import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "src/pages/About/AboutUs";
import Contact from "src/pages/Contact/Contact.jsx";
import Home from "src/pages/Home/Home";
import Service from "src/pages/Service/Service.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";

const Routing = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<Dashboard/>} /> */}
        <Route
          exact
          path={"/"}
          element={
            <Suspense fallback={<></>}>
              <ProtectedRoutes>
                <Home/>
              </ProtectedRoutes>
            </Suspense>
          }
        />
        {/* <Route path='/user' element={<User/>} /> */}
        <Route
          exact
          path={"/about"}
          element={
            <Suspense fallback={<></>}>
              <ProtectedRoutes>
                <AboutUs/>
              </ProtectedRoutes>
            </Suspense>
          }
        />

<Route
          exact
          path={"/services"}
          element={
            <Suspense fallback={<></>}>
              <ProtectedRoutes>
                <Service/>
              </ProtectedRoutes>
            </Suspense>
          }
        />

<Route
          exact
          path={"/about"}
          element={
            <Suspense fallback={<></>}>
              <ProtectedRoutes>
                <Contact/>
              </ProtectedRoutes>
            </Suspense>
          }
        />
       
      
      </Routes>
    </div>
  );
};

export default Routing;
