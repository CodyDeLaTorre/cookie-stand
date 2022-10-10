'use strict';

const mainPage = document.getElementById('data');

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];


// location one
let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesSoldPerHourArr: [],
  dailyTotal: 0,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

};

for (let i = 0; i < hours.length; i++) {
  let cookiesPurchased = seattle.getRandomCustomers() * seattle.avg;
  seattle.cookiesSoldPerHourArr.push(Math.trunc(cookiesPurchased));
}
for(let j = 0; j < seattle.cookiesSoldPerHourArr.length; j++){
  seattle.dailyTotal += seattle.cookiesSoldPerHourArr[j];
}


let firstSection = document.createElement('section');

mainPage.appendChild(firstSection);

let h3 = document.createElement('h3');
h3.textContent = seattle.name;

firstSection.appendChild(h3);

let firstSalesData = document.createElement('ul');

firstSection.appendChild(firstSalesData);

function listItem() {
  for (let i = 0; i < hours.length; i++) {
    let seattleInfo = document.createElement('li');
    firstSalesData.appendChild(seattleInfo);
    seattleInfo.textContent = `${hours[i]}: ${seattle.cookiesSoldPerHourArr[i]} cookies sold`;
  }
}

listItem();
let seattleTotal = document.createElement('li');
firstSalesData.appendChild(seattleTotal);
seattleTotal.textContent=`Today's total is ${seattle.dailyTotal}.`;

//location two

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesSoldPerHourArr: [],
  dailyTotal: 0,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

};

for (let i = 0; i < hours.length; i++) {
  let cookiesPurchased = tokyo.getRandomCustomers() * tokyo.avg;
  tokyo.cookiesSoldPerHourArr.push(Math.trunc(cookiesPurchased));
}
for(let j = 0; j < tokyo.cookiesSoldPerHourArr.length; j++){
  tokyo.dailyTotal += tokyo.cookiesSoldPerHourArr[j];
}


let secondSection = document.createElement('section');

mainPage.appendChild(secondSection);

let h32 = document.createElement('h3');
h32.textContent = tokyo.name;

secondSection.appendChild(h32);

let secondSalesData = document.createElement('ul');

secondSection.appendChild(secondSalesData);

function listItem2() {
  for (let i = 0; i < hours.length; i++) {
    let tokyoInfo = document.createElement('li');
    secondSalesData.appendChild(tokyoInfo);
    tokyoInfo.textContent = `${hours[i]}: ${tokyo.cookiesSoldPerHourArr[i]} cookies sold`;
  }
}

listItem2();

let tokyoTotal = document.createElement('li');
secondSalesData.appendChild(tokyoTotal);
tokyoTotal.textContent=`Today's total is ${tokyo.dailyTotal}.`;

// location three

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesSoldPerHourArr: [],
  dailyTotal: 0,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

};

for (let i = 0; i < hours.length; i++) {
  let cookiesPurchased = dubai.getRandomCustomers() * dubai.avg;
  dubai.cookiesSoldPerHourArr.push(Math.trunc(cookiesPurchased));
}
for(let j = 0; j < dubai.cookiesSoldPerHourArr.length; j++){
  dubai.dailyTotal += dubai.cookiesSoldPerHourArr[j];
}


let thirdSection = document.createElement('section');

mainPage.appendChild(thirdSection);

let h33 = document.createElement('h3');
h33.textContent = dubai.name;

secondSection.appendChild(h33);

let thirdSalesData = document.createElement('ul');

thirdSection.appendChild(thirdSalesData);

function listItem3() {
  for (let i = 0; i < hours.length; i++) {
    let dubaiInfo = document.createElement('li');
    thirdSalesData.appendChild(dubaiInfo);
    dubaiInfo.textContent = `${hours[i]}: ${dubai.cookiesSoldPerHourArr[i]} cookies sold`;
  }
}

listItem3();
let dubaiTotal = document.createElement('li');
thirdSalesData.appendChild(dubaiTotal);
dubaiTotal.textContent=`Today's total is ${dubai.dailyTotal}.`;

// location four

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  cookiesSoldPerHourArr: [],
  dailyTotal: 0,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

};

for (let i = 0; i < hours.length; i++) {
  let cookiesPurchased = paris.getRandomCustomers() * paris.avg;
  paris.cookiesSoldPerHourArr.push(Math.trunc(cookiesPurchased));
}
for(let j = 0; j < paris.cookiesSoldPerHourArr.length; j++){
  paris.dailyTotal += paris.cookiesSoldPerHourArr[j];
}


let fourthSection = document.createElement('section');

mainPage.appendChild(fourthSection);

let h34 = document.createElement('h3');
h34.textContent = paris.name;

fourthSection.appendChild(h34);

let fourthSalesData = document.createElement('ul');

fourthSection.appendChild(fourthSalesData);

function listItem4() {
  for (let i = 0; i < hours.length; i++) {
    let parisInfo = document.createElement('li');
    fourthSalesData.appendChild(parisInfo);
    parisInfo.textContent = `${hours[i]}: ${paris.cookiesSoldPerHourArr[i]} cookies sold`;
  }
}

listItem4();
let parisTotal = document.createElement('li');
fourthSalesData.appendChild(parisTotal);
parisTotal.textContent=`Today's total is ${paris.dailyTotal}.`;

//location five
let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  cookiesSoldPerHourArr: [],
  dailyTotal: 0,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

};

for (let i = 0; i < hours.length; i++) {
  let cookiesPurchased = lima.getRandomCustomers() * lima.avg;
  lima.cookiesSoldPerHourArr.push(Math.trunc(cookiesPurchased));
}
for(let j = 0; j < lima.cookiesSoldPerHourArr.length; j++){
  lima.dailyTotal += lima.cookiesSoldPerHourArr[j];
}


let fifthSection = document.createElement('section');

mainPage.appendChild(fifthSection);

let h35 = document.createElement('h3');
h35.textContent = lima.name;

fourthSection.appendChild(h35);

let fifthSalesData = document.createElement('ul');

fifthSection.appendChild(fifthSalesData);

function listItem5() {
  for (let i = 0; i < hours.length; i++) {
    let limaInfo = document.createElement('li');
    fifthSalesData.appendChild(limaInfo);
    limaInfo.textContent = `${hours[i]}: ${lima.cookiesSoldPerHourArr[i]} cookies sold`;
  }
}

listItem5();
let limaTotal = document.createElement('li');
fifthSalesData.appendChild(limaTotal);
limaTotal.textContent=`Today's total is ${lima.dailyTotal}.`;
