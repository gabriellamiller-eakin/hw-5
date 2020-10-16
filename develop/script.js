// psuedo code 

// starting with the jumbotron, I need to set the #currentDay ID to = the current Month,Day, and Year using Moment.js 
// To do that, I need to create variables using JQuery that will grab the #currentDay ID and the .container class since I will be needing to set text/append in both of these. 

$(document).ready(function() { 

var currentdayEl = $("#currentDay");

var timeblockEl = $(".container"); 

var currentDate = moment().format('MMMM DD')

var weekdayName = moment(currentDate).format('dddd')

// this is appending the current day name, month, and day number to the currentdayEl using moment.js
var setDate = currentdayEl.text(weekdayName + ", " +currentDate + "th");
currentdayEl.append(setDate);

});