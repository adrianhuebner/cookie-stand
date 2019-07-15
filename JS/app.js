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
// totalSales = [];
//

//  var times should be in military time so that it is easier to distinguish what time it is

// array of all store hours
var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

// getRandomInt: function (min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }

var firstPike = {
  custmin: 23,
  custmax: 65,
  avgcookie: 6.3,
  sales: [],
  getRandomInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min)) + min;
  },
  allCookies: function (){
    for (var i = 0; i < storeHours.length; i++){
      var saleHrs = this.getRandomInt(this.custmin,this.custmax);
      var cookieHrs = Math.round(saleHrs*this.avgcookie);
      this.avgcookie += cookieHrs;
      this.sales.push(cookieHrs);
      console.log(saleHrs);
    }
  }
};

firstPike.allCookies();






// literal objects
// var firstandPike = {
//   name: '1st and Pike',
//   listcustomers: [],
//   min: 23,
//   max: 65,
//   averagecookie: 6.3,
//   render: function(){
//     var random = Math.floor(Math.random() * (this.max - this.min)) + this.min;
//     console.log(random);
//   }
// };

// var seaTacAirport = {
//   name: 'SeaTac Airport',
//   listcustomers: [],
//   min: 3,
//   max: 24,
//   averagecookie: 1.2,
//   render: function(){
//     var random = Math.floor(Math.random() * (this.max - this.min)) + this.min;
//     console.log(random);
//   }
// };

// var seattleCenter = {
//   name: 'Seattle Center',
//   listcustomers: [],
//   min: 11,
//   max: 38,
//   averagecookie: 3.7,
//   render: function(){
//     for (var i = 0; i < this.listcustomers.length; i++)
//       var random = Math.floor(Math.random() * (this.max - this.min)) + this.min;
//     console.log(random);
//     this.listcustomers.push(random);
//   },
//   cookierandom: [],
//   render: function(){
//     for (var i = 0; i < this.listcustomers.length; i++){
//       this.cookierandom.push(this.listcustomer[i]*this.randCookies);
//     }
//   }
// };


// var captHill = {
//   name: 'Capitol Hill',
//   listcustomers: [],
//   min: 20,
//   max: 38,
//   averagecookie: 2.3,
//   render: function(){
//     var random = Math.floor(Math.random() * (this.max - this.min)) + this.min;
//     console.log(random);
//   }
// };

// var alki = {
//   name: 'Alki',
//   listcustomers: [],
//   min: 2,
//   max: 16,
//   averagecookie: 4.6,
//   render: function(){
//     var random = Math.floor(Math.random() * (this.max - this.min)) + this.min;
//     console.log(random);
//   }
// };


// // variable that calls shops
// var shoplist = [firstandPike,seaTacAirport,seattleCenter,captHill,alki];

// for (var i = 0; i < shoplist.length; i++){
//   shoplist[i].render();
// }
