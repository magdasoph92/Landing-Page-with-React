//import react into the bundle
//import react into the bundle
import React from "react";
//import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

//const root = createRoot(document.getElementById('root'));
//root.render(<Home />);