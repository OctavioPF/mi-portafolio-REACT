import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaEdit } from 'react-icons/fa';
import './Contacto.css';

const Contacto = () => {
    return (
        <div className="contacto-container">
            <h1>Contacto</h1>
            <div className="contacto-grid">
                <div className="contacto-item">
                    <FaEnvelope className="contacto-icon" />
                    <h2>Correo Electrónico</h2>
                    <p><a href="octaviop0809@gmail.com">octaviop0809@gmail.com</a></p>
                </div>
                <div className="contacto-item">
                    <FaPhone className="contacto-icon" />
                    <h2>Teléfono</h2>
                    <p><a href="tel:+52 7861704152">+52 786 170 4152</a></p>
                </div>
                <div className="contacto-item">
                    <FaLinkedin className="contacto-icon" />
                    <h2>LinkedIn</h2>
                    <p><a href="https://www.linkedin.com/in/octavio-palacio-5b93b3295/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/octavio-palacio-5b93b3295/</a></p>
                </div>
                <div className="edit-section">
                    <FaEdit className="edit-icon" />
                    <h2>Editar Información</h2>
                    <p>Haz clic en el botón de abajo para editar tu información de contacto.</p>
                    <button className="edit-button">Editar</button>
                </div>
            </div>
            <footer className="contacto-footer">
                <p>&copy; 2024 Tu Nombre. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Contacto;
