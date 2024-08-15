import {HashRouter } from "react-router-dom";
// import {BrowserRouter} from "react-router-dom";
import {Footer} from "./modules/Footer";
import {Header} from "./modules/Header";
import {Main} from "./modules/Main";

function App() {

  return (
    <HashRouter>

      <Header />

      <Main />

      <Footer />

    </HashRouter>
  );
}

export default App;
