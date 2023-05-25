/***
   Parcel :  
 
 * Created a Server  
 * HMR ~ Hot Module Replacement
 * File Watcher Algorithm - C++
 * BUNDLING / MINIFY / Cleaning our Code
 * Manages Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development 
 * Compression 
 * Compatible with older version of browser 
 * HTTPS on dev machine
 * Port Number
 * Consistent Hashing Algorithm 
 * Zero Config Bundler
 * 
 * 
 * 
 * 
 * Trasitive Dependencies
 * */

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
        id: "title",
        className: "main-page",
    },
    "JS"
);

const heading2 = React.createElement(
    "h2",
    {
        id: "title",
        className: "main-page",
    },
    "JS"
);

const container = React.createElement(
    "div",{
    id : "container"
},[heading,heading2]);
// returns an object
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(container);
