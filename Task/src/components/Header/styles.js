import styled from 'styled-components'

export const Container = styled.div`
    width:100%;
    height: 70px;
    display:flex;
    border-bottom: 4px solid #E56008;
`
export const LeftSide = styled.div`
    background: #14234E;
    width:50%;
    height: 70px;
    display:flex;
    align-items: center;

    img{
        width: 100px;
        height:40px;
        padding:20px;
    }
`

export const RightSide = styled.div`
    background: #14234E;
    width:50%;
    height: 70px;
    display:flex;
    align-items: center;
    justify-content: flex-end;

    button{
        border:none;
        background: none;
        text-decoration:none;
        cursor: pointer;
        outline:none;
    }

    a, button{
        font-weight: bold;
        color: white;
        margin: 0 10px;
        text-decoration:none;

        &:hover{
            color: #E56008;
        }
    }

#notification{
    
    img{
    width: 20px;
    height: 25px;

    }

    span{
        background-color: white;
        color: #E56008;
        border-radius:50%;
        padding: 3px 7px;
        position: relative;
        bottom: 15px;
        right: 8px;
    }
    
    &:hover{
        opacity: 0.5 ;
    }
}

    .dividir::after{
        content: "|";
        padding: 0 10px;
        color:white;
    }
`