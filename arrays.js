//allows you to hold multiple values
const shopping = ['👗','🥻','💅']
//console.log(shopping)


//index gives you the location of a value within an array.
//in an array the counting starts from 0 
//in this case it is grbbing 2nd index i.e nail paint
//console.log(shopping[2])


//array methods(push,slice,indexOf,length)

//Array Push
//push adds one or more element to the end of array and returns new lenghth to the array
shopping.push('🍰','🍪','🍫');
//console.log(shopping);
//console.log(shopping[4]);


//Array Slice
//slice() method returns th eportion of an array you want in new array
//starts from 0 inclusive and Up to 3 but not incuding 3 which means it is giving [0,1,2]
//console.log(shopping.slice(3,5));


//Array indexOf
//gives the index value of an element.
//console.log(shopping.indexOf('🍪'));


//Array length
//Length gives the number of elements you have given in an array .
//Counting starts from 1 itself in the context of length
//console.log(shopping.length);

