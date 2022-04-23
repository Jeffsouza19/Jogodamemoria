import styled from "styled-components";

type ContainerProps ={
    showBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
    background-color:${props => props.showBackground ? '#155FFF' : '#E2E3E3'};
    height: 100px;
    border-radius:20px;
    display: flex;
    justify-content: center;
    align-items:center;


    @media(max-width: 380px){
        width: 90px;
        height: 90px;
    }
`;
type IconProps ={
    opacity?: number;
}

export const Icon = styled.img<IconProps>`
    width: 80px;
    height: 80px;
    opacity: ${props => props.opacity ?? 1};
    cursor: pointer;
    border-radius: 10px;

    @media (max-width:380px){
        width: 80px;
        height: 80px;
    }
`;