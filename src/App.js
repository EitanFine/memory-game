import React from "react"; // React
import images from "./components/images.json"; // Image List

// Components
import NavBar from "./components/NavBar.js";
import Jumbotron from "./components/Jumbotron.js";
import Images from "./components/Images.js";
import Footer from "./components/Footer.js";

// Array to store clicked images and success messages
var clickHistory = [];
const successMessages = [
    "Awesome!", "Super!", "Bravo!", "Keep it up!",
    "Amazing!", "Impressive!", "Sweet!",
    "You're good!", "Unbelievable", "Superstar!"
];

class App extends React.Component {

    // Initial state
    state = {
        duplicate: false,
        imageArray: images,
        message: "Click On An Image To Begin!",
        score: 0,
        topScore: 0
    };

    // Function to shuffle images (Fisher-Yates (aka Knuth) Shuffle)
    shuffleImages = () => {

        const array = this.state.imageArray;
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And then swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;

        };

        // Return shuffled array
        return array;

    };

    // Function to process image clicks
    processClick = (id) => {

        // Variable to store random user messages
        var msg;

        // Inspect clickHistory array for clicked image...
        const found = clickHistory.find((element) => {
            // Next comment tells React\Yarn to ignore '==' in the return line
            // eslint-disable-next-line
            return element.id == id;
        });

        // If clicked valid image...
        if (found === undefined) {
            // Find image and push image into clickHistory array
            const image = this.state.imageArray.find((element) => {
                // Next comment tells React\Yarn to ignore '==' in the return line
                // eslint-disable-next-line
                return element.id == id;
            });
            clickHistory.push(image);

            // If score equals top score, update both
            if (this.state.score === this.state.topScore) {
                msg = successMessages[Math.floor(Math.random() * successMessages.length)];
                this.updateState(msg, this.state.score + 1, this.state.topScore + 1);
            }
            // Else, update score only
            else {
                msg = successMessages[Math.floor(Math.random() * successMessages.length)];
                this.updateState(msg, this.state.score + 1, this.state.topScore);
            };
            // Reset score\top score if user wins
            if (this.state.score === 11) {
                this.updateState("You Win! Play Again?", 0, 0);
            }            
        }
        // Otherwise, render fail message and update state accordingly
        else {
            // Reset clickHistory array
            clickHistory = [];
            this.updateState("Oops, You Lost! Play Again?", 0, this.state.topScore);
        }

    };

    // Function to update state
    updateState = (string, num1, num2) => {
        this.setState({
            imageArray: this.shuffleImages(),
            message: string,
            score: num1,
            topScore: num2
        });
    };

    render() {
        return (
            <div>
                <NavBar
                    message={this.state.message}
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Jumbotron />
                <Images
                    duplicate={this.state.duplicate}
                    images={this.state.imageArray}
                    processClick={this.processClick}
                />
                <Footer />
            </div>
        )
    }

};

// Initial Code:

// const App = () => (

//     <div>
//         <NavBar />
//         <Jumbotron />
//         <Images images={images}/>
//         <Footer />
//     </div>

// );

export default App;