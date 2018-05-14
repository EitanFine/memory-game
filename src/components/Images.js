import React from "react"; // React
import "./Images.css"; // Images CSS

const Images = ({ images, processClick }) => {

    // Function to confirm and process clicked image
    const confirmClick = (event) => {
        event.preventDefault();
        processClick(event.target.id);
    };

    // Adding Images From Props To Array
    const imageDivs = images.map((img) => {
        return (
            <div className="imageDiv" key={img.id}>
                <button className="imageButton" onClick={confirmClick}>
                    <img id={img.id} src={img.image} alt={img.name} />
                </button>
            </div>
        );
    });
    return (
        <div className="container imageWrapper">
            {imageDivs}
        </div>
    );

};

// Initial Code:

// const Images = ({ images }) => {

//     // Adding Images From Props To Array
//     const imageDivs = images.map((img) => {
//         return (
//             <div className="imageDiv" key={img.id}>
//                 <button data-id={img.id} className="imageButton">
//                     <img src={img.image} alt={img.name} />
//                 </button>
//             </div>
//         );
//     });
//     return (
//         <div className="container imageWrapper">
//             {imageDivs}
//         </div>
//     );

// };

export default Images;