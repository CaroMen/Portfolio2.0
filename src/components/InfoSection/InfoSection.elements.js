import styled from 'styled-components';
import { DiPython, DiJavascript1 } from 'react-icons/di';
import { MdKeyboardArrowRight } from "react-icons/md";

// import { Link } from 'react-router-dom';

export const InfoSec = styled.div`
color: #101522;
padding: 160px 0;
background: ${({ lightBg }) => (lightBg ? '#101522' : '#fff')};
`;

export const InfoRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};

@media screen and (max-width: 768px) {
    margin-top: -100px;
}
`;

export const InfoColumn = styled.div`
margin-bottom: -205px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width: 50%;
flex-basis: 50%;

@media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0px;
padding-bottom: 60px;

@media screen and (max-width: 768px) {
    padding-bottom: 125px;
}
`;

export const TopLine = styled.div`
color: ${({ lightTopLine }) => (lightTopLine ? '#2E3630' : '#4b59f7')};
font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
color: ${({ lightText }) => (lightText ? '#1f1f1e' : '$1c2237')};
`;

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '$1c2237')};

`;


export const ImgWrapper = styled.div`
max-width: 555px;
display: flex;
justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;

@media screen and (max-width: 768px) {
    margin-top: 105px;
    margin-bottom: -130px;
}
`;

export const SubtitleSkills = styled.p`
max-width: 440px;
font-size: 18px;
line-height: 24px;
font-size: 18px;
line-height: 16px;
color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '$1c2237')};

@media screen and (max-width: 768px) {
    margin-top: 105px;
}
`;

export const SkillsList = styled.ul`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '$1c2237')};
justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;


export const SkillIconOne = styled(DiPython)`
margin-right: 0.5rem;
`;

export const SkillIconTwo = styled(DiJavascript1)`
margin-right: 0.5rem;
`;

export const TextWrapperOne = styled.div`
max-width: 240px;
margin-top: -80px;
padding-bottom: 20px;
display: flex;

@media screen and (max-width: 768px) {
    margin-top: 20px;
    padding-bottom: 65px;
}
`;

export const InfoColumnSkills = styled.div`
/* margin-bottom: 25px; */
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width: 50%;
flex-basis: 50%;

@media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`;

export const SkillColumnOne = styled.div`
margin-bottom: -75px;
margin-right: 100px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
/* align-items: center; */
max-width: 50%;
flex-basis: 100%;

@media screen and (max-width: 768px) {
    margin-right: 30px;
    margin-left: -5px;
    justify-content: center;
    margin-top: 125px;
    margin-bottom: -250px;
}

/* @media screen and (max-width: 768px) {
    margin-top: 105px;
    margin-bottom: -300px;
} */
`;

export const ProjectRow = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin-top: -180px;

@media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    padding-top: 35px;
}
`;

export const ProjectOne = styled.div`
display: grid;
`;

export const ProjectImg = styled.img`
padding: 0;
border: 0;
max-width: 100%;
display: inline-block;
position: relative;
max-height: 100%;
transition: 0.5s ease;
left: -50px;

&:hover {
        transform: scale(1.05);
    }

@media screen and (max-width: 768px) {
    max-width: 430px;
    max-height: 430px;
    margin-left: 100px;
}
`

export const ProjectHeading = styled.div`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
text-align: left;
margin-top: -50px;
color: ${({ lightText }) => (lightText ? '#1f1f1e' : '$1c2237')};

@media screen and (max-width: 768px) {
    text-align: left;
    padding-top: 20px;
    max-width: 70%;
    margin-left: 85px;
}
`

export const ProjectSubtitle = styled.p`
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
text-align: left;
color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '$1c2237')};

@media screen and (max-width: 768px) {
    max-width: 70%;
    margin-left: 85px;
}
`;

export const ProjectLink = styled.div`
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
text-align: left;
cursor: pointer;

&:hover {
        border-bottom: 2px solid #7B9B82;
        width: 100px;

}

@media screen and (max-width: 768px) {
    max-width: 70%;
    margin-left: 85px;


    &:hover {
            border-bottom: 2px solid #7B9B82;
            width: 100px;

    }
}
`;
