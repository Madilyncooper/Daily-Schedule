var saveButtonEl = $('.saveBtn');
var textAreaEl = $('.description');
var dailyTaskHistory = JSON.parse(localStorage.getItem('Tasks')) || [];


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  saveButtonEl.on('click', function() {
    
    var thisParentId = $(this).parent().attr('id');
    var thisParentEl = $(this).parent();
    var thisSibling = $(thisParentEl).children().eq(1);
    var textInput = $(thisSibling).val();
    var thisSiblingParentId = $(thisSibling).parent().attr('id');

var dailyTaskObj = {
  tasks: textInput,
  parent: thisParentId,
}

if (thisSiblingParentId === thisParentId) {

    dailyTaskHistory.push(dailyTaskObj);
    localStorage.setItem('Tasks', JSON.stringify(dailyTaskHistory));

}   
    });


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


    var dailyTaskHistory = JSON.parse(localStorage.getItem('Tasks')) || [];


    for (var i = 0; i < dailyTaskHistory.length; i ++) {
      
      var timeBlock = $('#' + dailyTaskHistory[i].parent).children('textarea');

      timeBlock.text(dailyTaskHistory[i].tasks);
    }

  });


function updateTime () {
  var todaysTime = dayjs();

  $('#currentDay').text(todaysTime.format('dddd, MMMM D YYYY [at] hh:mm:ss a'));
}

function currentTime() {
  var timer = setInterval(function (){
    updateTime();
  }, 1000);
}

updateTime();
currentTime();


