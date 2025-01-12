import React from "react";
// import Class_compo from "./Component/Class_compo";
// import Boostrap from "./Boostrap/Boostrap";
import React_card from "./Boostrap/React_card";
import Mdb_footer from "./Boostrap/Mdb_footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layout/Pages/Home";
import About from "./layout/Pages/About";
import Contact from "./layout/Pages/Contact";
import About1 from "./layout/Pages/About1";
import About2 from "./layout/Pages/About2";
import UseEffect from "./UseEffect/UseEffect";
import Props_drill from "./UseContext/Props_drill";


function App(){
    return(
      <BrowserRouter>
      {/* <div> */}
        {/* <Class_compo  /> */}
        {/* boostrap */}
        {/* <Boostrap /> */}
        {/* <React_card /> */}
        {/* <Mdb_footer /> */}
        
      {/* </div> */}

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="/about/about1" element={<About1 />} />
          <Route path="/about/about2" element={<About2 />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/effect" element={<UseEffect />} />
        <Route path="/drlling" element={<Props_drill />} />
      </Routes>

      </BrowserRouter>
    )
}
export default App;