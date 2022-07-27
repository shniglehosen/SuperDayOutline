var today = moment(); //moment for today time
let localTextArray = localStorage.getItem("textValue"); //array to hold text value
var formEl = $('#time-block'); //to create time blocks
var time = moment().format("H");


const hours = [9,10,11,12,13,14,15,16,17] //hours will be constant, so set for 8 hour work day. Set up loop to create blocks
for (let i = 0; i < 9; i++) {
    let timeLine ="";
    //If statement to determine where current time is and show others as either future or past with colors representing them
    if (time > hours[i]) {
        timeLine = "past";
    } else if (time === hours[i]){
        timeLine = "present";
    } else{
        timeLine = "future";
    }

    if(hours[i] > 12){
        hours[i] = `${hours[i] - 12} PM`;
    }  else if (hours[i] === 12) {
        hours[i] = `${hours[i]} PM`;
    }
    else{
        hours[i] = `${hours[i]} AM`;
    }

    //append tags and classes including timeline
  formEl.append(`<div class = "row align-items-center">
  <div class="hour col-sm-2">${hours[i]}</div>
  <textarea class="textarea col-12 col-md-9 ${timeLine}"></textarea>
  <button class="saveBtn col-sm-1">💾</button>
  </div>`)
  

}

    //localTextArray to store information from text area
if(localTextArray){
    localTextArray = localTextArray.split(',');
    $(".textarea").each(function (index) {
        $(this).val(localTextArray[index]);
      });
}


//shows current date and time
$("#currentDay").text(today.format("MMM Do, YYYY, hh:mm A"));

var btnEl = $('.saveBtn');
var clearbtnEl = $('.clearBtn');

//button clicks to save and clear 
btnEl.on('click', function(){
    let textArray = [];
    $(".textarea").each(function () {
        textArray.push($(this).val());
      });
      localStorage.setItem("textValue", textArray);
})

clearbtnEl.on('click', function(){
    localStorage.removeItem("textValue");
    $(".textarea").each(function () {
        $(this).val("");
      });
})