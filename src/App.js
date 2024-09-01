import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import SplashScreen from "./components/SplashScreen";
import Home from "./components/Home";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Cursos from "./components/Cursos";
import Blog from "./components/Blog";
import Contacto from "./components/Contacto";
import Header from "./components/Header";
import ProjectPage from "./components/ModalProyecto";
import PostDetail from "./components/PostDetail";
import "./App.css";

function App() {
  const [splashDone, setSplashDone] = useState(false);

  useEffect(() => {
    // Simula la duración del SplashScreen y luego redirige a Home
    const timer = setTimeout(() => {
      setSplashDone(true);
    }, 6000); // 3 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta antes de que termine
  }, []);

  return (
    <Router>
      <Routes>
        {!splashDone ? (
          <Route path="/" element={<SplashScreen />} />
        ) : (
          <>
            <Route
              path="/home"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
            <Route
              path="/sobre-mi"
              element={
                <>
                  <Header />
                  <SobreMi />
                </>
              }
            />
            <Route
              path="/proyectos"
              element={
                <>
                  <Header />
                  <Proyectos />
                </>
              }
            />
            <Route
              path="/cursos"
              element={
                <>
                  <Header />
                  <Cursos />
                </>
              }
            />
            <Route
              path="/blog"
              element={
                <>
                  <Header />
                  <Blog />
                </>
              }
            />
            <Route
              path="/contacto"
              element={
                <>
                  <Header />
                  <Contacto />
                </>
              }
            />{" "}
            <Route
              path="/login"
              element={
                <>
                  <Header />
                  <Login />
                </>
              }
            />
            <Route path="/proyecto/:id" element={<ProjectPage />} />
            <Route
              path="/post/:id"
              element={
                <>
                  <Header />
                  <PostDetail />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/home" />} />
          </>
          
        )}
      </Routes>
    </Router>
  );
}

export default App;
