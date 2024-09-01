import React from 'react';
import Modal from 'react-modal';
import './ModalProyecto.css';

const ProjectDetailsModal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Detalles del Proyecto"
            className="customModal"
            overlayClassName="customOverlay"
        >
            <div className="modalContent">
                <img src={project.img} alt={project.title} className="projectImage" />
                <h2 className="projectTitle">{project.title}</h2>
                <p className="projectDescription">{project.description}</p>
                <div className="modalActions">
                    <button 
                        className="projectButton"
                        onClick={() => window.open(project.url, '_blank')}
                    >
                        Ver Proyecto
                    </button>
                    <button className="closeButton" onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </Modal>
    );
};

export default ProjectDetailsModal;
