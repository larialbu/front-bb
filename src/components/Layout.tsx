import React from 'react';
import Navbar from './Navbar';
import Header from './Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* A Navbar agora é fixa e ocupa o lado esquerdo */}
            <Navbar />
            <div
                style={{
                    flex: 1,
                    backgroundColor: '#f0f0f0',
                    marginLeft: '60px', // Espaço para a navbar quando fechada
                    transition: 'margin-left 0.3s',
                }}
            >
                <Header />
                <main style={{ padding: '20px' }}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
