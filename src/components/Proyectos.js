import React, { useState } from 'react';
import Slider from 'react-slick';
import ProjectDetailsModal from './ModalProyecto'; // Asegúrate de importar el modal
import "./Proyectos.css";

// Datos de ejemplo para los proyectos
const proyectos = [
    {
        title: 'ToolReact',
        description: 'Proyecto donde trata de diferentes herramientas utilizando react.js como base para realizarlas',
        url: 'https://toolsreactjs.netlify.app/',
        img: '/assets/proyecto13.png',
        date: '2024-08-30'
    },
    {
        title: 'Portafolio Vue.js',
        description: 'Proyecto donde se uso el Framework Vue.js para realizar el maquietado de una version de mi portafolio donde implemente mas los conocimientos de Vue',
        url: 'https://portafoliojopf.netlify.app/',
        img: '/assets/proyecto14.png',
        date: '2024-07-26'
    },
    {
        title: 'AppAhorro',
        description: 'Cuenta con las funciones de llevar la gestion tanto de ahorros como de gastos marcando un total de los ahorros optenidos, realizada para demostrar las capacidades del Framework Vue.js',
        url: 'https://appahorros.netlify.app/',
        img: '/assets/proyecto1.png',
        date: '2024-08-01'
    },
    {
        title: 'TaskApp',
        description: 'Cuenta con las funciones de llevar la gestion tareas y dar la opcion de marcar como completada y marcar las que faltan para completar el total, usando el framework React.js',
        url: 'https://octaviopf.github.io/TaskApp/',
        img: '/assets/proyecto2.png',
        date: '2024-08-02'
    },
    {
        title: 'Cuestionario Vue',
        description: 'Cuenta con las funciones de llevar acabo un cuestionario y dar la opcion de marcar como completada y marcar las que faltan para completar el total, usando el framework React.js',
        url: 'https://pregslandingvue.netlify.app/',
        img: '/assets/proyecto3.png',
        date: '2024-08-03'
    },
    {
        title: 'ApiPokemon',
        description: 'Cuenta con las funciones de mostra una lista de todos los nombres, cuenta con un buscador y puede mostra la informacion en un modal, su principal funcion es el consumo de una API con Vue.js',
        url: 'https://p0k3mon.netlify.app/',
        img: '/assets/proyecto4.png',
        date: '2024-08-01'
    },
    {
        title: 'Desayuno Millonario',
        description: 'Participe en el desarrollo de la parte de Frontend donde tuve desarrollar algunas vistas de la pagina contando con un diseño responsivo en diferentes navegadores y dispositivos',
        url: 'https://www.ch.promokelloggs.com/',
        img: '/assets/proyecto5.png',
        date: '2024-08-01'
    },
    {
        title: 'Mas bienestar',
        description: 'Participe en el desarrollo de la parte de Frontend donde tuve desarrollar vistas de la pagina contando con un diseño responsivo en diferentes navegadores y dispositivos',
        url: 'https://www.promokelloggs.com.mx/',
        img: '/assets/proyecto6.png',
        date: '2024-08-01'
    },
    {
        title: 'Viaja con',
        description: 'Participe en el desarrollo de la parte de Frontend donde tuve desarrollar vistas de la pagina contando con un diseño responsivo en diferentes navegadores y dispositivos',
        url: 'https://www.ganaconkelloggs.com/',
        img: '/assets/proyecto7.png',
        date: '2024-08-01'
    },
    {
        title: 'Duelo de tigres',
        description: 'Participe en el mantenimiento del sitio y en la creacion de funciones que fueron requeridas por el cliente donde se trabajo la adaptabilidad al sitio',
        url: 'https://www.duelodetigres.com/',
        img: '/assets/proyecto8.png',
        date: '2024-08-01'
    },
    {
        title: 'Chocodilema',
        description: 'Participe en el mantenimiento del sitio y en la creacion de funciones para adaptar el sitio a los requerimientos solicitados',
        url: 'https://www.chocokrispis.com.mx/ChocoKrispisBooms',
        img: '/assets/proyecto9.png',
        date: '2024-08-01'
    },
    {
        title: 'Noble & Kisha',
        description: 'Participe en el desarrollo de nuevas vistas y modificacion y adaptar paginas existentes a los nuevos diseños todo desde la plataforma de wordpres mediante plugins y el uso de elementor',
        url: 'https://grandpet.com/',
        img: '/assets/proyecto10.png',
        date: '2024-08-01'
    },
    {
        title: 'PringlesGamer',
        description: 'Participe en el desarrollo de la parte de Frontend donde tuve desarrollar algunas vistas de la pagina contando con un diseño responsivo en diferentes navegadores y dispositivos',
        url: 'https://www.pringlesgamer.com.mx/',
        img: '/assets/proyecto11.png',
        date: '2024-08-01'
    }

];

// Configuración del carrusel
const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 768, // Dispositivos móviles
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 900, // Dispositivos móviles
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
};

const Proyectos = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (proyecto) => {
        setSelectedProject(proyecto);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='proyectos'>
                  <h2>Proyectos</h2>

            <Slider {...carouselSettings}>
                {proyectos.map((proyecto, index) => (
                    <div key={index} onClick={() => handleOpenModal(proyecto)}>
                        <img src={proyecto.img} alt={proyecto.title} className='imgProyectos'/>
                        <h3>{proyecto.title}</h3>
                    </div>
                ))}
            </Slider>
            <ProjectDetailsModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                project={selectedProject}
            />

            {/* Div con botones de acción */}
            <div className="proyectos-actions">
                <button className="btn-add">Agregar</button>
                <button className="btn-edit">Editar</button>
                <button className="btn-delete">Eliminar</button>
            </div>
        </div>
    );
};

export default Proyectos;
