//objects is created by doing squigglies i.e {}
/*const person ={
    name: 'Shreya',
    tee : 'Black'
}*/

//Objects accessing has two methods
//dot notation i.e person.name
//bracket notation i.e peron['name']
//console.log(person.name)

//console.log(person['tee'])
//console.log(person.tee)

//assign object
//Number lai quote ma rakhnu means its actually a string and the output comes out as it is 
//person.phone = '9842000000'
//console.log(person.phone)

//console.log(person)

//practise
/*const person2 = {
    name: 'Qazi',
    shirt: 'black'
}

console.log(person2)
console.log(person2.name)
console.log(person2['shirt'])*/

//es6 arrow functions (2 arguments)
//introducer vaneko function ko naam ho
const introducer = (name, shirt) => {
    //create an object
    const person={
        name : name,
        shirt : shirt,
        income : 35000,
        expense : 30000,
        //object vitra function create garne rare case 
        saving : function(){
            return (this.income-this.expense)
        }
    }
     //used template literals
     //person.saving should be called like a function with a paranthesis but because it has . it is called method 
    const intro=`Hi my name is ${person.name} and the color i am wearing is ${person.shirt} 
    and my savings is ${person.saving()} `
    return intro;
}
console.log(introducer('Shreya','Black'));
