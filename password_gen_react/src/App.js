import React, { useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(20);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  };

  const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  };

  const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  };

  const getRandomSymbol = () => {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
  };

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
  };

  const generatePassword = () => {
    let generatedPassword = '';
    const typesCount =
      includeUpper + includeLower + includeNumbers + includeSymbols;
    const typeArr = [
      { lower: includeLower },
      { upper: includeUpper },
      { number: includeNumbers },
      { symbol: includeSymbols },
    ].filter((item) => Object.values(item)[0]);

    if (typesCount === 0) {
      return '';
    }

    for (let i = 0; i < length; i += typesCount) {
      typeArr.forEach((type) => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }

    setPassword(generatedPassword.slice(0, length));
  };

  // Call generatePassword when any dependency changes
  React.useEffect(() => {
    generatePassword();
}, [length, includeUpper, includeLower, includeNumbers, includeSymbols]);

  return (
    <div className="container">
      <h2>Password Generator</h2>
      <div className="result-container">
        <span id="result">{password}</span>
        <button className="btn" id="clipboard">
          <i className="far fa-clipboard"></i>
        </button>
      </div>
      <div className="settings">
        <div className="setting">
          <label>Password Length</label>
          <input
            type="number"
            id="length"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(+e.target.value)}
          />
        </div>
        <div className="setting">
          <label>Include uppercase letters</label>
          <input
            type="checkbox"
            id="uppercase"
            checked={includeUpper}
            onChange={(e) => setIncludeUpper(e.target.checked)}
          />
        </div>
        <div className="setting">
          <label>Include lowercase letters</label>
          <input
            type="checkbox"
            id="lowercase"
            checked={includeLower}
            onChange={(e) => setIncludeLower(e.target.checked)}
          />
        </div>
        <div className="setting">
          <label>Include numbers</label>
          <input
            type="checkbox"
            id="numbers"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
        </div>
        <div className="setting">
          <label>Include symbols</label>
          <input
            type="checkbox"
            id="symbols"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
        </div>
      </div>

      <button className="btn btn-large" onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [password, setPassword] = useState('');
//   const [length, setLength] = useState(20);
//   const [includeUpper, setIncludeUpper] = useState(true);
//   const [includeLower, setIncludeLower] = useState(true);
//   const [includeNumbers, setIncludeNumbers] = useState(true);
//   const [includeSymbols, setIncludeSymbols] = useState(true);

//   const getRandomUpper = () => {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//   };

//   const getRandomLower = () => {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//   };

//   const getRandomNumber = () => {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//   };

//   const getRandomSymbols = () => {
//     const symbols = '!@#$%^&*(){}[]=<>/,.';
//     return symbols[Math.floor(Math.random() * symbols.length)];
//   };

//   const randomFunc = {
//     lower: getRandomLower,
//     upper: getRandomUpper,
//     number: getRandomNumber,
//     symbol: getRandomSymbols,
//   };

//   const generatePassword = (length, upper, lower, number, symbol) => {
//     let generatedPassword = '';
//     const typesCount = upper + lower + number + symbol;
//     const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
//       item => Object.values(item)[0]
//     );

//     if (typesCount === 0) {
//       return '';
//     }

//     for (let i = 0; i < length; i += typesCount) {
//       typesArr.forEach(type => {
//         const funcName = Object.keys(type)[0];
//         generatedPassword += randomFunc[funcName]();
//       });
//     }

//     return generatedPassword.slice(0, length);
//   };

//   const handleGeneratePassword = () => {
//     const newPassword = generatePassword(
//       length,
//       includeUpper,
//       includeLower,
//       includeNumbers,
//       includeSymbols
//     );
//     setPassword(newPassword);
//   };

//   return (
//     <div className="container">
//       <h2>Password Generator</h2>
//       <div className="result-container">
//         <span id="result">{password}</span>
//         <button className="btn" id="clipboard">
//           <i className="far fa-clipboard"></i>
//         </button>
//       </div>
//       <div className="settings">
//         <div className="setting">
//           <label>Password Length</label>
//           <input
//             type="number"
//             id="length"
//             min="4"
//             max="20"
//             value={length}
//             onChange={(e) => setLength(e.target.value)}
//           />
//         </div>
//         <div className="setting">
//           <label>Include uppercase letters</label>
//           <input
//             type="checkbox"
//             id="uppercase"
//             checked={includeUpper}
//             onChange={(e) => setIncludeUpper(e.target.checked)}
//           />
//         </div>
//         <div className="setting">
//           <label>Include lowercase letters</label>
//           <input
//             type="checkbox"
//             id="lowercase"
//             checked={includeLower}
//             onChange={(e) => setIncludeLower(e.target.checked)}
//           />
//         </div>
//         <div className="setting">
//           <label>Include numbers</label>
//           <input
//             type="checkbox"
//             id="numbers"
//             checked={includeNumbers}
//             onChange={(e) => setIncludeNumbers(e.target.checked)}
//           />
//         </div>
//         <div className="setting">
//           <label>Include symbols</label>
//           <input
//             type="checkbox"
//             id="symbols"
//             checked={includeSymbols}
//             onChange={(e) => setIncludeSymbols(e.target.checked)}
//           />
//         </div>
//       </div>

//       <button className="btn btn-large" id="generate" onClick={handleGeneratePassword}>
//         Generate Password
//       </button>
//     </div>
//   );
// }

// export default App;