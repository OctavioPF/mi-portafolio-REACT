import React, { useState } from 'react';
import "./Cursos.css";

const cursos = [
    {
        id: 13,
        nombre: 'Vue.js: Navegacion con vue router',
        fecha: 'Octubre 2024',
        descripcionGrande: 'Este curso me ayudo a comprender mas a profundidad el uso vue router',
        img: '/assets/curso13.png'
    },
    {
        id: 12,
        nombre: 'Animaciones con CSS',
        fecha: 'Octubre 2024',
        descripcionGrande: 'Este curso práctico reforzó mis habilidadespara el uso de animaciones en css',
        img: '/assets/curso12.png'
    },
    {
        id: 11,
        nombre: 'FastAPI',
        fecha: 'Septiembre 2024',
        descripcionGrande: 'Este curso es una alternativa moderna para la realizacion de una API con el uso de un Framework de Python',
        img: '/assets/curso11.png'
    },
    {
        id: 1,
        nombre: 'Curso de Vue.js: Componentes y Compisition API',
        fecha: 'Julio 2024',
        descripcionGrande: 'Este curso práctico reforzó mis habilidades en el uso de Vue.js enfocado en el uso de componentes y compisition API.',
        img: '/assets/curso10.png'
    },
    {
        id: 2,
        nombre: 'Curso Práctico de Vue.js',
        fecha: 'Julio 2024',
        descripcionGrande: 'Este curso práctico reforzó mis habilidades en el uso de Vue.js y mediante la realización de un proyecto en el cual se vieron diferentres conceptos llevados a la practica',
        img: '/assets/curso9.png'
    },
    {
        id: 3,
        nombre: 'Curso Práctico de HTML y CSS',
        fecha: 'Mayo 2024',
        descripcionGrande: 'Este curso práctico reforzó mis habilidades en HTML y CSS mediante la realización de proyectos aplicados.',
        img: '/assets/curso8.png'
    },
    {
        id: 4,
        nombre: 'Curso Práctico de Frontend Developer',
        fecha: 'Mayo 2024',
        descripcionGrande: 'Este curso complementó mis conocimientos con ejercicios prácticos y proyectos reales.',
        img: '/assets/curso7.png'
    },
    {
        id: 5,
        nombre: 'Curso Frontend Developer',
        fecha: 'Mayo 2024',
        descripcionGrande: 'Este curso integral cubre los aspectos esenciales del desarrollo front-end.',
        img: '/assets/curso6.png'
    },
    {
        id: 6,
        nombre: 'Curso Responsive Design y Maquetación Mobile First',
        fecha: 'Mayo 2024',
        descripcionGrande: 'Este curso me instruyó en la técnica de diseño que prioriza la experiencia en dispositivos móviles, garantizando que las páginas web se vean y funcionen bien en todos los dispositivos',
        img: '/assets/curso5.png'
    },
    {
        id: 7,
        nombre: 'Introducción y Fundamentos de Vue.js',
        fecha: 'Marzo 2024',
        descripcionGrande: 'Este curso me enseñó los principios básicos de Vue.js, una herramienta poderosa para la construcción de interfaces de usuario.',
        img: '/assets/curso4.png'
    },
    {
        id: 8,
        nombre: 'Curso de Tailwind CSS',
        fecha: 'Enero 2024',
        descripcionGrande: 'Aprendí a utilizar este framework de CSS para crear diseños rápidos y personalizados sin necesidad de escribir CSS desde cero.',
        img: '/assets/curso3.png'
    },
    {
        id: 9,
        nombre: 'Curso de React.js',
        fecha: 'Diciembre 2023',
        descripcionGrande: 'Me introdujo a la librería de JavaScript React.js, permitiéndome desarrollar interfaces de usuario dinámicas y eficientes.',
        img: '/assets/curso2.png'
    },
    {
        id: 10,
        nombre: 'Curso Definitivo de HTML y CSS',
        fecha: 'Noviembre 2023',
        descripcionGrande: 'Me proporcionó una base sólida en la construcción y estilización de páginas web, utilizando las tecnologías fundamentales de la web.',
        img: '/assets/curso1.png'
    },

];

const Cursos = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar los cursos basado en el término de búsqueda
    const filteredCursos = cursos.filter(curso => 
        curso.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        curso.descripcionGrande.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="cursos-container">
                              <h2>Cursos</h2>


            <input
                type="text"
                placeholder="Buscar curso..."
                className="search-input"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
                                          <div className="proyectos-actions">
                <button className="btn-add">Agregar</button>
                <button className="btn-edit">Editar</button>
                <button className="btn-delete">Eliminar</button>
            </div>
            <div className="cursos-grid">
                {filteredCursos.map(curso => (
                    <div key={curso.id} className="curso-card">
                        <img src={curso.img} alt={curso.nombre} className="curso-img" />
                        <div className="curso-info">
                            <h3>{curso.nombre}</h3>
                            <p>{curso.fecha}</p>
                        </div>
                        <div className="curso-hover">
                            <p className='decripcionCursosText'>{curso.descripcionGrande}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Cursos;
