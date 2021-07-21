import styled, { keyframes } from "styled-components"

const message = keyframes`
    0% {
        top: -200%;
    }
    15% {
        top: 8%;
    }
    85% {
        top: 8%;
    }
    100% {
        top: -200%;
    }
`
const PopupMessage = styled.span`
    display: inline-block;
    z-index: 2;
    text-align: center;
    width: 200px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.432);
    padding: 5px;
    position: fixed;
    top: -200%;
    left: 50%;
    color: white;
    background-color: ${props => props.errorMessage ? "rgba(255, 0, 0, 0.8)" : "#18252eda"};
    transform: translateX(-50%);
    animation: ${props => props.blankMessage ? null : message} 4s ease-in;
`

export default PopupMessage;