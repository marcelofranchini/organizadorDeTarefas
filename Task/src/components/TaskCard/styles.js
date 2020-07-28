import styled from 'styled-components'

export const Container = styled.div`
    width:230px;
    height: 200px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    border-radius: 5px;
    margin:15px;
    cursor: pointer;


    &:hover{
        opacity: 0.5 ;
    }

    
`

export const TopCard = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    overflow:hidden;
`


export const BottomCard = styled.div`
    width: 100%;
    display:flex;
    justify-content: space-around;

    strong{
        color:#E56008;
        font-weight:bold;
    }

    span{
        color: gray;
    }

`
