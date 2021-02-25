import React, {useEffect, useState } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';
import Container from '../../components/Container';

function App(){
    return (
        <>
            <Header/>
            <Container/>
        </>
    );
}

export default App;