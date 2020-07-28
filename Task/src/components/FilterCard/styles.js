import styled from 'styled-components'

export const Container = styled.div`
    width:230px;
    height: 60px;
    background-color: ${props => props.actived ? '#E56008':'#14234E'};
    border-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    padding: 10px;
    margin-top:5px; /* no caso do wrap ter espaçamento */
    cursor: pointer;
    

    img{
        width:25px;
        height: 25px;
    }

    span{
        color:white;
        font-weight:bold;
        display:flex;
        align-self: flex-end;
        font-size:18px;

    }
     &:hover{
        background-color: #E56008;

     }
 
`

