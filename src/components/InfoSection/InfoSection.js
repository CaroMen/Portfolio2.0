import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import {
    InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle,
    ImgWrapper, Img, SkillsList, TextWrapperOne, InfoColumnSkills, SkillColumnOne,
    ProjectRow, ProjectOne, ProjectImg, ProjectHeading, ProjectSubtitle, ProjectLink, 
    LinkToProject,
} from './InfoSection.elements';

const InfoSection = ({ lightBg, imgStart, lightTopLine, lightTextDesc,
    description, headline, lightText, topLine, img, alt, start, pTwo,
    pThree, skillOne, skillTwo, skillThree, skillFour, skillFive,
    skillSix, skillSeven, skillEight, projectImg, projectDescription,
    projectHeadline, projectLink }) => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Subtitle lightTextDesc={lightTextDesc}>{pTwo}</Subtitle>
                                <Subtitle lightTextDesc={lightTextDesc}>{pThree}</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                        <InfoColumnSkills>
                        </InfoColumnSkills>
                        <InfoColumnSkills>
                            <TextWrapperOne>
                                <SkillColumnOne>
                                    <SkillsList lightText={lightText}>{skillOne}</SkillsList>
                                    <SkillsList lightText={lightText}>{skillTwo}</SkillsList>
                                    <SkillsList lightText={lightText}>{skillThree}</SkillsList>
                                    <SkillsList lightText={lightText}>{skillFour}</SkillsList>
                                </SkillColumnOne>
                                <SkillColumnOne>
                                    <SkillsList lightText={lightText}>{skillFive}</SkillsList>
                                    <SkillsList lightText={lightText}>{skillSix}</SkillsList>
                                    <SkillsList lightText={lightText}>{skillSeven}</SkillsList>
                                    <SkillsList lightText={lightText}>{skillEight}</SkillsList>
                                </SkillColumnOne>
                            </TextWrapperOne>
                        </InfoColumnSkills>
                        <ProjectRow>
                            <ProjectOne>
                                <ProjectImg src={projectImg} alt={alt} />
                                <ProjectHeading lightText={lightText}>{projectHeadline}</ProjectHeading>
                                <ProjectSubtitle lightTextDesc={lightText}>{projectDescription}</ProjectSubtitle>
                                <ProjectLink>
                                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/modernbyfrancis">{projectLink}</Link>
                                </ProjectLink>
                            </ProjectOne>
                        </ProjectRow>
                    </InfoRow>

                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
