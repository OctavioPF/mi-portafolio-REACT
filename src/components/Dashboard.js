import React from 'react';
import './Dashboard.css';
import SobreMi from './SobreMi';
import Proyectos from './Proyectos';
import Cursos from './Cursos';
import Blog from './Blog';
import Contacto from './Contacto';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h2>Admin Dashboard</h2>
                <nav>
                    <ul>
                        <li><a href="#sobre-mi">Sobre Mí</a></li>
                        <li><a href="#proyectos">Proyectos</a></li>
                        <li><a href="#cursos">Cursos</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </aside>
            <main className="content">
                <section id="sobre-mi">
                    <SobreMi />
                </section>
                <section id="proyectos">
                    <Proyectos />
                </section>
                <section id="cursos">
                    <Cursos />
                </section>
                <section id="blog">
                    <Blog />
                </section>
                <section id="contacto">
                    <Contacto />
                </section>
            </main>
        </div>
    );
}

export default Dashboard;
