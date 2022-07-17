import { Route, Routes } from "react-router-dom";

// components
import Layout from "./components/UI/Layout";

// pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

export default function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {isLoggedIn && <Route path="about" element={<AboutPage />} />}
        {!isLoggedIn && <Route path="login" element={<Login />} />}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  );
}
