import React from "react";
import {Routes, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import 맛집정보 from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import 리뷰작성 from "./pages/Input2";


function App() {
  return (
    <div className="App">
      <nav>
      <Link to="/">Home</Link> | <Link to="/about">맛집정보</Link> | <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | <Link to="/input2">리뷰작성</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<맛집정보 />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/input2" element={<리뷰작성 />} />
      </Routes>
    </div>
  );
}

export default App;
