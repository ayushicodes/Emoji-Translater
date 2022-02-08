import './App.css';
import React, { useState } from "react";

// import Hello from './Hello'

var emojiDictionary = {

  "😉": "Flirting With Eyes!!",
  "😘": "Face Blowing a Kiss!!",
  "😜": "Face with Tongue!!",
  "🤑": " Money-Mouth Face!!",
  "💩": "Pile of Poo!!",
  "🖕": "Middle Finger!!",
  "👩‍💻": "Woman Technologist!!",
  "👨‍👩‍👧": "Family: Man, Woman, Boy!!",
  "🦈": "Whale Machli!!",
  "🌿": " Gaanja!!",
  "😒": " Unamused Face!!",
  "🙄": "Face with Rolling Eyes!!",
  "🥱": "Yawning Face!!",
  "🤬": " Face with Symbols on Mouth!!",
  "☠️": " Skull and Crossbones!!",
  "👸": " Princess !!",
  "🦸‍♂️": "Man Superhero!!",
  "👩‍❤️‍👨 ": " Kiss: Woman, Man!!",
  "👨‍👩‍👧‍👦": "Family: Man, Woman, Girl, Boy!!",
  "😄": "Grinning Face with Smiling Eyes!!",
  "🤪": "Zany Face!!",
  "🤫": " Shushing Face!!",
  "🤔": "Thinking Face!!",
  "😑": " Expressionless Face!!",
  "😔": "Pensive Face!!",
  "😷": "Face with Medical Mask!!",
  "🤮": " Face Vomiting!!",
  "🤯": "Exploding Head!!",
  "😟": "Worried Face!!",
  "😲": "Astonished Face!!",
  "🥺": "Pleading Face!!",
  "😈": "Smiling Face with Horns!!",
  "💋": "Kiss Mark!!",
  "🤚": " Raised Back of Hand!!",
  "🌷": "BJP!!",
  "👊": "Oncoming Fist!!",
  "🙏": "Folded Hands!!",
  "🦵": "Leg!!",
  "👃": "Nose!!",
  "👋": "Waving Hand!!"

};
var emojisWeKnow = Object.keys(emojiDictionary)

export default function App() {
  const [meaning, setMeaning] = useState("")
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We dont have this in Our database"
    }
    setMeaning(meaning)
  }
  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji]
    setMeaning(meaning)
  }
  return (
    <div className="App">
      <h1>INSIDE OUT</h1>

      <input placeHolder="Put Your Emojis Here!!!" className="inputbox" onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      <h3> Emojis We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer", paddingLeft: "50px", paddingRight: "50px" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <footer>     </footer>
    </div>
  )
}
