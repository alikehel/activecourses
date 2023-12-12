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
`;

const ContributorCard = ({ name, role, description, imageSrc, linkedinUrl, githubUrl }) => (
    <Card>
        <ImageContainer>
            <Image
                src={
                    imageSrc ||
                    'https://www.pngkey.com/png/detail/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png'
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
            <div>
                {linkedinUrl && (
                    <a href={linkedinUrl} target="_blank" rel="noreferrer">
                        <picture>
                            <source media="(prefers-color-scheme: dark)" srcSet="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin-dark.svg" />
                            <source media="(prefers-color-scheme: light)" srcSet="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" />
                            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="32" height="32" />
                        </picture>
                    </a>
                )}
                {githubUrl && (
                    <a href={githubUrl} target="_blank" rel="noreferrer">
                        <picture>
                            <source media="(prefers-color-scheme: dark)" srcSet="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github-dark.svg" />
                            <source media="(prefers-color-scheme: light)" srcSet="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" />
                            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" width="32" height="32" />
                        </picture>
                    </a>
                )}
            </div>
        </TextContainer>
    </Card>
);
export default ContributorCard;
