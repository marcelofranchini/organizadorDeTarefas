import React from 'react';
import * as S from './styles'
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'

function Header(props) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="logo" />
      </S.LeftSide>

      <S.RightSide>
        <a href="#top">Início </a>
        <span className='dividir'/>
        <a href="#top">Nova Tarefa</a>
        <span className='dividir'/>
        <a href="#top">Sincronizar Celular</a>
        <span className='dividir'/>
        <button onClick={props.clickNotification} id="notification">
          <img src={bell} alt='bell'/>
          <span>{props.count}</span>
        </button>
      </S.RightSide>


    </S.Container>
  );
}

export default Header;