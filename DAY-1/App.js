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
