//For loop

//const fruits= ['🍇','🍉','🍎','🥭','🍌','🍐']
//fruits.length runs for the same amount of time that there are items on the array.
//for loop is the basic one and shouldnt use it 
//for(i=0 ; i<fruits.length ; i++){

//that i gives the number of array it isnt mandatory but if u need number use it.
 //   console.log(i,fruits[i])}

//here fruits is the array name which consists of all the elments and
//fruit can be said as a random name that is given at first the fruit denotes first elemnt of the array 
//at the second time it denotes the second elemnt likewise it covers all the elements of an array one by one


//For Of loop
//for (const fruit of fruits){
   // console.log(fruit)}

//try

//creating a function
//const double=(numbers) => {

//let result = []
//const numbers=[1,2,3,4,5,6]
//for( const number of numbers){
    //double the number in an array
    //console.log(number*2)
    
    //to double the number and let the output be in array form

    //const res=(number*2)
    //result.push(res)

    //or can be also done as
    //result.push(number*2) 
    //NOTE square garna lai ** use garne instead of ^}
//return result;}
    //console.log(double([1,2,3,4,5,6]))


 //for in loop   

 // no parameter or 0 arguments
    /*const letterCounter = () => {
        const phrase ='Hey,Can we hangout tonight?'
        let result=0
        for(const index in phrase){

        //console.log(Number(index)+1)
        //+1 gareko because counting 0 bata start hunxa
        result=Number(index)+1
        }
        //we can return result as an object as well by using squiggles
        //return{result}
        return result
    }
   // const phrase ='Hey,Can we hangout tonight?'
  console.log(letterCounter())*/


  //1 argument
 //check in html file
 // const letterCounter = (phrase) => {
    
 //   let result=0
   // for(const index in phrase){

    //console.log(Number(index)+1)
    //+1 gareko because counting 0 bata start hunxa
  //  result=Number(index)+1
   // }
    //we can return result as an object as well by using squiggles
    //return{result}
   // return result}
//   const phrase = prompt("Write your phrase.")
//console.log(letterCounter(phrase))


//Sum of numbers in an array
/*const sumArray = (numbers) => {
    
    let result=0;
    for(const num of numbers){
        result +=num
    }
   
//    return result
}
const nums=[1,2,3,4,5]
console.log(sumArray(nums))*/




const max = (numbers) => {
    let result = numbers[0];

    //loop 

for (const number of numbers){
  if (number > result){
    result = number
  }
}
    return {result}
}
//console.log(max([1,2,3,4]))


//LetterFrequencyy
const letterFrequency = (phrase) => {
  console.log(phrase)
  //make a `frequency` object
  let frequency = {}
 for(const letter of phrase){ 
    //check if letter exists in frequency
    if (letter in frequency){
     //if it exist then increment the calue by 1 else set the value to 1 
     frequency[letter] += 1
    } else {
      frequency [letter] = 1
    }
  } 
  return frequency
}
//console.log(letterFrequency('haha'))

//incremental operators
//++,--,+=,+= 1


//Word Frequency 
/*const wordFrequency =(phrase) => {
  console.log(phrase)
  //make a frequency object
  let frequency = 0
  words = phrase.split(' ')
    //for loop
  for(const word in words){
     /*if (word in frequency){
      frequency[word] += 1
     } else {
      frequency[word] = 1
     }*/
    /* frequency = word
  }
    return frequency
}
console.log(wordFrequency('haha haha haha johnny johnny yes papa'))*/


//shortcut to word count
const wordFrequency =(phrase) => {
  words = phrase.split(' ')
  return letterFrequency(words)
}
const userInput = prompt('Write your sentence')
console.log(wordFrequency(userInput))

//total word 
/*const wordFrequency =(phrase) => {
  console.log(phrase)
  //make a frequency object
  let frequency = 0
  words = phrase.split(' ')
    //for loop
  for(const word in words){*/
     /*if (word in frequency){
      frequency[word] += 1
     } else {
      frequency[word] = 1
     }*/
    // frequency = word
  //}
  //  return frequency
//}
//console.log(wordFrequency('haha haha haha johnny johnny yes papa'))