const itword = {
    'javascript',
    'crud',
    'react native',
    'variable',
    'nodejs',
    'expres',
};
let logITowrds = itword.filter((word) ==> kata == "curd")
console.log(logITowrds)

//map 
let array = [1, 2, 3, 4, 5]
const newArray = array.map((x) ==> {
    //consol.log(x)
  raturn  x * 2 
})
console.log(newArray)

//find
let number = [5, 12, 8, 130, 44]
let numberfound = number.find((number) ==> number > 10)
console.log(numberfound)

//foreach
let numberSword = ("one", "two", "three")
let texts = **

numberSword.forEach((number) ==> {
   texts += number + "," 
})
console.log ("text is :", numberSword)

let stringZealBatam = "Zeal Batam Indonesia";
let resultChartAt = stringZealBatam.charAt(0)
console.log("result chart :", resultChartAt)

let resultChartAt2 = stringZealBatam.charAt(1)
console.log("result chart :", resultChartAt2)

let resultChartAt3 = stringZealBatam.charAt(8)
console.log("result chart :", resultChartAt3)

let resultLenght = stringZealBatam.length
console.log(resultLenght)

let resultToUpperCase = stringZealBatam.toUpperCase()
console.log(resultToUpperCase)

let resultToUpperCase = stringZealBatam.resultToUpperCase()
console.log(resultToUpperCase)

let resultSplit = stringZealBatam.split(" ")
console.log(resultSplit)
resultSplit = stringZealBatam.split(" ",2)
console.log(resultSplit)

let resultReplace = stringZealBatam.replace ("Batam", "kepulauan Riau")
console.log(resultReplace)

let resultSubstr = stringZealBatam.substr(0, 6)
console.log(resultSplit)

resultSubstr = stringZealBatam.substr(0. 3)
console.log(resultSubstr)

//Array Metodhs
let ZealBatamArray = ["Zeal", "Batam", "Indonesia"];
let resultArraylenght = ZealBatamArray.length;
console.log(`resultArrayLenght ${resultArraylenght}`)

let resultArrayindexof = ZealBatamArray.indexOf('Batam')
console.log(resultArrayindexof)

resultArrayindexof = ZealBatamArray.indexOf("indonesia")
console.log(resultArrayindexof)

ZealBatamArray.push('web')
console.log(ZealBatamArray)

ZealBatamArray.pop()
console.log(ZealBatamArray)

let resultArrayJoin = ZealBatamArray.join('--')
console.log(resultArrayJoin)

let resultArraySlice = ZealBatamArray.slice(1)
console.log(resultArraySlice)

resultArraySlice = ZealBatamArray.slice(1,2)
console.log(resultArraySlice)

ZealBatamArray.sort()
console.log(ZealBatamArray)

ZealBatamArray.reverse()
console.log(ZealBatamArray)

//math methods
console.log("Math methods")
let resultMethRandom = Math.random()
console.log(resultMathRandom)

let resultMathCeil = Math. ceil(2, 5)
console.log(resultMathCeil)

let resultMathfloor = Math. floor(1,9)
console.log(resultMathfloor)

let resultMathfloorRound = Math.round(2,4)
console.log(resultMathfloorRound)
resultMathfloorRound = Math.round(2.5)
console.log(resultMathfloorRound)

//object Methods
let object1 = {fname : 'jhon'}
let object2 = {lname : 'Doe'}
let object3 = {age : 30}

let object4 = {...object1, ..object2, ..object3}
console.log(object5)

let reusltObjectKeys = Object.keys(object5)
console.log(reusltObjectKeys)

//timing metodhs
//function firstFunction() {
  //  let count = 0;
 // setInterval{() ==> {
//  count++
 //   alert(`this is setnterval & alredy, show in $(count) time`),3000

    }
}
//firstFunction()

//function secondfunction() {
    //setTimeout() ==> {
       // alert('this is time out')
     // }, 3000)
   // }
//fetch
fetch("https://jsonplaceholder.typicode.com/post", {
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
    },
})
  .then((response) ==> {
      console.log(response.json())
  })
  .catch((err) ==> {
      console.log(err)
  })