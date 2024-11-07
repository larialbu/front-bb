import React from 'react';

// Estilos para simular o mapa e posicionar os elementos
const styles = {
    container: {
        display: 'flex',
        height: '100vh'
    },
    list: {
        width: '20%',
        padding: '10px',
        backgroundColor: '#f4f4f9',
        borderRight: '1px solid #ccc',
        boxSizing: 'border-box'
    },
    map: {
        width: '80%',
        position: 'relative',
        backgroundColor: '#a0d6b4', // Fundo de cor que lembra terra
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage: `
            radial-gradient(circle at 30% 30%, #5aa27c, transparent 25%),
            radial-gradient(circle at 70% 40%, #5aa27c, transparent 25%),
            radial-gradient(circle at 40% 80%, #f0f0c0, transparent 30%),
            radial-gradient(circle at 80% 75%, #8cc084, transparent 20%),
            radial-gradient(circle at 60% 20%, #f0f0c0, transparent 25%)`,
        backgroundSize: 'cover'
    },
    mapMarker: (x, y, color) => ({
        position: 'absolute',
        top: `${y}%`,
        left: `${x}%`,
        width: '10px',
        height: '10px',
        backgroundColor: color,
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)'
    }),
    listItem: (color) => ({
        color: color,
        fontWeight: 'bold',
        marginBottom: '10px'
    })
};

const Mapa = () => {
    // Definindo os pontos de coleta e seus tipos com coordenadas fictícias (0-100%)
    const pontosDeColeta = [
        { id: 1, tipo: 'A', x: 30, y: 40, color: 'red' },
        { id: 2, tipo: 'B', x: 70, y: 60, color: 'green' },
        { id: 3, tipo: 'A', x: 50, y: 20, color: 'red' }
    ];

    return (
        <div style={styles.container}>
            {/* Lista lateral de pontos de coleta */}
            <div style={styles.list}>
                <h2 style={{ textAlign: 'center', color: '#003380' }}>
                    Pontos de Coleta
                </h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {pontosDeColeta.map((ponto) => (
                        <li key={ponto.id} style={styles.listItem(ponto.color)}>
                            {`Ponto de Coleta ${ponto.id} - Tipo ${ponto.tipo}`}
                        </li>
                    ))}
                </ul>
            </div>

            {/* "Mapa" Fictício com fundo estilizado */}
            <div style={styles.map}>
                {pontosDeColeta.map((ponto) => (
                    <div
                        key={ponto.id}
                        style={styles.mapMarker(ponto.x, ponto.y, ponto.color)}
                        title={`Ponto de Coleta ${ponto.id} - Tipo ${ponto.tipo}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Mapa;
