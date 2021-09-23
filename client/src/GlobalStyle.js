import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --danger : #DF2E2E;
        --success: #3DB2FF;
        --warning: #FFB319;
        --accept: #57CC99;
        --light: #F7F6F2;
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
`;
