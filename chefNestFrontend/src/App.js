import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import NotificationBanner from "./Components/Header/Head";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";

import ChefDirectory from "./Components/ChefSearch";
import ChefDetails from "./Components/ChefDetailsPage";

// Auth Pages
const Login = lazy(() => import("./Components/Auth/Login"));
const Register = lazy(() => import("./Components/Auth/Register"));

// Website Pages
const Hom = lazy(() => import("./Components/home/Hom"));
const About = lazy(() => import("./Components/About/About"));
const BookNow = lazy(() => import("./Components/BookNow/BookNow"));
const Contact = lazy(() => import("./Components/Contact/Contact"));

const PrivacyPolicy = lazy(() =>
  import("./Components/Footer/PrivacyPolicy")
);

const Terms = lazy(() =>
  import("./Components/Footer/Terms")
);

function App() {
  const location = useLocation();

  const token = localStorage.getItem("token");

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!isAuthPage && token && (
        <>
          <NotificationBanner />
          <Navbar />
        </>
      )}

      <Suspense
        fallback={
          <div className="text-center text-xl py-20">
            Loading...
          </div>
        }
      >
        <Routes>

          {/* Login */}
          <Route
            path="/login"
            element={
              token ? <Navigate to="/" replace /> : <Login />
            }
          />

          {/* Register */}
          <Route
            path="/register"
            element={
              token ? <Navigate to="/" replace /> : <Register />
            }
          />

          {/* Home */}
          <Route
            path="/"
            element={
              token ? <Hom /> : <Navigate to="/login" replace />
            }
          />

          {/* About */}
          <Route
            path="/about"
            element={
              token ? <About /> : <Navigate to="/login" replace />
            }
          />

          {/* Book Now */}
          <Route
            path="/book-now"
            element={
              token ? <BookNow /> : <Navigate to="/login" replace />
            }
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={
              token ? <Contact /> : <Navigate to="/login" replace />
            }
          />

          {/* Chef Search */}
          <Route
            path="/chef-search"
            element={
              token ? <ChefDirectory /> : <Navigate to="/login" replace />
            }
          />

          {/* Chef Details */}
          <Route
            path="/chef/:id"
            element={
              token ? <ChefDetails /> : <Navigate to="/login" replace />
            }
          />

          {/* Privacy Policy */}
          <Route
            path="/privacy-policy"
            element={
              token ? (
                <PrivacyPolicy />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Terms & Conditions */}
          <Route
            path="/terms"
            element={
              token ? (
                <Terms />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          {/* Invalid URL */}
          <Route
            path="*"
            element={<Navigate to={token ? "/" : "/login"} replace />}
          />

        </Routes>
      </Suspense>

      {!isAuthPage && token && <Footer />}
    </>
  );
}

export default App;