import styled from "styled-components";

//background
import background from './../assets/favicon.png';

//React router
import { Link } from "react-router-dom";

export const colors ={
    primary: "#fff",
    theme: "#BE185D",
    light1: "#F3F4F6",
    light2: "#E5E7EB",
    dark1: "#1F2937",
    dark2: "#4B5563",
    dark3: "#9CA3AF",
    red: "#DC2626"
}

//Styled components
export const StyledContainer = styled.div`
    margin:0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient (0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    background-size: cover;
    background-attachment: fixed;
    `;

//Home
export const StyledTitle = styled.div`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: blue;
    padding: 5px;
    margin-bottom: 20px;
    `;

export const StyledSubTitle = styled.div`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: blue;
    padding: 5px;
    margin-bottom: 25px;
    `;

export const Avatar = styled.div`
    width: 85px;
    height: 85px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-position: center;
    margin: auto;
        `;

export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.primary};
    border-radius: 25px;
    color: ${colors.primary};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    
    &:hover {
        background-color: ${colors.primary};
        color: ${colors.theme};
        cursor: pointer;

    }
    `;