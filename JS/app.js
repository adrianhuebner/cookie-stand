'use strict';

var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// location / min cus / max cus / cookie av
// 1st & Pike / 23 / 65 / 6.3
// SeaTac / 3 / 24 / 1.2
// SeattleCenter / 11 / 38 / 3.7
// CaptHill / 20 / 38 / 2.3
// Alki / 2 / 16 /4.6

// return math.round(math.random()*(max-man+1)+min);

// in: customer min/max and avg cookie
// out: list of cookies per hour and total

// total = 0
// totalSales = [];
//

//  var times should be in military time so that it is easier to distinguish what time it is

// array of all store hours

// getRandomInt: function (min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;

// var firstPike = {
//   ulEl: document.getElementById('firstPike'),
//   custmin: 23,
//   custmax: 65,
//   avgcookie: 6.3,
//   sales: [],
//   cookieTotal: 0,
//   getRandomInt: function (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random()*(max - min)) + min;
//   },
//   allCookies: function (){
//     for (var i = 0; i < storeHours.length; i++){
//       var saleHrs = this.getRandomInt(this.custmin,this.custmax);
//       var cookieHrs = Math.round(saleHrs*this.avgcookie);
//       this.cookieTotal += cookieHrs;
//       this.sales.push(cookieHrs);
//       console.log(saleHrs);
//     }
//   },
//   rendor: function(){
//     for (var i = 0; i < storeHours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${storeHours[i]} : ${this.sales[i]} cookies`;
//       this.ulEl.appendChild(liEl);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = `Total cookie sales: ${this.cookieTotal}`;
//     this.ulEl.appendChild(liEl);
//   }
// };

// // firstPike.allCookies();
// // firstPike.rendor();

// var seaTac = {
//   ulEl: document.getElementById('SeaTac Airport'),
//   custmin: 3,
//   custmax: 24,
//   avgcookie: 1.2,
//   sales: [],
//   cookieTotal: 0,
//   getRandomInt: function (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random()*(max - min)) + min;
//   },
//   allCookies: function (){
//     for (var i = 0; i < storeHours.length; i++){
//       var saleHrs = this.getRandomInt(this.custmin,this.custmax);
//       var cookieHrs = Math.round(saleHrs*this.avgcookie);
//       this.cookieTotal += cookieHrs;
//       this.sales.push(cookieHrs);
//       console.log(saleHrs);
//     }
//   },
//   rendor: function(){
//     for (var i = 0; i < storeHours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${storeHours[i]} : ${this.sales[i]} cookies`;
//       this.ulEl.appendChild(liEl);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = `Total cookie sales: ${this.cookieTotal}`;
//     this.ulEl.appendChild(liEl);
//   }
// };

// // seaTac.allCookies();
// // seaTac.rendor();

// var seaCenter = {
//   ulEl: document.getElementById('Seattle Center'),
//   custmin: 11,
//   custmax: 38,
//   avgcookie: 3.7,
//   sales: [],
//   cookieTotal: 0,
//   getRandomInt: function (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random()*(max - min)) + min;
//   },
//   allCookies: function (){
//     for (var i = 0; i < storeHours.length; i++){
//       var saleHrs = this.getRandomInt(this.custmin,this.custmax);
//       var cookieHrs = Math.round(saleHrs*this.avgcookie);
//       this.cookieTotal += cookieHrs;
//       this.sales.push(cookieHrs);
//       console.log(saleHrs);
//     }
//   },
//   rendor: function(){
//     for (var i = 0; i < storeHours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${storeHours[i]} : ${this.sales[i]} cookies`;
//       this.ulEl.appendChild(liEl);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = `Total cookie sales: ${this.cookieTotal}`;
//     this.ulEl.appendChild(liEl);
//   }
// };

// // seaCenter.allCookies();
// // seaCenter.rendor();

// var CaptHill = {
//   ulEl: document.getElementById('Capitol Hill'),
//   custmin: 20,
//   custmax: 38,
//   avgcookie: 2.3,
//   sales: [],
//   cookieTotal: 0,
//   getRandomInt: function (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random()*(max - min)) + min;
//   },
//   allCookies: function (){
//     for (var i = 0; i < storeHours.length; i++){
//       var saleHrs = this.getRandomInt(this.custmin,this.custmax);
//       var cookieHrs = Math.round(saleHrs*this.avgcookie);
//       this.cookieTotal += cookieHrs;
//       this.sales.push(cookieHrs);
//       console.log(saleHrs);
//     }
//   },
//   rendor: function(){
//     for (var i = 0; i < storeHours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${storeHours[i]} : ${this.sales[i]} cookies`;
//       this.ulEl.appendChild(liEl);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = `Total cookie sales: ${this.cookieTotal}`;
//     this.ulEl.appendChild(liEl);
//   }
// };

// // CaptHill.allCookies();
// // CaptHill.rendor();

// var alki = {
//   ulEl: document.getElementById('Alki'),
//   custmin: 23,
//   custmax: 65,
//   avgcookie: 6.3,
//   sales: [],
//   cookieTotal: 0,
//   getRandomInt: function (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random()*(max - min)) + min;
//   },
//   allCookies: function (){
//     for (var i = 0; i < storeHours.length; i++){
//       var saleHrs = this.getRandomInt(this.custmin,this.custmax);
//       var cookieHrs = Math.round(saleHrs*this.avgcookie);
//       this.cookieTotal += cookieHrs;
//       this.sales.push(cookieHrs);
//       console.log(saleHrs);
//     }
//   },
//   rendor: function(){
//     for (var i = 0; i < storeHours.length; i++){
//       var liEl = document.createElement('li');
//       liEl.textContent = `${storeHours[i]} : ${this.sales[i]} cookies`;
//       this.ulEl.appendChild(liEl);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = `Total cookie sales: ${this.cookieTotal}`;
//     this.ulEl.appendChild(liEl);
//   }
// };

// // alki.allCookies();
// // alki.rendor();
// // // variable that calls shops
// var shoplist = [firstPike,seaTac,seaCenter,CaptHill,alki];

// for (var i = 0; i < shoplist.length; i++){
//   shoplist[i].allCookies();
//   shoplist[i].rendor();
// }

// helper function
// got this function from MDN - math.random() doc
// function randomNumber(min.max){
//  return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// this is inside of the object
// generateCustomersEachHour: function(){
// for(var i = 0; i < hours.length; i++){
//  var customersPerHour = randomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
//
//  this.CustomersEachHour.push(customersPerHour);
// }
// }
// genterateCookiesEachHour: function(){
//  this.generateCustomersEachHour();
//  for(var i = 0; i < hours.length; i++){
//     var cookiesForOneHour = Math.ciel(this.customersEachHour[i] * this.averageCookiesPerCustomer);
//
// this.CookiesEachHour.push(cookiesForOneHour);
// this.totalCookiesForTheDay += cookiesForOneHour;
//},
// rendor: function(){
//
// }
// }

// firstPike.generateCookiesEachHour();

// on top you would do this
// var ulFirstPike = document.getElementById('first-pike');
// var ulSeaTac = document.getElementById('SeaTac Airport');
// ...
// var ulAlik = document.getElementById('Alki');

var allLocations = [];

function CookieSales(storelocation,minimumCustomersPerHour,maximumCustomersPerHour,averageCookieSales){
  this.storeLocations = storelocation;
  this.minimumCustomers = minimumCustomersPerHour;
  this.maximumCustomers = maximumCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookieSales;
  this.salesofCookiesPerhour = [];
  this.customersInStorePerHour = [];
  // this.averageCustomerPerHour();
  // this.averageCookiesPerHour();
  allLocations.push(this);
}

// helper function
// got this function from MDN - math.random() doc
function randomNumberGenerator(min, max){
  return Math.ceil(Math.random() * (max - min + 1)) + min;
}

// this code got inspired by classork by Lena and then help from Lena and TA's Ron and Ryna
CookieSales.prototype.averageCustomerPerHour = function(){
  for(var i = 0; i < storeHours.length; i++){
    var randomCustomerAmount = randomNumberGenerator(this.minimumCustomers, this.maximumCustomers);
    console.log(randomCustomerAmount);
    this.customersInStorePerHour.push(randomCustomerAmount);
    console.log(this.customersInStorePerHour);
  }
};

// using similar logic to do cookie sales
CookieSales.prototype.averageCookiesPerHour = function(){
  for(var i = 0; i < storeHours.length; i++){
    var randomCookieAmount = Math.ceil(this.customersInStorePerHour[i] * this.averageCookiesPerCustomer);
    console.log(randomCookieAmount);
    this.salesofCookiesPerhour.push(randomCookieAmount);
    console.log(this.salesofCookiesPerhour);
  }
};

new CookieSales('First and Pike',23,65,6.3);
new CookieSales('SeaTac Airport',3,24,1.2);
new CookieSales('Seattle Center',11,38,3.7);
new CookieSales('Capitol Hill',20,38,3.7);
new CookieSales('Alki',2,16,4.6);

console.log(allLocations);

var tableEl = document.getElementById('table');

function makeHeader(){
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  for(var i = 0; i < storeHours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
}

CookieSales.prototype.render = function(){
  this.averageCustomerPerHour();
  this.averageCookiesPerHour();
  
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);

  var thEl = document.createElement('th');
  thEl.textContent = this.storeLocations;
  trEl.appendChild(thEl);

  for(var i = 0; i < storeHours.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.salesofCookiesPerhour[i];
    trEl.appendChild(tdEl);
  }
};
makeHeader();
for(var i = 0; i < allLocations.length; i++){
  allLocations[i].render();
}
