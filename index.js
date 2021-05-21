const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'What Does The This Keyword Mean?',
  'What Is The Contutorialuctor OO Pattern?',
  'Implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
  'What Is NaN And How Can We Check For It',
  'What Is The Difference Between StopPropagation And PreventDefault?',
  'Immutable State And Pure Functions',
  'What Is The Difference Between == And ===?',
  'What Is The Difference Between Event Capturing And Bubbling?',
  'What Is JSONP?'
];

const titleCased = () => {
  return tutorials
}
function map(arr, func){
    let newArr = []
    arr.forEach(element => {
        newArr.push(func(element))
    });
    return newArr
}

function reduce(arr, func, start){
    let r = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1

    for (; i < arr.length; i++) {
      r = func(arr[i], r)
    }

    return r;
  }
