import { createGlobalStyle } from "styled-components";
import { Table, Button, Pagination } from "antd";

const GlobalStyles = createGlobalStyle`
    body {
        background-color: var(--theme);
    }

    button {
        background-color: var(--theme);
    }

    html[data-theme=light] {
        --theme: white;
        --theme-text: black;
    }

    html[data-theme=dark] {
        --theme: black;
        --theme-text: white;
    }
    
    h2 {
        color:var(--theme-text)
    }

    p {
        color:var(--theme-text)
    }

    li {
        color:var(--theme-text)
    }

`;

export default GlobalStyles;
