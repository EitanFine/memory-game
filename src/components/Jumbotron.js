import React from "react"; // React
import "./Jumbotron.css";

const Jumbotron = () => (

    <div className="jumbotron jumbotron-fluid">
        <div className="jbHeader container">
            <h1 className="display-4">Memory Game</h1>
            <p className="lead">Click on an image to earn points, but be sure <span style={{ textDecoration: "underline" }}>NOT</span> to click the same image twice!
            </p>
        </div>
    </div>

);

// Initial Code:

// const Jumbotron = () => (

//     <div className="jumbotron jumbotron-fluid">
//         <div className="jbHeader container">
//             <h1 className="display-4">Memory Game</h1>
//             <p className="lead">Click on an image to earn points, but be sure <span style={{ textDecoration: "underline" }}>NOT</span> to click the same image twice!
//             </p>
//         </div>
//     </div>

// );

export default Jumbotron;