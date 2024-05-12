/* import { useState } from "react"; */
/* import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; */
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import FormP from "./pages/FormP/FormP";

function App() {
  /*   const [count, setCount] = useState(0); */

  return (
    <>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formP" element={<FormP />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
