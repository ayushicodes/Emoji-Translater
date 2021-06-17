import './App.css';
import React, { useState } from "react";

// import Hello from './Hello'

var emojiDictionary = {

  "😉": "Flirting With Eyes!!",
  "😘": "Chummi!!",
  "😜": "Let Me Lick It!!",
  "🤑": " Paisa Paisa!!",
  "💩": "Hug Diya!!",
  "🖕": "Fuck You!!",
  "👩‍💻": "Coder Ayushi!!",
  "👨‍👩‍👧": "Nhi Baby Mujhe Ek Hi Baby Chaiye!!",
  "🦈": "Whale Machli!!",
  "🌿": " Gaanja!!",
  "😒": "Huh!! Kuch Bhi!!",
  "🙄": "Kya Bol Rhe Ho!!",
  "🥱": "Kya Paka Rha Hai!!",
  "🤬": "Chla Ja Bsdk!!",
  "☠️": "Bhoot Bna Dunga!!",
  "👸": "Ayushi!!",
  "🦸‍♂️": "Crime Master Gogo!!",
  "👩‍❤️‍👨 ": "OYO!!",
  "👨‍👩‍👧‍👦": "Hum Do Hmare Do!!",
  "😄": "Chl Jutha!!",
  "🤪": "Htt Baklol!!",
  "🤫": "Chup Reh Na!!",
  "🤔": "Konsi Gali Du!!",
  "😑": "Abe Ja Na!!",
  "😔": "Dil Se Bura Lgta Hai!!",
  "😷": "China ki _____!!",
  "🤮": "Muh P Ulti Kr Dunga!!",
  "🤯": "Dimag Phat Gya!!",
  "😟": "Abe Yrrr!!",
  "😲": "Ye Kya Dekh Liya!!",
  "🥺": "Man Ja Pls!!",
  "😈": "Rhea Chakraborty!!",
  "💋": "Chummi Max Pro!!",
  "🤚": "Congress!!",
  "🌷": "BJP!!",
  "👊": "Mukka Maar Denge!!",
  "🙏": "Ha Re Tu Jita!!",
  "🦵": "Leg Piece Bna Denge!!",
  "👃": "Lord Voldemort!!",
  "👋": "Ek Kantap P Denge Na!!"

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
