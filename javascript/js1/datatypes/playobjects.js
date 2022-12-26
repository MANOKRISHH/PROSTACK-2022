// in Js objects are in key value pair
 
var person = {
        firstname :'sai',
        secondname : 'kiran',
        age : 24,
        OwnsCar : false
}

console.log(person)



// dot notation

console.log(person.age)

//bracket notation

console.log(person['firstname'])



var cap = {
    firstname : 'steve',
    lastname : 'rogers',
    age  : 120,

    friends : ['Bucky bernes','tony stark','black widow'],

    isAvenger : true,

   address : {
         state : 'New york',
         city : {
            name : 'brooklyn',
            pincode : 123435
         }
    }
}

console.log(cap.friends[1])  //bruce banner

console.log(cap.address.city.name) //brooklyn 

cap.isAvenger = false

console.log(cap)

cap.movies = ['age of ultron','civil war','first avenger']  // add objects

console.log(cap)

//delete a property in objects

delete cap.age

console.log(cap)