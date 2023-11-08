import { createGlobalStyle } from "styled-components";
import theme from "theme/theme";

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

    dialog::backdrop {
        backdrop-filter: blur(50px);
    opacity: 0.4;
    background: ${theme.colors?.main_text_color} 0% 0% no-repeat padding-box;
}

`;
