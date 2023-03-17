import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
/*
styled - reset
npm i styled-reset
*/

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }

    html {
        font-size:62.5%
    }

    body {
        background-color: #e7e7e7;
    }

    ul, li {
        list-style: none;
    }

    button {
        border: none;
    }
`;
export default GlobalStyles;
