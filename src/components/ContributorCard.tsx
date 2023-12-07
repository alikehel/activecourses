import React from 'react';

const ContributorCard = ({ name, role, description, imageSrc }) => (
    <div
        style={{
            display: 'inline-flex',
            border: '1px solid #444',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '10px',
            marginRight: '10px',
            boxSizing: 'border-box',
            width: '49%',
            // maxWidth: '100%',
            // minWidth: '300px',
            background: '#222',
            color: '#fff',
        }}
    >
        <div style={{ flex: '0 0 120px', overflow: 'hidden', width: '150px', height: '150px' }}>
            <img
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
                src={
                    imageSrc ||
                    'https://www.pngkey.com/png/detail/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png'
                }
                alt={`Contributor Image of ${name}`}
            />
        </div>
        <div style={{ flex: 1, padding: '10px' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{name}</div>
            <div style={{ color: '#888' }}>{role}</div>
            {description && <p style={{ lineHeight: '1.4' }}>{description}</p>}
            {/* Add more details as needed */}
        </div>
    </div>
);

export default ContributorCard;
