// // const newMethod = {
// //   name: "Musa Aka'aba",
// //   gender: "Male",
// //   state: "Kogi State",
// //   greet() {
// //     console.log(
// //       "This function is what we called Method, because is a function in side an object"
// //     );
// //   },
// // };

// // console.log(newMethod.greet());

// // //normal function section
// // function normalFunc(surName, firstName) {
// //   console.log(firstName, surName);
// // }
// // normalFunc("Muhammed Jamiu", "Abdulsalam Anate");

// // /// for javascript class
// // class UserDetails {
// //   constructor(username, password, email, phonenumber) {
// //     this.username = username;
// //     this.password = password;
// //     this.email = email;
// //     this.phonenumber = phonenumber;
// //   }
// //   show() {
// //     console.log("Show us the message from here we are");
// //   }
// //   notification(name, email2) {
// //     // const name1 = "Muhammed Jamiu";
// //     // const email2 = "anatemuhammed@gmail.com";
// //     console.log(
// //       `${name}: we have sent the notification to your email address: ${email2}`
// //     );
// //   }
// // }

// // const userProfile = new UserDetails("anate001", "7252628");
// // console.log(userProfile.username);
// // userProfile.show();
// // userProfile.notification("Muhammed Jamiu", "anatemuhammed@gmail.com");

// //exercise7.1
// class person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }

//   fullName() {
//     return this.firstname + this.lastname;
//   }
// }
// const friend1 = new person("Abdulsalam", "Muhammed Jamiu");
// const friend2 = new person("Momoh Jimoh", "Hashidu");

// console.log("Good night", friend1.firstname, friend1.lastname);
// console.log("Good evening!", friend2.firstname, friend1.lastname);

// //exercise 7.2
// // class person {
// //   constructor(firstname, lastname) {
// //     this.firstname = firstname;
// //     this.lastname = lastname;
// //   }

// //   fullName() {
// //     return this.firstname + this.lastname;
// //   }
// // }

// // let person1 = new person("Musa", "Akaaba");
// // let person2 = new person("Musa", "Akaaba");

// // console.log(person1.fullName());
// // console.log(person2.fullName());

// class UserHistory {
//   constructor(pastHistory, presentHistory, futureHistory) {
//     this.pastHistory = pastHistory;
//     this.presentHistory = presentHistory;
//     this.futureHistory = futureHistory;
//   }

//   isAction(hist1, hist2) {
//     if (hist1 === hist2) return "History is alwways History";
//     else
//       return "From what we have gathered we can say that he is a historical in nature";
//   }
// }

// const history = new UserHistory(
//   "He is a good/nice Person",
//   "He is very kind to people around him",
//   "We hope that he keeps those behaviour for the resst of his Life"
// );

// console.log(history.pastHistory, ";", history.futureHistory);

// const report = history.isAction(13, 13);
// console.log(report);

// class NewPreson {
//   constructor(surname, firstname, othername, email) {
//     this.surname = surname;
//     this.firstname = firstname;
//     this.othername = othername;
//     this.email = email;
//   }
//   personDetails() {
//     return `Surname:    ${this.surname} 🤣\nFirstname:  ${this.firstname} \nOthernme:   ${this.othername}\nEmail:      ${this.email} ✔ `;
//   }
// }

// const output = new NewPreson(
//   "Abdulsalam",
//   "Muhammed Jamiu",
//   "Adeiza",
//   "anatemuhammed@gmail.com"
// );

// console.log(output.personDetails());

// //making class properties not accessable out side the class using hasH-tag for Example below
// class NotAccessableOutSide {
//   #val1;
//   #val2;
//   // val3;
//   constructor(val1, val2, val3) {
//     this.#val1 = val1;
//     this.#val2 = val2;
//     this.val3 = val3;
//   }
// }

// const result = new NotAccessableOutSide("one", "two", "three");
// // console.log(result.val3);

// class LastPerson {
//   #firstcome;
//   #lastcome;
//   constructor(firstcome, lastcome) {
//     if (firstcome) {
//       this.#firstcome = firstcome;
//     } else {
//       this.#firstcome = "M" + firstcome;
//     }
//     this.#lastcome = lastcome;
//   }
// }

// const final = new LastPerson("Muhammed Jamiu", "Hashidu");

// // console.log(final.lastcome);

// //Javascript class getter/setter section

// class OldPerson {
//   #firstname; // this is called private field or property in javascript
//   #lastname; // this is called private field or property in javascript
//   constructor(firstname, lastname) {
//     this.#firstname = firstname;
//     this.#lastname = lastname;
//   }

//   get firstname() {
//     return this.#firstname;
//   }

//   set firstname(firstname) {
//     this.#firstname = firstname;
//   }

//   get lastname() {
//     return this.#lastname;
//   }

//   set lastname(lastname) {
//     this.#lastname = lastname;
//   }
// }

// const oldvalue = new OldPerson("Abdulsalam", "Muhammed Jamiu");
// console.log(
//   `${oldvalue.firstname}: with the help of get method() we can still access the field declear private inside the class block`
// );

// console.log(
//   `${oldvalue.lastname}: Note that without the get method() the lastname will be Undefined as well!`
// );
// //setter section below
// oldvalue.firstname = "Abdulhamid";
// console.log(oldvalue.firstname);

// ///Inheritance section
// class Vehicle {
//   constructor(color, currentSpeed, maxSpeed, fule) {
//     this.color = color;
//     this.currentSpeed = currentSpeed;
//     this.maxSpeed = maxSpeed;
//   }
//   move() {
//     console.log(`Moving at ${this.currentSpeed}`);
//   }
//   accelerate(amount) {
//     console.log((this.currentSpeed += amount));
//   }
// }

// // const newVehicle = new Vehicle("blue", 234, "250mxsp");
// // console.log(newVehicle.accelerate(10));

// // class Motorcycle extends Vehicle {
// //   constructor(color, currentSpeed, maxSpeed, fuel) {
// //     super(color, currentSpeed, maxSpeed);
// //     this.fuel = fuel;
// //   }
// // }

// // const motor = new Motorcycle("red", 0, 240, 1200);
// // console.log(motor);

// // motor.accelerate(30);
// // motor.move();
// // const className = {
// //   name: "name1",
// // };

// // exercise7.3 chapter project
// class EmployeeTracker {
//   #firstname;
//   #lastname;
//   #years;
//   constructor(firstname, lastname, years) {
//     this.#firstname = firstname;
//     this.#lastname = lastname;
//     this.#years = years;
//   }
//   workHours(hour = 21) {
//     let message;
//     if ((hour) => 12) {
//       return (message = "You have a full payment for this Month");
//     } else {
//       return (message =
//         "You have to work hard in other to get full salary for this month");
//     }
//   }
// }

// const worker = new EmployeeTracker("Abdulsalam", "Muhammed Jamiu", 35);
// const worker2 = new EmployeeTracker("Aka'aba", "Musa", 20);
// const worker3 = new EmployeeTracker("Momoh Jimoh", "Hashid", 20);
// // console.log(worker);
// // console.log(worker2.workHours(10));
// // console.log(worker3);
// // console.log(worker.workHours());

// EmployeeTracker.prototype.add = function (age) {
//   if (age >= 30) {
//     console
//       .log
//       // "Yes you are qualified to sit for the forth coming Jamb examination"
//       ();
//   } else {
//     console
//       .log
//       // "Sorry! you are not qualify for the forth cooming Jamb Examination!"
//       ();
//   }
// };

// const newWork = worker.add(45);

// class Employee {
//   constructor(first, last, years) {
//     this.first = first;
//     this.last = last;
//     this.years = years;
//   }
// }
// const person1 = new Employee("Laurence", "Svekis", 10);
// const person2 = new Employee("Jane", "Doe", 5);
// const workers = [person1, person2];
// Employee.prototype.details = function () {
//   return `${this.first}  ${this.last} has worked here for  ${this.years}  years`;
// };
// workers.forEach((person) => {
//   // console.log(person.details());
// });

// ////Assignent Section
// class MenuItems {
//   #price1 = 5;
//   #price2 = 2;
//   constructor(val1, val2) {
//     this.val1 = val1;
//     this.val2 = val2;
//   }
//   calItems() {
//     return this.#price1 * this.val1 + this.#price2 * this.val2;
//   }

//   get item() {
//     return this.calItems();
//   }
// }

// const selectItem1 = new MenuItems(20, 5);
// const selectItem2 = new MenuItems(10, 20);
// console.log(selectItem1.item);
// // console.log(selectItem2.calculateItems);

// // javascript Buit -in method section

// // let uri = "https://www.example.com/submit?name=maaike van putten";
// // let encoded_uri = encodeURI(uri);
// // console.log("Encoded:", encoded_uri);
// // let decoded_uri = decodeURI(encoded_uri);
// // console.log("Decoded:", decoded_uri);

// ////
// // let uri = "https://www.example.com/submit?name=maaike van putten";
// // let encoded_uri = encodeURIComponent(uri);
// // console.log("Encoded:", encoded_uri);
// // let decoded_uri = decodeURIComponent(encoded_uri);
// // console.log("Decoded:", decoded_uri);
// ///
// // Appendix[ 450 ]

// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
//   return typeof element === "string";
// }
// let filterArr = arr.every(checkString);
// // console.log(filterArr);

// /////
// const array = [
//   "Laurence",
//   "Mike",
//   "Larry",
//   "Kim",
//   "Joanne",
//   "Laurence",
//   "Mike",
//   "Laurence",
//   "Mike",
//   "Laurence",
//   "Mike",
// ];
// const arr2 = array.filter((value, index, array) => {
//   // console.log(array.indexOf(value));
//   return array.indexOf(value) === index;
// });
// // console.log(arr2);

// //8.3
// const myNumber = [7, 2, 5, 2, 6, 2, 8, 0];
// const numArray = myNumber.map(function (event) {
//   if (myNumber[0] > 8) {
//     return event * 2;
//   } else {
//     return event + 4;
//   }
// });
// console.log(numArray);
// const altArray = myNumber.map((event2) => event2 * 3);
// // console.log(altArray);

// /// 8.4
// const val = "thIs will be capiTalized for each word";
// function wordsCaps(str) {
//   str = str.toLowerCase();
//   const tempArr = [];
//   let words = str.split(" ");
//   words.forEach((word) => {
//     let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
//     tempArr.push(temp);
//   });
//   return tempArr.join(" ");
// }
// // console.log(wordsCaps(val));

// let caps = "HI HOW ARE YOU?";
// let fixedCaps = caps.toLowerCase();
// let first_capital = fixedCaps
//   .charAt(0)
//   .toUpperCase()
//   .concat(fixedCaps.slice(1));
// console.log(first_capital);

var myName = true;

// console.log(myName);
let errorMessage = document.getElementById("errorMessage");
let me = document.getElementById("me");
let message = "Sorry! you have to fill the space provided first";

let save = document.getElementById("save");
save.addEventListener("click", () => {
  // console.log("Hello! World");
  if (me.value === "") {
    console.log("Fill the space provided first");
    me.style.border = "2px red solid";
    errorMessage.textContent = message;
    errorMessage.style.visibility = "visible";
  } else {
    console.log(me.value);
    errorMessage.innerHTML = me.value;
    errorMessage.style.border = "2px solid green";
    errorMessage.style.backgroundColor = "green";
    errorMessage.style.color = "white";
    errorMessage.style.visibility = "visible";
    errorMessage.style.visibility = "visible";
    me.value = "";
  }

  // checkUserInput();
});

function refresh() {
  location.reload();
}

function checkUserInput() {
  if (typeof me.value === "string" && me.value === "") {
    errorMessage.textContent = me.value;
    console.log("yes it checked!");
    me.value = "";
  } else {
    errorMessage.textContent = message;
    console.log(message);
  }
}

function nameGenerator(min, max) {
  let math = Math.floor(Math.random() * (max - min + 1) + min);
  return math;
}

for (let x = 0; x < 100; x++) {
  // console.log(nameGenerator(2, 100));
}
// console.log(nameGenerator(0, 101));

// Date class in javascript
class Date {
  #years;
  constructor(years, months, weeks, days, hours, mintues, seconds) {
    this.#years = years;
    this.months = months;
    this.weeks = weeks;
    this.days = days;
    this.hours = hours;
    this.mintues = mintues;
    this.seconds = seconds;
  }
  get name() {
    return (this.#years = years);
  }
}

const newDate = new Date(200, 12, 564, 12020, 400801, 1231);
console.log(newDate.weeks);
// console.log(newDate);

// console.log(newDate.getname());


console.time(22)
