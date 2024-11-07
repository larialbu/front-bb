import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMapMarkedAlt, faQrcode, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // Função de navegação para diferentes telas
    const handleNavigation = (path: string) => {
        router.push(path);
        setIsOpen(false); // Fecha a navbar após a navegação
    };

    return (
        <div
            style={{
                width: isOpen ? '250px' : '60px',
                height: '100vh',
                backgroundColor: '#FFCC00',
                transition: 'width 0.3s',
                position: 'fixed',
                top: 0,
                left: 0,
                padding: '20px',
                color: 'white',
            }}
        >
            <button
                onClick={toggleNavbar}
                style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '24px',
                    marginBottom: '20px',
                    cursor: 'pointer',
                }}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>

            {isOpen && (
                <nav>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '20px' }}>
                            <a
                                href="#"
                                onClick={() => handleNavigation('/')}
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '18px',
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faHome}
                                    style={{ marginRight: '10px' }}
                                />
                                Home
                            </a>
                        </li>
                        <li style={{ marginBottom: '20px' }}>
                            <a
                                href="#"
                                onClick={() => handleNavigation('/mapa')}
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '18px',
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faMapMarkedAlt}
                                    style={{ marginRight: '10px' }}
                                />
                                Mapa de Pontos de Coleta
                            </a>
                        </li>
                        <li style={{ marginBottom: '20px' }}>
                            <a
                                href="#"
                                onClick={() => handleNavigation('/qr')}
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '18px',
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faQrcode}
                                    style={{ marginRight: '10px' }}
                                />
                                QR Code
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Navbar;
