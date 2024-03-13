// const heading = document.createElement("h1");
// heading.textContent="Welcome to JS"
// document.getElementById("root").appendChild(heading)

const reactHeading = React.createElement("h1",{className:"head"},"Hii React");
ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);