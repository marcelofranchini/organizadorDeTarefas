import React, {useMemo} from  'react';
import * as S from './styles'
import icondefault from '../../assets/default.png'
import {format}  from 'date-fns'
import typesIcons from '../../utils/typeicons'


function TaskCard(props) {
  const date = useMemo(()=> format(new Date(props.when), 'dd/MM/yyyy'))
  const hour = useMemo(()=> format(new Date(props.when), 'HH:mm') )


  return (
    <S.Container >
        <S.TopCard>
            <img src={typesIcons[props.type]} alt='icon'/>
  <h3>{props.title}</h3>
        </S.TopCard>
        <S.BottomCard>
           <strong>{date}</strong>
           <span>{hour}</span>
        </S.BottomCard>
    </S.Container>
  );
}

export default TaskCard;