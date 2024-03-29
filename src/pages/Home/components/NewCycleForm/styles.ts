import styled from "styled-components"

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    color: ${({theme})=>theme["gray-100"]};
    font-size: 1,125rem;
    font-weight: 700;
    flex-wrap: wrap;

    
`

const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: none;
    border-bottom: 2px solid ${({theme})=>theme["gray-500"]}; 
    font-size: 1.125rem;
    font-weight: bold;
    padding: 0 .5rem;
    color: ${({theme})=>theme["gray-100"]};

    &:focus{
        box-shadow: none;
        border-color:${({theme})=>theme["green-500"]} ;
    }

    &::placeholder{
        color: ${({theme})=>theme["gray-500"]};
    }

    &::-webkit-calendar-picker-indicator{
        display: none;
    }
`

export const TaskInput = styled(BaseInput)`
    flex: 1;
`

export const MinutesAmount = styled(BaseInput)`
    width: 4rem;
`