// Get the current Day  
var day = moment(new Date).format("dddd, MMMM Do");

//Append the current day to right p tag the HTML
$("#currentDay").text(day)

// WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future

var timeBlocksColor = function () {
    //get the current hour
    var currentHour = moment().hour();

    //create for loop to go through each hour
    for (i = 9; i < 18; i++) {

        // use unique id on each div to loop through each one
        let timeBlock = $("#time-b" + i);
        timeBlock.removeClass("past present future")

        if (currentHour < i) {
            timeBlock.addClass("future")
        }

        else if (currentHour > i) {
            timeBlock.addClass("past")

        }
        else {
            timeBlock.addClass("present")
        };

    }
};

timeBlocksColor()















