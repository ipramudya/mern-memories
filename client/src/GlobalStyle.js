import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --danger : #DF2E2E;
        --success: #3DB2FF;
        --warning: #FFB319;
        --accept: #57CC99;
        --light: #ECECEC;
        --dark: #112031;
        --brown: #3d282f
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Rubik', sans-serif;
    }

    body {
        background-color:#F7F6F2;
        img {
            max-width: 100%;
            border-style: none;
            object-fit: cover;
        }
        button {
            cursor: pointer;
            border: none;
            outline: none;
            background: transparent;
            min-width: 44px;
            min-height: 44px;
        }
        input {
            outline: none;
            border: none;
        }
        textarea {
            resize: none;
        }
        a {
            text-decoration: none;
        }
        ul {
            text-decoration: none;
            list-style: none;
        }
        li {
            list-style: none;
        }
    }
    .zoomIn {
        -webkit-animation-name: zoomIn;
        animation-name: zoomIn;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    @-webkit-keyframes zoomIn {
        0% {
            opacity: 0;
            -webkit-transform: scale3d(.3, .3, .3);
            transform: scale3d(.3, .3, .3);
        }
        50% {
            opacity: 1;
        }
    }
    @keyframes zoomIn {
        0% {
            opacity: 0;
            -webkit-transform: scale3d(.3, .3, .3);
            transform: scale3d(.3, .3, .3);
        }
        50% {
            opacity: 1;
        }
    }
    .fadeIn {
        -webkit-animation-name: fadeIn;
        animation-name: fadeIn;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
    @-webkit-keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    } 
`;
