import { createGlobalStyle } from "styled-components";

export const blue: string = "#3B40B7";
export const blueStrong: string = "#2a2f89";
export const blueLight: string = "#01D2FE";
export const background: string = "#030446";
export const gray: string = "#1E1F2F";

export const pink: string = "#E93F78";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: ${() => background};
    --blue: ${() => blue};
    --blue-strong: ${() => blueStrong};
    --blue-light: ${() => blueLight};
    --gray: ${() => gray};
    --pink: ${() => pink};
    --blue-e-mail: #3C79DC;
    --grey-800: #28353d;
    --grey-900: #201F24;
    --green: #33CC95;
    --red: #E62E4D;  
    --text-title: #363F5F;
    --text-body: #969CB3;
    --text-information: #ffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
    height: 100%;
  }

  body {
    height: 100%;
    background: var(--background);
    color: var(--text-information);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins','Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
    &:hover {
      filter: brightness(0.7);
    } 
    &:disabled {
      filter: brightness(0.5);
    } 
  }

  img {
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  [disabled] {
    filter: brightness(0.5);
    cursor: not-allowed;
  }

  #root {
    height: 100%;
  }
  .App {
    height: 100%;
  }
  
  .full {
    height: 100%;
    width: 100%;
  }
  .centralizeC {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .centralize {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .scroll {
    &::-webkit-scrollbar {
      width: 7px;
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--blue);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--blue-strong);
      border-radius: 10px;
    }
  }
`;
