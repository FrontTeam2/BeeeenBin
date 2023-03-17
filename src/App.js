import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import theme from "styles/theme";
import router from "./routes/routing";
import GlobalStyles from "styles/global";

function App() {

    
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
