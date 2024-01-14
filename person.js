class Person {
  constructor(firstname, lastname, dob, gender, age, phoneNo) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = dob;
    this.gender = gender;
    this.age = age;
    this.phoneNo = phoneNo;
  }
  details() {
    console.log(`First Name : ${this.firstname}
Last Name : ${this.lastname}
Date of Birth : ${this.dob}
Gender : ${this.gender}
Age ; ${this.age}
PhoneNo : ${this.phoneNo}
`);
  }
}

let personDetails1 = new Person(
  "Naveen",
  "Karmgem",
  "24/06/2000",
  "Male",
  "23",
  "9943200713"
);
console.log("First Person Details : ");
personDetails1.details();
console.log();
let personDetails2 = new Person(
  "Ramya",
  "Ramcharan",
  "25/01/2003",
  "Female",
  "21",
  "9943255713"
);
console.log("Second Person Details : ");
personDetails2.details();

/*

First Person Details : 
First Name : Naveen
Last Name : Karmgem
Date of Birth : 24/06/2000
Gender : Male
Age ; 23
PhoneNo : 9943200713


Second Person Details : 
First Name : Ramya
Last Name : Ramcharan
Date of Birth : 25/01/2003
Gender : Female
Age ; 21
PhoneNo : 9943255713


*/
