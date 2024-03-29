'use strict';

//store hours array
var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//location empty arrray for object instance
var allLocations = [];
var formEl = document.getElementById('newStoreInformation');

//constructor function for all locations to reference
function CookieSales(storelocation,minimumCustomersPerHour,maximumCustomersPerHour,averageCookieSales){
  this.storeLocations = storelocation;
  this.minimumCustomers = minimumCustomersPerHour;
  this.maximumCustomers = maximumCustomersPerHour;
  this.averageCookiesPerCustomer = averageCookieSales;
  this.salesofCookiesPerhour = [];
  this.customersInStorePerHour = [];
  this.totalCookiesSoldforDay = 0;
  // this.averageCustomerPerHour();
  // this.averageCookiesPerHour();
  allLocations.push(this);
}

// helper function
// got this function from MDN - math.random() doc
function randomNumberGenerator(min, max){
  return Math.ceil(Math.random() * (max - min + 1)) + min;
}

// function addElement(childElType, childContent, parentEl){
//   var childElement = document.createElement(childElType);
//   childElement.textContent = childContent;
//   parentEl.appendChild(childElement);
// }

// this code got inspired by classork by Lena and then help from Lena and TA's Ron and Ryna
CookieSales.prototype.averageCustomerPerHour = function(){
  for(var i = 0; i < storeHours.length; i++){
    var randomCustomerAmount = randomNumberGenerator(this.minimumCustomers, this.maximumCustomers);
    //console.log(randomCustomerAmount);
    this.customersInStorePerHour.push(randomCustomerAmount);
    //console.log(this.customersInStorePerHour);
  }
};

// using similar logic to do cookie sales
CookieSales.prototype.averageCookiesPerHour = function(){
  for(var i = 0; i < storeHours.length; i++){
    var randomCookieAmount = Math.ceil(this.customersInStorePerHour[i] * this.averageCookiesPerCustomer);
    //console.log(randomCookieAmount);
    //console.log(this.salesofCookiesPerhour);
    this.totalCookiesSoldforDay += randomCookieAmount;
    this.salesofCookiesPerhour.push(randomCookieAmount);
  }
};

new CookieSales('First and Pike',23,65,6.3);
new CookieSales('SeaTac Airport',3,24,1.2);
new CookieSales('Seattle Center',11,38,3.7);
new CookieSales('Capitol Hill',20,38,3.7);
new CookieSales('Alki',2,16,4.6);

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
  thEl.textContent = 'Daily Location Total';
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
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesSoldforDay;
  trEl.appendChild(tdEl);
};

function makeFooter(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Total Hourly Cookie Sales:';
  trEl.appendChild(thEl);
  tableEl.appendChild(trEl);
  for (var i = 0; i < storeHours.length; i++){
    var CookiesSoldPerHour = 0;
    for (var j = 0; j < allLocations.length; j++){
      CookiesSoldPerHour += allLocations[j].salesofCookiesPerhour[i];
    }
    //console.log(CookiesSoldPerHour);
    var tdEl = document.createElement('td');
    tdEl.textContent = CookiesSoldPerHour;
    trEl.appendChild(tdEl);
  }
  var grandTotalofCookiesSold = 0;
  for(var t = 0; t < allLocations.length; t++){
    grandTotalofCookiesSold += allLocations[t].totalCookiesSoldforDay;
  }
  tdEl = document.createElement('td');
  tdEl.textContent = grandTotalofCookiesSold;
  trEl.appendChild(tdEl);
}

formEl.addEventListener('submit', function(e){
  e.preventDefault();

  var newStoreLocation = e.target.storeName.value;
  //console.log(newStoreLocation);
  var newMinimumCustomer = e.target.minimumAmountCustomers.value;
  //console.log(newMinimumCustomer);
  var newMaximumCustomer = e.target.maximumAmountCustomers.value;
  //console.log(newMaximumCustomer);
  var newCookieAverage = e.target.averageCookiesSold.value;
  //console.log(newCookieAverage);

  new CookieSales(newStoreLocation,newMinimumCustomer,newMaximumCustomer,newCookieAverage);

  // clearing stuff
  tableEl.innerHTML = '';

  makeHeader();
  for(var i = 0; i < allLocations.length; i++){
    allLocations[i].render();
  }
  makeFooter();
  //rendering table back to page
});

makeHeader();
for(var i = 0; i < allLocations.length; i++){
  allLocations[i].render();
}
makeFooter();
