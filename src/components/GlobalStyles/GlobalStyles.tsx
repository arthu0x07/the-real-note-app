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

    :root {
        --main-bg-color: #F5F5F5;
        --secondary-bg-color: #FFFFFF;
        --highlight-bg-color: #2196F3;

        --highlight-shadow-color: #00000029;

        --main-text-color: #00000099;
        --secondary-text-color: #FFFFFF;

        --category-personal-highlight-color: #66BB6A;
        --category-home-highlight-color: ##FF9100;
        --category-work-highlight-color: #5C6BC0;
    }

    body{
        background-color: var(--main-bg-color);
    }
`;
