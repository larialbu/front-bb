import React, { useState } from 'react';

const UserModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true);

    const handleToggle = () => {
        setIsLogin(!isLogin); // Alterna entre login e cadastro
    };

    if (!isOpen) return null; // Não exibe o modal se `isOpen` for falso

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '10px',
                    width: '400px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    position: 'relative', // Para posicionar o botão de fechar
                }}
            >
                <h2 style={{ textAlign: 'center' }}>{isLogin ? 'Login' : 'Cadastro'}</h2>
                <form>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            placeholder="Digite seu email"
                            style={{
                                width: '100%',
                                padding: '10px',
                                marginBottom: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ddd', // Menos visível
                                backgroundColor: '#f9f9f9', // Fundo branco
                            }}
                        />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            style={{
                                width: '100%',
                                padding: '10px',
                                marginBottom: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ddd',
                                backgroundColor: '#f9f9f9',
                            }}
                        />
                    </div>
                    {!isLogin && (
                        <div>
                            <label>Confirme sua senha:</label>
                            <input
                                type="password"
                                placeholder="Confirme sua senha"
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    marginBottom: '10px',
                                    borderRadius: '5px',
                                    border: '1px solid #ddd',
                                    backgroundColor: '#f9f9f9',
                                }}
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#003380',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginBottom: '10px',
                        }}
                    >
                        {isLogin ? 'Entrar' : 'Cadastrar'}
                    </button>
                    <div style={{ textAlign: 'center' }}>
                        <button
                            type="button"
                            onClick={handleToggle}
                            style={{ background: 'none', border: 'none', color: '#003380', cursor: 'pointer' }}
                        >
                            {isLogin ? 'Ainda não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
                        </button>
                    </div>
                </form>

                {/* Botão de fechar no canto superior direito */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'none',
                        border: 'none',
                        color: '#003380',
                        fontSize: '20px',
                        cursor: 'pointer',
                    }}
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default UserModal;
