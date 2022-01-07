import { createGlobalStyle } from 'styled-components';
import themes from './themes';

export default createGlobalStyle`
  body {
    background: ${(props) => props.theme.backgroundColor};
    color:  ${(props) => props.theme.textColor};;
    font-family: sans-serif;
  }
`;
