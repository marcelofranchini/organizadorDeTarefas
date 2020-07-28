import styled from 'styled-components'

export const Container =  styled.div`
    width: 100%;

`

export const CardFilter =  styled.div`
 width: 100%;
 display:flex;
 flex-wrap:wrap;
 justify-content:space-around;
 margin-top: 20px;

 
 button{
        border: none;
        background: none;
        outline:none;
    
   
    }
`

export const Content =  styled.div`
    width: 100%;
    display: flex;
    flex-wrap:wrap;
    justify-content:center;

`

export const Title =  styled.div`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items: center;
    border-bottom: 1px solid black;
    margin: 0 0 20px 0;

    h3{
        position:relative;
        top: 30px;
        background-color: white;
        padding:0 20px;

    }

`