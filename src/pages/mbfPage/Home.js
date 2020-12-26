import React from 'react';
import { objectOne } from './Data';
import { ModernFrancis } from '../../components';

const Home = () => {
    return (
        <>
            <ModernFrancis {...objectOne}/>
        </>
    )
}

export default Home
