'use strict';

const salesTable = document.querySelector('tbody');
const salesHead = document.querySelector('thead');
const SalesFoot = document.querySelector('tfoot');

//let storeArr = [];
let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

function City(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesSoldPerHourArr = [];
  this.dailyTotal = 0;
  //storeArr.push(this);
}

City.prototype.allMath = function () {
  for (let i = 0; i < hours.length; i++) {
    let randomCustomers = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    let cookiesPurchased = randomCustomers * this.avg;
    this.cookiesSoldPerHourArr.push(Math.trunc(cookiesPurchased));
  }

  for (let j = 0; j < this.cookiesSoldPerHourArr.length; j++) {
    this.dailyTotal += this.cookiesSoldPerHourArr[j];
  }
};

/*City.prototype.totalOfTotals = function () {
  for (let i = 0; i < hours.length; i++) {
    let totalOfTotals = 0;
    for (let j = 0; j < storeArr.length; j++) {
      totalOfTotals += storeArr[j.cookiesSoldPerHourArr[i]];
    }
  }
};*/

//table head
let th = document.createElement('th');
salesHead.appendChild(th);
for (let i = 0; i < hours.length; i++) {
  let th = document.createElement('th');
  th.textContent = hours[i];
  salesHead.appendChild(th);
}
let th2 = document.createElement('th');
th2.textContent = ' Daily Total';
salesHead.appendChild(th2);

//table main data
City.prototype.createData = function () {
  let tr = document.createElement('tr');
  salesTable.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = this.name;
  tr.appendChild(td);
  for (let i = 0; i < hours.length; i++) {
    let tabledata = document.createElement('td');
    tabledata.textContent = this.cookiesSoldPerHourArr[i];
    tr.appendChild(tabledata);
  }
  let td2 = document.createElement('td');
  td2.textContent = this.dailyTotal;
  tr.appendChild(td2);
};

//table foot

/*let td = document.createElement('td');
td.textContent = 'Totals';
SalesFoot.appendChild(td);
for (let i = 0; i < hours.length; i++) {
  let footdata = document.createElement('td');
  footdata.textContent = ;
  SalesFoot.appendChild(footdata);
}*/
// location one

let seattle = new City('Seattle', 23, 65, 6.3);
seattle.allMath();
seattle.createData();

//location two

let tokyo = new City('Tokyo', 3, 24, 1.2);
tokyo.allMath();
tokyo.createData();

// location three

let dubai = new City('Dubai', 11, 38, 3.7);
dubai.allMath();
dubai.createData();

// location four

let paris = new City('Paris', 20, 38, 2.3);
paris.allMath();
paris.createData();

//location five

let lima = new City('Lima', 2, 16, 4.6);
lima.allMath();
lima.createData();
