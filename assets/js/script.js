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
// WHEN I click into a time block THEN I can enter an event

// create on click events so when user clicks into timeblock, they can enter text
// dynamically create a textarea in class col-10 when clicked  so it applys so all divs

// $(".col-10").on("click", function() {

//     var text = $(this)
//     .text()
//     .trim();
//     var textInput = $("<textarea>")
//     $(this).append(textInput)
//     textInput.trigger("focus")
//     .addClass("textarea")
//     .val(text); 


// });


// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage


    $(".saveBtn").click(function () {
        inputValues = []
        var eventInput = $("textarea").val()
        inputValues.push(eventInput)

        console.log(inputValues)
        localStorage.setItem("inputValues", JSON.stringify(inputValues))
    });


timeBlocksColor()















