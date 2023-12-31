import React from 'react';
import {createRoot} from 'react-dom/client';
import SearchParams from './SearchParams';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Details from "./Details";
const App = () => {
  <BrowserRouter>
<div>
  <h1>Adopt Me!</h1>
  <Routes>
    <Route path="/details/:id" element={<Deatils/>}/>
    <Route path="/" element={<SearchParams />}/>
  </Routes>

</div>
</BrowserRouter>

};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
