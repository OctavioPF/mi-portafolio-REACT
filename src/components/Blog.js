import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

// Datos de ejemplo para los posts del blog
export const blogPosts = [
    {
        id: 1,
        title: 'Introducción a React',
        date: '2024-09-01',
        description: 'Una guía para comenzar con React, el popular framework de JavaScript.',
        content: 'React es una biblioteca de JavaScript para construir interfaces de usuario. En este post, exploraremos los conceptos básicos de React, cómo instalarlo y cómo crear tu primera aplicación.',
        image: '/assets/blog2.png'
    },
    {
        id: 2,
        title: 'CSS Grid vs Flexbox',
        date: '2024-09-05',
        description: 'Comparación entre CSS Grid y Flexbox para diseño web.',
        content: 'CSS Grid y Flexbox son dos técnicas de diseño en CSS que te permiten crear layouts complejos. En este artículo, compararemos Grid y Flexbox, y discutiremos cuándo usar cada uno.',
        image: '/assets/blog3.png'
    },
    {
        id: 3,
        title: 'Cómo optimizar el rendimiento de tu aplicación React',
        date: '2024-09-10',
        description: 'Consejos para mejorar la velocidad y eficiencia de tus aplicaciones React.',
        content: 'La optimización del rendimiento es crucial para una buena experiencia de usuario. En este post, te mostraremos algunas técnicas para optimizar el rendimiento de tus aplicaciones React, desde la carga diferida hasta la memoización.',
        image: '/assets/blog4.jpg'
    },
    {
        id: 4,
        title: 'Tendencias en desarrollo web para 2024',
        date: '2024-09-15',
        description: 'Lo último en tendencias y tecnologías para desarrolladores web en 2024.',
        content: 'El desarrollo web está en constante evolución. En este artículo, exploramos las tendencias emergentes en el desarrollo web para 2024, incluyendo nuevas tecnologías y prácticas recomendadas.',
        image: '/assets/blog1.jpg'
    }
];

const Blog = () => {
    const navigate = useNavigate();

    const handlePostClick = (id) => {
        navigate(`/post/${id}`);
    };

    const handleAddPost = () => {
        // Función para agregar un nuevo post
        console.log("Agregar nuevo post");
    };

    return (
        <div className="blog-container">
            <h2 className="blog-title">Blog</h2>
            <div className="blog-posts">
                {blogPosts.map(post => (
                    <div 
                        key={post.id} 
                        className="blog-card" 
                        onClick={() => handlePostClick(post.id)}
                    >
                        <img src={post.image} alt={post.title} />
                        <h3>{post.title}</h3>
                        <p className="blog-date">{post.date}</p>
                        <p>{post.description}</p>
                    </div>
                ))}
            </div>
            <div className="add-post">
                <button onClick={handleAddPost}>Agregar Nuevo Post</button>
            </div>
        </div>
    );
};

export default Blog;