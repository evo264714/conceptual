// console.log(firstName);

var num1 = 10;
var num2 = "20.666";
// const convertNum2 = parseFloat(num2);

const sum = num1 * num2;

// console.log(sum.toFixed(2));

var num3 = "200.1578";

// console.log(parseFloat(num3));

// if else start from here on

// var num5 = 20;
// var num6 = 40;

// if (num5 == 20 || num6 == 30) {
//   console.log("this is 20");
// } else if (num5 == 100 && num6 == 100) {
//   console.log("this is 100");
// } else {
//   console.log("kono tai tik na");
// }

// var num5 = 100;

// if (num5 > 100) {
//   console.log("this is bigger then 100");
// } else if (num5 < 100) {
//   console.log("this is smaller then 100");
// } else {
//   console.log("this is equal  100");
// }

// var num1 = 600;
// var num2 = 800;
// var num3 = 500;

// if (num1 > num2 && num1 > num3) {
//   console.log("num1 shobtheke boro");
// } else if (num2 > num3) {
//   console.log("num2 shobtheke boro");
// } else {
//   console.log("num3 shobtheke boro");
// }

// var number = "300";

// if (number == 30) {
//   if (typeof number == "string") {
//     console.log("ok its 30 and also a string");
//   } else {
//     console.log("its equal to 30 but not a string");
//   }
// } else {
//   console.log("number not equal to 30");
// }

// console.log(typeof number);

// var num = 100;

// if (num % 2 != 0) {
//   console.log("this is odd number");
// } else {
//   console.log("this is even number");
// }

// 0-32=F
// 33-49=D
//50-59=C
//60-69=B
//70-79=A
// 80-100=A+

var result = 29;

if (result > 100) {
  console.log("bhai result kamne 100 er beshi hoi bolen??");
} else if (result <= 100 && result >= 0) {
  if (result >= 0 && result < 33) {
    console.log("F");
  } else if (result > 32 && result < 50) {
    console.log("D");
  }
} else {
  console.log("bhai result ki 0 theekw kom paisen???");
}



var numbers = ["rahim", "karim", 10, "jabbar", 100, "salmanSha"];

numbers.push("CHINA");

numbers.pop();

numbers.unshift("CHINA");
numbers.shift();

console.log(numbers.reverse());


// 1. string

var name1 = "hero Alom";

console.log(typeof name1);

// number data types
var roll = 71;

console.log(typeof roll);

// boolean data types
var statement = true;
console.log(typeof statement);

// *parseFloat parseInt

var num1 = 70.78;
var num2 = 70;

var sum = num1 + num2;
console.log(parseInt(sum));
// console.log(parseFloat(sum));

// ## If else statement

if (4 > 5) {
  console.log("4 is bigger than 5");
} else {
  console.log("5 is bigger than 4");
}

// 2nd examaple with condition
var number = 50;
if (number % 2 == 0) {
  console.log(" wow its even number");
} else if (number % 2 == 1) {
  console.log("wow its Oddd number");
} else {
  console.log("dont knwo whats that ");
}

// 3rd examaple

// nested condition

var number2 = 30;

if (number2 > 20) {
  if (typeof number2 == "number") {
    console.log("number 2 is a number");
  } else if (typeof number2 == "string") {
    console.log("wow number 2 is string");
  } else {
    console.log("maybe number 2 is boleen");
  }
} else {
  console.log(" number 2 is very small number please try  bigger then 20");
}

// Grade countunting

var result = -39;
if (result > 0) {
  if (result < 33) {
    console.log("wow  tumi fail korco !! Now  Breakup dont call me again");
  } else if (result >= 33 && result < 40) {
    console.log("You just passed this exam (kono moto)");
  } else if (result >= 40 && result < 50) {
    console.log("your grade is D");
  } else if (result >= 50 && result < 60) {
    console.log("your grade is C");
  } else if (result >= 60 && result < 70) {
    console.log("your grade is B");
  } else if (result >= 70 && result < 80) {
    console.log("your grade is A-");
  } else if (result >= 80 && result < 90) {
    console.log("your grade is A+ ");
  } else if (result > 90 && result <= 100) {
    console.log("your grade is  excillent ");
  } else {
    console.log("cant not found please try again yoru grade range is 0-100");
  }
} else {
  console.log("please try with positive number ");
}