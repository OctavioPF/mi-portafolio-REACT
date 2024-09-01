import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from './Blog'; // Asegúrate de importar los datos correctamente
import './PostDetail.css';

const PostDetail = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));

    if (!post) {
        return <div>Post no encontrado</div>;
    }

    return (
        <div className="post-detail-container">
            <h1>{post.title}</h1>
            <p className="post-date">{post.date}</p>
            <img src={post.image} alt={post.title} />
            <p className="post-description">{post.description}</p>
            <div className="post-content">
                <p>{post.content}</p>
            </div>
        </div>
    );
};

export default PostDetail;
