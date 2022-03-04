import Router from "./Router";
import { GlobalStyle } from "./style/GlobalStyle";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { darkTheme, whiteTheme } from "./theme";
import { useState } from "react";
import { ChangeDark } from "./style/Style";

function App() {
  const [isDark, setIsDark] = useState(false);
  const onClick = () => {
    setIsDark(!isDark);
  };
  return (
    <ThemeProvider theme={isDark ? darkTheme : whiteTheme}>
      <ChangeDark onClick={onClick}>{isDark ? "🌞" : "🌕"}</ChangeDark>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools />
    </ThemeProvider>
  );
}

export default App;
