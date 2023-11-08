import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyle = createGlobalStyle`
 ${normalize()}
    html{
        font-size:16px;
        box-sizing: border-box;
        margin:0;
        overflow-x: hidden;
        user-select: none; 
        @media screen and (max-width: 600px) {
          font-size: 14px;
        }
        height: 100%;
    }
    ::-webkit-scrollbar {
    display: none;
}
    *, *:before, *:after{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    svg {
    pointer-events: none;
}
    body{
        position: relative;
        overflow-x: hidden;
        margin:0;
        font-family: 'Josefin Sans', sans-serif;
        height: 100%;
    }
`;

export default GlobalStyle;
