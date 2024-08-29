

const getRandomUpper=()=>{
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}


const getRandomLower=()=>{
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

const getRandomNumber=()=>{
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

const getRandomSymbols=()=>{
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random()* symbols.length)];
}

const randomFunc = {
  lower:getRandomLower,
  upper:getRandomUpper,
  number:getRandomNumber,
  symbols:getRandomSymbols
}

const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

generateEl.addEventListener('click',()=>{

  const length = +lengthEl.value;

  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = genratePassword(length,hasUpper,hasLower,hasNumber,hasSymbol)

})



const genratePassword =(length,upper,lower,  number, symbol )=>{

  let generatedPassword = '';

  const typesCounts = upper+lower+number+symbol;
  const typeArr = [{lower},{upper},{number},{symbols}].filter(item => Object.values(item)[0]);

  if(typesCounts === 0) {
    return ''
  }

  for(let i=0;i<length;i+=typesCounts){
    typeArr.forEach(index =>{
      const funcName = Object.keys(index)[0]
      generatedPassword +=randomFunc[funcName]()
    })
  }


  const finalPassword = generatedPassword.slice(0, length)

  return finalPassword;

}