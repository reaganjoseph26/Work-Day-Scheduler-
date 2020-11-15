// Get the current Day  
$(document).ready(function () {
    var day = moment(new Date).format("dddd, MMMM Do");
    
    //Append the current day to right p tag the HTML
    $("#currentDay").text(day)
    
    
    // WHEN I click the save button for that time block
    // THEN the text for that event is saved in local storage
    
    inputValues = {};
    
    $(".saveBtn").click(function () {
      
        var $textarea = $(this).closest(".row").find(".textarea");
        inputValues[$textarea.attr("id")] = $textarea.val().trim()
        
        
    
        // console.log(inputValues)
        localStorage.setItem("inputValues", JSON.stringify(inputValues))
    
    
    });
    console.log(inputValues);
    
    // WHEN I refresh the page
    // THEN the saved events persist
    
    
        // retireve the items and display them to the page 
         inputValues = JSON.parse(localStorage.getItem("inputValues")) || {}; // if no data then create an empty object
         getLocal();
        function getLocal(){
            keys = Object.keys(localStorage);
            values = Object.values(localStorage);
            keyObject = JSON.parse(localStorage.getItem(keys[0]));
            keyLength = Object.values(keyObject).length;
            valueObject = values[0];
               //console.log('Our console log',keyObject[Object.keys(keyObject)[0]]);
              //our actual key  console.log(Object.keys(keyObject)[0]);
               //console.log(Object.values(values)[0])
        console.log(keyLength);
            
       
    
        $(".time-block").each(function(){
            textAreaId = $(this).children().find('textarea').attr("id");
            for(var i = 0; i < keyLength; i++ ){
            if((Object.keys(keyObject)[i]) == (textAreaId)){
                $(this).children().find('textarea').val(keyObject[Object.keys(keyObject)[i]]) 
            }
        }
       //   console.log(textAreaId);
       //   console.log((keyObject[Object.keys(keyObject)[0]]));
    
    
        }); 
    
    
    }
    
    
    });

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