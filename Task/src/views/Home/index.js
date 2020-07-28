import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FilterCard from '../../components/FilterCard'
import TaskCard from '../../components/TaskCard'
import api from '../../services/api'

import * as S from './styles'


function Home() {

  const [filterActived, setFilterActived] = useState('year')
  const [tasks, setTasks] = useState([])
  const [count, setCount] = useState([])

  async function loadTaks(){
    await api.get(`/task/${filterActived}/11:11:11:11:1111`)
    .then(response =>{
      setTasks(response.data)
    })
  }

  async function lastTaks(){
    await api.get(`/task/last/11:11:11:11:1111`)
    .then(response =>{
      setCount(response.data) 
    })
  }

  function Notification(){
    setFilterActived('last')
  }

  useEffect(()=>{
    loadTaks();
    lastTaks();
  },[filterActived])


  return (
    <S.Container>
      <Header count={count.length} clickNotification={Notification} />

      <S.CardFilter>

      <button type='button' onClick={()=>setFilterActived('all')}>
          <FilterCard title="Todos" actived={filterActived === 'all'} />
        </button>
        <button type='button' onClick={()=>setFilterActived('today')}>
          <FilterCard title="Hoje" actived={filterActived === 'today'} />
        </button>
        <button type='button' onClick={()=>setFilterActived('week')} >
          <FilterCard title="Semana" actived={filterActived === 'week'} />
        </button>
        <button type='button' onClick={()=>setFilterActived('month')}>
          <FilterCard title="Mês" actived={filterActived === 'month'} />
        </button>
        <button type='button' onClick={()=>setFilterActived('year')}>
          <FilterCard title="Ano" actived={filterActived==='year'} />
        </button>
      </S.CardFilter>
      <S.Title>
        <h3>{filterActived === 'last' ? 'TAREFAS ANTIGAS': 'TAREFAS'}</h3>
      </S.Title>
      <S.Content>
        {
          tasks.map(item=>(

            <TaskCard  type={item.type} title={item.title} when={item.when} key={item.id}/>

          ))

        }
      </S.Content>

      

      
        


      <Footer />
    </S.Container>
  );
}

export default Home;
