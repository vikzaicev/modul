const hiro = document.querySelector('.hiro')

const title = document.createElement('h1')
title.innerHTML = "Заголовок"
title.classList.add('title-h1')

hiro.append(title)


import { print } from "./function.js";
print("jjj")


//************codewars*******************//
function rep(s) {
  let res = []
  const gl = "aeiouAEIOU"
  for (let char of s) {

    gl.includes(char) ? res.push("!") : res.push(char)

  }
  // console.log(res.join(""));
}
rep("slon")

function isItLetter(character) {
  // console.log(character.search(/[a-z]/i));
  // console.log(/[a-z]/i.test(character));
}
isItLetter("l")

function tacofy(word) {
  let res = ['shell']
  for (let char of word.toLowerCase()) {
    if (char == "t") {
      res.push("tomato")
    }
    if (char == "l") {
      res.push("lettuce")
    }
    if (char == "c") {
      res.push("cheese")
    }
    if (char == "g") {
      res.push("guacamole")
    }
    if (char == "s") {
      res.push("salsa")
    }
    if (char == "a" || char == "o" || char == "i" || char == "e" || char == "u") {
      res.push("beef")
    }
  }
  res.push("shell")
  //console.log(res);
}
tacofy("world")


function findDup(arr) {
  arr.forEach((element, index) => {
    if (arr.includes(element, index + 1)) {
      //console.log(element);
    }
  });
}
findDup([1, 2, 2, 3])

function planeSeat(a) {
  let num = []
  let str = []
  let result = []
  let alf = 'abcdefghklmnopqrstuvwxyz'
  for (let char of a) {
    Number.isInteger(+char) ? num.push(char) : str.push(char)
  }

  //console.log(num.join(''), str.join(''));
  if (+num.join('') > 61) {
    return "No Seat!!"
  }
  if (+num.join('') < 21) {
    console.log(+num.join(''));
    result.push("Front")
    //console.log(result);
  }
  if (+num.join('') > 20 && +num.join('') < 41) {
    result.push("Middle")
  }
  if (+num.join('') > 40 && +num.join('') < 61) {
    result.push("Backe")
  }

  // console.log(alf.indexOf(str.join('').toLowerCase()));
  if (alf.indexOf(str.join('').toLowerCase()) == -1) {
    return "No Seat!!"
  }
  if (alf.indexOf(str.join('').toLowerCase()) < 3) {
    result.push("Left")
  }
  if (alf.indexOf(str.join('').toLowerCase()) < 6 && alf.indexOf(str.join('').toLowerCase()) > 2) {
    result.push("Middle")
  }
  if (alf.indexOf(str.join('').toLowerCase()) < 9 && alf.indexOf(str.join('').toLowerCase()) > 5) {
    result.push("Right")
  }
  //console.log(result.join("-"));

}
planeSeat('29i')

