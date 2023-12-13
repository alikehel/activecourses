import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: inline-flex;
    border: 1px solid #444;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 10px;
    margin-right: 10px;
    box-sizing: border-box;
    width: 49%;
    background: #222;
    color: #fff;

    @media (max-width: 1200px) {
        width: 100%;
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`;

const ImageContainer = styled.div`
    flex: 0 0 120px;
    overflow: hidden;
    width: 150px;
    height: 150px;

    @media (max-width: 700px) {
        margin: 0 auto;
        height: auto;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

const TextContainer = styled.div`
    flex: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
`;

const ContributorCard = ({
    name,
    role,
    description,
    imageSrc,
    linkedinUrl,
    githubUrl,
    websiteUrl,
}) => (
    <Card>
        <ImageContainer>
            <Image
                src={
                    imageSrc ||
                    '/img/avatar.png'
                }
                alt={`Contributor Image of ${name}`}
            />
        </ImageContainer>
        <TextContainer>
            <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{name}</div>
                <div style={{ color: '#888' }}>{role}</div>
                {description && <p style={{ lineHeight: '1.4' }}>{description}</p>}
            </div>
            <div style={{ display: 'flex', gap: 5 }}>
                {linkedinUrl && (
                    <a href={linkedinUrl} target="_blank" rel="noreferrer">
                        <img src="/img/linkedin-dark.svg" width="32" height="32" />
                    </a>
                )}
                {githubUrl && (
                    <a href={githubUrl} target="_blank" rel="noreferrer">
                        <img src="/img/github-dark.svg" width="32" height="32" />
                    </a>
                )}
                {websiteUrl && (
                    <a href={websiteUrl} target="_blank" rel="noreferrer">
                        <img src="/img/website-dark.svg" width="32" height="32" />
                    </a>
                )}
            </div>
        </TextContainer>
    </Card>
);
export default ContributorCard;
