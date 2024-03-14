// const heading = document.createElement("h1");
// heading.textContent="Welcome to JS"
// document.getElementById("root").appendChild(heading)

//React with js
// const reactHeading = React.createElement("h1",{className:"head"},"Hii React");
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

//React with jsx
// const jsxHeading = (<h1>Hello jsx</h1>);
// ReactDOM.createRoot(document.getElementById('root')).render(jsxHeading);

//React with component
function Name(){
    return(
        <>
        <p>My name is Mahendra</p>
        </>
    )
}
const App = () => (
        <>
        <h1>React App with component</h1>
        </>
    )
ReactDOM.createRoot(document.getElementById("root")).render(<><App/><Name/></>)