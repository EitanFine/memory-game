import React from "react"; // React
import "./NavBar.css"; // NavBar CSS

const NavBar = ({ message, score, topScore }) => (

    <nav className="navbar navbar-expand-lg">
        <ul>
            <li id="brand">
                <a href="/">Memory Game</a>
            </li>
            <li id="intro">
                <div id="messageBoard">{message}</div>
            </li>
            <li id="scoring">Score: {score} | Top Score: {topScore}</li>
        </ul>
    </nav>

);

// Initial Code:

// const NavBar = () => (

//     <nav className="navbar navbar-expand-lg">
//         <ul>
//             <li id="brand">
//                 <a href="/">Memory Game</a>
//             </li>
//             <li id="intro">
//                 <div id="messageBoard">Click On An Image To Begin!</div>
//             </li>
//             <li id="scoring">Score: 0 | Top Score: 0</li>
//         </ul>
//     </nav>

// );

export default NavBar;