import React, { useState } from "react" 

export default function App() {
    const [lengthPassword, setLengthPassword] = useState("8")
    const [password, setPassword] = useState("Click the 'Generate Password' button to generate a password!")
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const special = ["`", "!", "@", "#", "$", "%", "^", "^", "&", "*", "(", ")", "-", "=", "+"]
    const [initialValueOfNumbers, includeNumbers] = useState(true);
    const [initialValueOfSpecialCharacters, includeSpecial] = useState(true)
    const [capsOn, setCapsOn] = useState(true)

    const copyPass = () => {
        console.log(password)
        navigator.clipboard.writeText(password)
        alert("Password has been copied to clipboard!")
    }
    const generatePassword = () => {
        let initialString = ""
        for (let i = 0; i < lengthPassword; i++) {
            let generateALetter = Math.floor((Math.random() * alphabet.length))
            let generateASpecial = Math.floor((Math.random() * special.length))
            let generateAnumber = Math.floor((Math.random() * 9))

            if (lengthPassword < 3 || lengthPassword > 50) {
                setPassword("Please enter a number between 3 to 50!")
                return
            }
            if (capsOn === true) {
                alphabet[generateALetter] = alphabet[generateALetter].toUpperCase()
            } 
            if (initialValueOfNumbers === false && initialValueOfSpecialCharacters === false) {
                initialString += alphabet[generateALetter]
            } else if (initialValueOfNumbers === true && initialValueOfSpecialCharacters === true) {
                if (i % 2) {
                    initialString += generateAnumber
                } else {
                    let randomX = Math.floor((Math.random() * 2) + 1)
                    if (randomX === 1) {
                        initialString += special[generateASpecial]
                    } else {
                        initialString += alphabet[generateALetter]
                    }
                }
            } else if (initialValueOfNumbers === true) {
                if (i % 2) {
                    initialString += generateAnumber
                } else {
                    initialString += alphabet[generateALetter]
                }
            } else if (initialValueOfSpecialCharacters === true) {
                if (i % 2) {
                    initialString += special[generateASpecial]
                } else {
                    initialString += alphabet[generateALetter]
                }
            }
        }
        setPassword(initialString)
        console.log(`Length of password generated: ${initialString.length} characters`)
    }
    const setIncludeNumbers = () => {
        includeNumbers(!initialValueOfNumbers)
    }
    const setSpecialCharacters = () => {
        includeSpecial(!initialValueOfSpecialCharacters)
    }
    const updateCaps = () => {
        setCapsOn(!capsOn)
    }
    return (
        <div className="App">
            <h1>Random Password Generator</h1>
            <div className="elements">
                <input 
                    type="checkbox" 
                    name="numbers" 
                    onChange={() => setIncludeNumbers()} 
                    defaultChecked={initialValueOfNumbers} 
                />
                <span>Include numbers from 0-9</span>
            </div>
            <div className="elements">
                <input 
                    type="checkbox" 
                    name="numbers" 
                    onChange={() => updateCaps()} 
                    defaultChecked={capsOn} 
                    id="capslock"
                />
                <span><label for="capslock">Must contain capital letters</label></span>
            </div>
            <div className="elements">
                <input 
                    type="checkbox" 
                    name="special" 
                    onChange={() => setSpecialCharacters()} 
                    defaultChecked={initialValueOfSpecialCharacters} 
                    id="characters"
                />
                <span><label for="characters">Include special characters (like ~!@#$%)</label></span>
            </div>
            <div className="elements">
                <input 
                    type="number" 
                    onChange={ e => setLengthPassword(e.target.value) } 
                    value={lengthPassword}
                    id="length"
                />
                <span>
                    <label for="length">Letters of password (3-50)</label>
                </span>
            </div>
            <button
                onClick={ () => generatePassword() }
                className="button"
            >
                Generate Password
            </button>
            <p>Password Generated: <p className="text-password" title="Click to copy" onClick={() => copyPass()}>{ password }</p></p>
        </div>
    )
}