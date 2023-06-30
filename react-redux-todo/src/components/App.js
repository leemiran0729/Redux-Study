import { Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact={true} element={<Home />}></Route>
        <Route path="/:id" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
