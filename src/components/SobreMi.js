import React, { useState } from "react";
import "./SobreMi.css";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [descripcion, setDescripcion] = useState('apasionado desarrollador web recién egresado de ingenieria en Sistemas Computacionales. Soy un entusiasta del aprendizaje continuo, lo que me permite estar al día con las últimas tendencias y tecnologías en el campo del desarrollo web.');
  const [habilidadesBlandas, setHabilidadesBlandas] = useState('Comunicación, Trabajo en equipo, Creatividad , Aprendizaje Rapido, trabajo bajo presion , Autodidacta , Responsable , Tolerante, Amable , Comunicacion asertiva , Adaptabilidad, Organizado');
  const [habilidadesTecnicas, setHabilidadesTecnicas] = useState('JavaScript: 75% , PHP: 65% , HTML:80% , CSS:80%,  MYSQL: 70%, React.js: 60%, Vue.js: 60%');

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
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? 'Guardar' : 'Editar'}
        </button>
        {isEditing && (
          <div className="edit-section">
            <textarea 
              placeholder="Descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Habilidades Blandas"
              value={habilidadesBlandas}
              onChange={(e) => setHabilidadesBlandas(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Habilidades Técnicas"
              value={habilidadesTecnicas}
              onChange={(e) => setHabilidadesTecnicas(e.target.value)}
            />
            <button onClick={handleSave}>Guardar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
