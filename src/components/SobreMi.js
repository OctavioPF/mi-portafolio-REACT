import React, { useState } from "react";
import "./SobreMi.css";
import { Link } from 'react-router-dom';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [descripcion, setDescripcion] = useState('Hola, Bienvenido a mi perfil soy un desarrollador web egresado de ingenieria en Sistemas Computacionales con una especialidad en desarrollo de software. Soy un entusiasta del aprendizaje continuo, lo que me permite estar al día con las últimas tendencias y tecnologías en el campo del desarrollo web. Me gusta retarme a mi mismo en diferentes proyectos personales desarrollados lo que me ha permitido poner en practica todos mis conocimientos y poner a prueba mi resolucion de errores que surgen en el desarrollo logrando superarme profesionalemente, Estoy en busca de nuevos retos en un ambito mas profesional, por lo cual no dudes en contactarme si te intereso mi perfil.');
  const [habilidadesBlandas, setHabilidadesBlandas] = useState('Comunicación, Trabajo en equipo, Resolucion de conflicto, Creatividad , Aprendizaje Rapido, trabajo bajo presion , Autodidacta , Responsable , Tolerante, Amable , Comunicacion asertiva , Adaptabilidad, Organizado');
  const [habilidadesTecnicas, setHabilidadesTecnicas] = useState('JS: 75% , PHP: 65% , HTML:80% , CSS:80%,  MYSQL: 70%, React.js: 60%, Vue.js: 60%');

  const user = {
    name: "Jose Octavio Palacio",
    avatar: "/assets/yo.png",
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Aquí puedes agregar la lógica para guardar los cambios
    setIsEditing(false);
  };

  return (
    <div className="profile">
      <h2>Perfil</h2>
      <div className="profileCard ">
        <img src={user.avatar} alt="Avatar" className="avatar" />
        <h3>{user.name}</h3>
        <p>{descripcion}</p>
        <h4>Habilidades tecnicas</h4>
        <ul className="skills-list ">
          {habilidadesTecnicas.split(', ').map((skill, index) => (
            <li key={index} className="skill-item custom-btn btn-11">
              {skill}
              <div class="dot"></div>

            </li>
          ))}
        </ul>
        <h4>Habilidades blandas</h4>
        <ul className="skills-list">
          {habilidadesBlandas.split(', ').map((skill, index) => (
            <li key={index} className="skill-item custom-btn btn-11">
              {skill}
            </li>
          ))}
        </ul>

      </div>
      <div className="navigation-content">
                    <h1>Ver más</h1>
                    <p>Puedes mirar otras secciones dando click </p>
                    <div className="tooltip-container">
                        <Link to="/proyectos" className="btn-nav">Proyectos</Link>
                        <span className="tooltip">Explora los proyectos en los que he trabajado y descubre más sobre mis contribuciones.</span>
                    </div>
                    <div className="tooltip-container">
                        <Link to="/cursos" className="btn-nav">Cursos</Link>
                        <span className="tooltip">Listado de cursos y certificaciones que he completado para mejorar mis habilidades.</span>
                    </div>
                    <div className="tooltip-container">
                        <Link to="/contacto" className="btn-nav">Contacto</Link>
                        <span className="tooltip">Información para contactarme, ya sea por correo electrónico o redes sociales.</span>
                    </div>
                </div>
      
    </div>
  );
}

export default Profile;
