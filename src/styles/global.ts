import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #1e73be;
    --color-primary-variant:  #5a79a8;
    --color-grey100: #111111;
    --color-grey50: #878787;
    --color-grey20: #E0E0E0;
    --color-grey0: #F5F5F5;
}
body{

   background-color: var(--color-grey20);
   color: var(--color-primary-variant);
   font-family: "Inter" , sans-serif;
}
h1{
    font-size: 26px;
}
h2{
    font-size: 22px;
}
h3{
    font-size: 18px;
}
p{
    font-size: 16px;
}
`;
export default GlobalStyle;
