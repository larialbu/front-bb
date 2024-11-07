import React from 'react';
import { FaRecycle, FaLeaf, FaHandsHelping, FaRegLightbulb } from 'react-icons/fa';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#003380' }}>Bem-vindo ao Projeto de Upcycling!</h2>
      <p style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '30px' }}>
        O projeto de upcycling visa transformar resíduos em novos produtos, promovendo a
        sustentabilidade e a redução do impacto ambiental. Descubra mais sobre o poder de
        transformar o que seria descartado em algo útil!
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Para telas maiores
          gap: '20px',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
          }}
        >
          <FaRecycle style={{ fontSize: '50px', color: '#003380' }} />
          <h3>Reduzindo Desperdício</h3>
          <p>
            Transformamos materiais que iriam para o lixo em novos produtos, dando-lhes uma nova vida
            e contribuindo para a redução de resíduos.
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
          }}
        >
          <FaLeaf style={{ fontSize: '50px', color: '#4CAF50' }} />
          <h3>Sustentabilidade</h3>
          <p>
            Ao reaproveitar materiais, estamos contribuindo para a preservação do meio ambiente e
            apoiando práticas mais ecológicas em nossa comunidade.
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
          }}
        >
          <FaHandsHelping style={{ fontSize: '50px', color: '#FF9800' }} />
          <h3>Impacto Social</h3>
          <p>
            Nosso projeto não só melhora o meio ambiente, mas também gera oportunidades de emprego
            e desenvolvimento social para comunidades locais.
          </p>
        </div>

        {/* Card 4 */}
        <div
          style={{
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
          }}
        >
          <FaRegLightbulb style={{ fontSize: '50px', color: '#FFEB3B' }} />
          <h3>Inovação</h3>
          <p>
            Acreditamos no poder da criatividade e da inovação para transformar os desafios ambientais
            em novas oportunidades para o futuro.
          </p>
        </div>
      </div>
    </div>
  );
}
