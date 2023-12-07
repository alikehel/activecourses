import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid #444;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 10px;
    margin-right: 10px;
    box-sizing: border-box;
    width: 100%; // Full width on small screens
    max-width: 49%; // Half width on larger screens
    background: #222;
    color: #fff;

    @media (min-width: 600px) {
        display: flex;
        flex-direction: row;
        width: 49%;
    }
`;

const ImageContainer = styled.div`
    flex: 0 0 auto;
    overflow: hidden;
    width: 100%;
    height: auto;

    @media (min-width: 600px) {
        width: 150px;
        height: 150px;
    }
`;

const ContributorCard = ({ name, role, description, imageSrc }) => (
    <Card>
        <ImageContainer>
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
        </ImageContainer>
        <div style={{ flex: 1, padding: '10px' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{name}</div>
            <div style={{ color: '#888' }}>{role}</div>
            {description && <p style={{ lineHeight: '1.4' }}>{description}</p>}
            {/* Add more details as needed */}
        </div>
    </Card>
);

export default ContributorCard;