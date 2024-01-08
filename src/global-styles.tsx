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
        --theme-footer: #f4f4f4;

    }

    html[data-theme=dark] {
        --theme: #1c1b1b;
        --theme-text: white;
        --theme-footer: #343a40;
        --theme-pagination-button: #343a40;
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
