import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 750px;
    margin: auto;
    display: flex;
    padding: 50px 0;


    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;

    @media (max-width: 750px){
        margin-bottom: 50px;
        align-items: center;
    }
`;

export const LogoLink = styled.a`
    display: block;
`;

export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;
    


    @media (max-width:750px){
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        align-items: center;
    }

    @media (max-width:380px){
        width: 300px;
       display: grid;
       grid-template-columns:repeat(2, 1fr);
    }
`;

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    
    
    @media (max-width:750px){
        justify-content: center;
        margin: 0;
    }

    @media (max-width: 380px){
        margin:0;
    }
`;

export const Grid = styled.div`
    width: 430px;    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;


    @media (max-width: 650px){
        grid-template-columns: repeat(3, 1fr);
    }


    @media (max-width: 380px){
        width: 300px;
        gap: 3px;
    }
`;

export const Msgfinal = styled.div`
    max-width: 500px;
    margin: auto;
    font-size: 20px;
    display: block;
    padding: 5px 20px;
    background-color: rgba(0, 255, 0, 0.5);
    text-align: center;
    border-radius: 5px;
    margin-bottom: 10px;
`;