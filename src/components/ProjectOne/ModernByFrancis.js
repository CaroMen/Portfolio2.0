import React from 'react';

import { Container } from '../../globalStyles';
import {ProjectOneTitle} from '../ProjectOne/ModernBF.elements';

const ModernByFrancis = ({titleOne}) => {
    return (
        <>
            <Container>
                <ProjectOneTitle>{titleOne}</ProjectOneTitle>
            </Container>
            
        </>
    )
}

export default ModernByFrancis
