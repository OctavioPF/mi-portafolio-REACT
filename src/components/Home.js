import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './Home.css';

const Home = () => {
    const [setShowMore] = useState(false);

    const handleConoceMasClick = () => {
        setShowMore(true);
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

    return (
        <div className="home-container">
            <section className="hero">
                <div className="hero-content">
                    <h1>Bienvenido a mi Portafolio</h1>
                    <p>Explora mis proyectos, habilidades y mucho más.</p>
                    <button onClick={handleConoceMasClick} className="btn-primary">Conoce Más</button>
                </div>
            </section>
            <div>
                <nav className="navigation">
                    <div className="navigation-content">
                        <h1>¿Qué deseas mirar primero?</h1>
                        <p>Puedes dar clic en alguna de estas opciones</p>
                        <div className="tooltip-container">
                            <Link to="/sobre-mi" className="btn-nav">Sobre Mí</Link>
                            <span className="tooltip">Aquí podrás encontrar información relevante sobre mí, quien soy y las habilidades técnicas y blandas que tengo.</span>
                        </div>
                        <div className="tooltip-container">
                            <Link to="/proyectos" className="btn-nav">Proyectos</Link>
                            <span className="tooltip">Explora los proyectos en los que he trabajado y descubre más sobre mis contribuciones.</span>
                        </div>
                        <div className="tooltip-container">
                            <Link to="/cursos" className="btn-nav">Cursos</Link>
                            <span className="tooltip">Listado de cursos y certificaciones que he completado para mejorar mis habilidades.</span>
                        </div>
                        <div className="tooltip-container">
                            <Link to="/blog" className="btn-nav">Blog</Link>
                            <span className="tooltip">Lee los artículos más recientes y publicaciones sobre temas de interés.</span>
                        </div>
                        <div className="tooltip-container">
                            <Link to="/contacto" className="btn-nav">Contacto</Link>
                            <span className="tooltip">Información para contactarme, ya sea por correo electrónico o redes sociales.</span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Home;
