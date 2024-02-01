import { createGlobalStyle } from "styled-components";

const GlobalThemes = createGlobalStyle`
  #root {
  
    &,&.dark-mode {
      --color-textColor: rgba(117, 117, 117, 1);
      --color-description:  rgba(255, 255, 255, 0.80);
      --color-logo:#3730a3;
      --color-light: #ffffff;
      --color-black: #232f3e;
      --color-h1: #ffffff;
      --color-input: rgba(51, 51, 51, 1);
      --color-inputFont: rgba(140, 140, 140, 1);
      --color-btnsign: rgba(229, 9, 20, 1);
      --color-blacklight: rgba(0, 0, 0, 0.75);
      --color-login: rgba(0, 0, 0, 0.75);
      --color-bg: rgba(0, 0, 0, 0.15);
    }
    &.light-mode   {
  --color-textColor:  rgba(255, 255, 255, 0.80);
  --color-logo:#3730a3
  --color-light: #ffffff;
  --color-description: rgb(23, 23, 23);
  --color-h1: rgb(15, 15, 15);
  --color-black: #232f3e;
  --color-input: rgb(15, 15, 15);
  --color-inputFont: rgba(140, 140, 140, 1);
  --color-btnsign: rgba(229, 9, 20, 1);
  --color-blacklight: rgba(255, 255, 255, 0.80);
  --color-login:  rgba(0, 0, 0,0.8);
  --color-bg: rgba(255, 255, 255, 0.10);
    }
  }
`;
export default GlobalThemes;
