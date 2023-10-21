import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	*{
		margin: 0px;
        padding: 0px;
        box-sizing: border-box;
	}

    *:focus {
        outline: none;
    }

	html{
        font-size: 62.5%;
	}

    body {
      font: normal 10px Roboto, Arial, sans-serif;
    }

    body{
        background-color: var(--main-bg-color);
    }
`;
