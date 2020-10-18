
$(document).ready(function() { 

var currentdayEl = $("#currentDay");

var timeblockEl = $(".container"); 

var currentDate = moment().format('MMMM DD')

var weekdayName = moment(currentDate).format('dddd')

var currentTime = moment().format("H"); 

var time =["9","10","11","12","13","14","15", "16", "17"];
var i=0; 

checkhour(); 
loadPage(); 

function checkhour () {

var parseTime = parseInt(currentTime);
// console.log(parseTime);

$(time).each(function(hour){
var hour = parseInt(time[i++]);
// console.log(hour);

if (hour<parseTime){
    $("#time" + hour).addClass("past");
}
else if (hour === parseTime) {
    $("#time" + hour).removeClass("past");
    $("#time" + hour).addClass("present");
}
else {
    $("#time" + hour).removeClass("past");
    $("#time" + hour).removeClass("present");
    $("#time" + hour).addClass("future")
}

})};

$(".saveBtn").on("click", function(event){

    event.preventDefault();

    var textareaContent = $(this).siblings('textarea').val(); 
    localStorage.setItem("myContent", textareaContent);
    console.log(textareaContent);

    var myContent = localStorage.getItem("myContent");
    textareaContent= myContent; 
    
});

function loadPage (){

    var myContent = localStorage.getItem("myContent");
    $()= myContent; 
};

});

