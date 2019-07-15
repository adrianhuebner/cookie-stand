'use strict';

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
//  hours = 6am - 8pm
//  number of sales an hour is Random(min, max)
//  
//  var times should be in military time so that it is easier to distinguish what time it is

// array of all store hours
// var storeHours = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// literal objects
var firstandPike = {
  name: '1st and Pike',
  minimumcustomer: 23,
  maximumcustomer: 65,
  cookieaveragesale: 6.3
};
