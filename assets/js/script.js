var saveButtonEl = $('.saveBtn');
var textAreaEl = $('.description');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  saveButtonEl.on('click', function() {
    
    var thisParentId = $(this).parent().attr('id');
    var thisParentEl = $(this).parent();
    var thisSibling = $(thisParentEl).children().eq(1);
    var textInput = $(thisSibling).val();
    var thisSiblingParentId = $(thisSibling).parent().attr('id');

if (thisSiblingParentId === thisParentId) {

      localStorage.setItem('Daily Tasks:', textInput);

}   
    });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


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

});





// var scoresHistory = JSON.parse(localStorage.getItem('Score')) || [];

// var tmpScoreObj = {
//     score: score,
//     initial: grabInputEl.value,
// };

// scoresHistory.push(tmpScoreObj);


// var scoresHistory = JSON.parse(localStorage.getItem('Score')) || [];

// for (var i = 0; i < scoresHistory.length; i++) {

//     var scoreSheet = scoresHistory[i];
//     var initialsAndScore = `${scoreSheet.initial} : ${scoreSheet.score}`;
//     var listItemEl = document.createElement('p');
//     listItemEl.textContent = initialsAndScore;
//     listItemEl.setAttribute('style', 'font-size: 20px; font-weight: 300; background-color: rgb(240,230,140); color: black; text-align: center; margin-right: 25px; margin-bottom: 30px;');
//     listTitleEl.appendChild(listItemEl);
     

// }