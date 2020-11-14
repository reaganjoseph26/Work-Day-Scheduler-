// Get the current Day  
var day = moment(new Date).format("dddd, MMMM Do");

//Append the current day to right p tag the HTML
$("#currentDay").text(day)

// WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future



//get the current hour
var currentHour = moment().hour();

// place times into array timeblock


var timeArr = $(".time-h").map(function () {
    console.log(timeArr)
    
    return this.id;
});

console.log(timeArr)

for (i = 0; i < timeArr.length; i++) {
    //var parsed = parseInt(i)
    console.log(timeArr.textContent)
    if(i > currentHour) {
        $("test").addClass("future")
    }
};




//compare the current time agaisnt the timeblocks

// var timeBlocksColor = function () {
//     time = moment()
//     //console.log(moment())
// console.log(currentHour);
// console.log(time)

// if (time.isAfter(currentHour)) {
//     console.log(time.isAfter())
//     $(".col-10").addClass("future")
// } 
// else if (time.isSame(currentHour)) {
//     console.log(time.isAfter())
//     $(".col-10").addClass("present")

// }
// else if (time.isBefore(currentHour)) {
//     console.log((time.isAfter()))
//     $(".col-10").addClass("hour")

// }

// };


//timeBlocksColor()















