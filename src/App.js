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
        console.log(`The copied password is: ${password}`)
        navigator.clipboard.writeText(password)
        alert("Password has been copied to clipboard!")
    }
    const generatePassword = () => {
        if (password !== "loading...") {
            let initialString = ""
            for (let i = 0; i < lengthPassword; i++) {
                let generateALetter = Math.floor((Math.random() * alphabet.length))
                let generateASpecial = Math.floor((Math.random() * special.length))
                let generateAnumber = Math.floor((Math.random() * 9))
                setPassword("loading...")
                if (lengthPassword < 3 || lengthPassword > 50) {
                    return setPassword("Please enter a number between 3 to 50!")
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
            setTimeout(() => {
                setPassword(initialString)
                console.log(`Length of password generated: ${initialString.length} characters`)
            }, 700)
        }
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
                    id="numbers"
                />
                <span><label htmlFor="numbers">Include numbers from 0-9</label></span>
            </div>
            <div className="elements">
                <input 
                    type="checkbox" 
                    name="numbers" 
                    onChange={() => updateCaps()} 
                    defaultChecked={capsOn} 
                    id="capslock"
                />
                <span><label htmlFor="capslock">Must contain capital letters</label></span>
            </div>
            <div className="elements">
                <input 
                    type="checkbox" 
                    name="special" 
                    onChange={() => setSpecialCharacters()} 
                    defaultChecked={initialValueOfSpecialCharacters} 
                    id="characters"
                />
                <span><label htmlFor="characters">Include special characters (like ~!@#$%)</label></span>
            </div>
            <div className="elements">
                    <label htmlFor="length">The password contains&nbsp;</label><input 
                    type="number" 
                    onChange={ e => setLengthPassword(e.target.value) } 
                    value={lengthPassword}
                    id="length"
                />
                <span>
                    <label htmlFor="length">&nbsp;characters (3-50)</label>
                </span>
            </div>
            <button
                onClick={ () => generatePassword() }
                className="button"
            >
                Generate Password
            </button>
            <p id="text-when-generate">Password Generated: <span className="text-password" title="Click to copy" onClick={() => copyPass()}>{ password }</span></p>
        </div>
    )
}