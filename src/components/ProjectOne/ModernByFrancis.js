import React from 'react';

import { Container } from '../../globalStyles';
import {ProjectOneTitle, ProjectDesc} from '../ProjectOne/ModernBF.elements';

const ModernByFrancis = ({titleOne, projectDesc}) => {
    return (
        <>
            <Container>
                <ProjectOneTitle>{titleOne}</ProjectOneTitle>
                <ProjectDesc>{projectDesc}</ProjectDesc>
            </Container>
            
        </>
    )
}

export default ModernByFrancis
