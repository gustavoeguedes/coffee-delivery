import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    html {
    overflow-y: scroll;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    body {
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};
        min-height: 100vh;
    }
`
