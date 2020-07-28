import React, { useState, useEffect } from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import api from '../../services/api'

import * as S from './styles'


function Task() {
    const [count, setCount] = useState([])
    async function lastTaks() {
        await api.get(`/task/last/11:11:11:11:1111`)
            .then(response => {
                setCount(response.data)
            })
    }



    useEffect(() => {
        lastTaks();
    }, [])


    return (
        <S.Container>
            <Header count={count.length} />

            <Footer />
        </S.Container>
    );
}

export default Task;
