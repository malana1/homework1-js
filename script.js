 "use strict";
//hw 
//1

let x = 0;
for (let i = 5; i < 100; i++) {
  console.log(i);
}
//2
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let item of array1);
  if (item > 0 && item < 10) {
    console.log(item);
  }
  //3
  
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let item of array2)
    if(item == 5){
        console.log("item");
        break;

    }
//5
let array4 =[1, 2, 3,7,6,9];
let sum=0;
for(let item =0; item <array4.length; item++){
    console.log(array4[item]);
    sum = sum +array4[item];

//}
let result = sum/array4.length;
console.log(result);

//6  mec ar vici ra gavakeTeee 
let array5 = [1, 2, 3, 7, 6, 9];
for (let x = 7 of array5) 
   if(x== 7){
   continue;
   }
 //7
 let user = {
   firstname: "giorgi",
    lastname: "smith",
   age: 25,
  studentstatus: "active",
  };
 delete user.studentstatus;
 console.log(user);

 //9
 let array = [ [2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10] ];
 for(let item=0; item <array.length;item++){
    console.log(array[item]);
    const element = array[item];
    for(let x = 0; x <element.length; x ++){
        console.log(element[x]);
        const positive = element[x];
        if(positive >0){
            console.log(positive);
        }

}
    }

    //10
    let array10 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (const x of array10) {
  // console.log(x);

  if (x % 2 == 0) {
    console.log(x);
  }
  if (x % 2 == 1) {
    console.log(x);
  }
}
//11
let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
  ]
for(let item of user){
   // console.log(item);
   if(item.status==true){
    console.log(item);
   }

}
 


 



        

   


    














