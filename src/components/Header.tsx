import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import UserModal from './UserModal'; // Importando o UserModal

const Header: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura do modal

    const handleUserIconClick = () => {
        setIsModalOpen(true); // Abre o modal ao clicar no ícone do usuário
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Fecha o modal
    };

    return (
        <>
            <header
                style={{
                    backgroundColor: '#003380',
                    color: 'white',
                    padding: '20px 30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '10px'
                }}
            >
                {/* Texto à esquerda */}
                <div>
                    <h1 style={{ fontSize: '20px', margin: 0 }}>Upcycling BB</h1>
                </div>

                {/* Ícone de usuário com círculo à direita */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        color: '#003380',
                        fontSize: '20px',
                        marginLeft: '20px',
                        cursor: 'pointer', // Adicionando cursor de ponteiro para o clique
                    }}
                    onClick={handleUserIconClick} // Ao clicar no ícone
                >
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </header>

            {/* Exibe o modal se o estado isModalOpen for true */}
            <UserModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default Header;
