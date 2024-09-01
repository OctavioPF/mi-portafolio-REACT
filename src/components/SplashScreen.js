import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css';

function SplashScreen() {
    const navigate = useNavigate();
    
    useEffect(() => {
        setTimeout(() => {
            navigate('/home');
        }, 10000); // 3 segundos
    }, [navigate]);

    return (
        <div className="splash-screen">
            <div className="content">
                <h1>Bienvenido a mi portafolio web</h1>
                <p>Eres bienvenid@ cualquier pregunta no dudes en contactarme</p>
            </div>
            <div className="background"></div>
        </div>
    );
}

export default SplashScreen;
