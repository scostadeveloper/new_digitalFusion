import React from 'react';

const WHATSAPP_NUMBER = '5521976958970'; // Substitua pelo número real com DDI e DDD
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const WhatsappPopup = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '32px',
        zIndex: 1000,
        background: '#25D366',
        borderRadius: '50%',
        width: '64px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
        cursor: 'pointer',
        transition: 'transform 0.2s',
      }}
      onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
      onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        style={{ width: 36, height: 36 }}
      />
    </a>
  );
};

export default WhatsappPopup;
