import { Route, Routes } from "react-router-dom";

// components
import Layout from "./components/UI/Layout";

// pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Login from "./pages/Login";
import Error404 from "./pages/Error404";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  );
}
