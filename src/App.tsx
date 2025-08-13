import { ThemeProvider } from "next-themes";
import Portfolio from "./components/Portfolio";

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <Portfolio />
  </ThemeProvider>
);

export default App;
