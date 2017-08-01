var pokeMon = ["Charizard", "Blastoise", "Venusaur", "Pikachu", "Dragonite"];
var searchQuery = $("#userInput").val();

var buttonsArray = [];


//query giphy
function displayGIFS () {
    $("#display-gifs").empty();
    var  poke = $(this).attr("value");
    console.log(poke);
    poke = $(this).attr("value");
    console.log(poke);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + poke + "&limit=10&api_key=dc6zaTOxFJmzC";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){
        console.log(response);
      
        for (i = 0; i < 10; i++) {
            var gifURL = response.data[i].images.fixed_height_small.url;  
            console.log(gifURL);
            var stillURL = response.data[i].images.fixed_height_small_still.url; 
            var gifRating = response.data[i].rating;
            console.log(gifRating);
            $("#display-gifs").append("<div class ='newDiv'><img class='newGIF' alt='"+stillURL+"' src='"+gifURL+"'/><h3 class='gifRate'>Rating: "+gifRating+"</h3></div>" );

          

        }

      });
}



//Search Button

    //Push user input to array
    //Call button function
var checkButtons;

function buttonMaker() {
    for (i = 0; i < pokeMon.length; i++) {  

       
        checkButtons = buttonsArray.indexOf(pokeMon[i]);

        if (checkButtons == -1) {
            $("#display-buttons").append("<button class='newButton' type='button' value ='"+ pokeMon[i] +"'>" + pokeMon[i] + "  "+ "<img class='newPoke' src='assets/images/pokeiconsmall.png'/></button>");
            buttonsArray.push(pokeMon[i]);
        }
    }};

buttonMaker();

$("#subButton").on("click", function () {
   
    searchQuery = $("#userInput").val();

    if (searchQuery != "") {
        pokeMon.push($("#userInput").val());
        buttonMaker();
    }

    $("#userInput").val("");

});

function pausePlay () {
    var static = $(this).attr("alt");
    console.log(static);
    var anim = $(this).attr("src")
    console.log(anim);
    if ($(this).attr("src") == static) {
        $(this).attr("alt", static);
        $(this).attr("src", anim);
    }

    if($(this).attr("src") == anim) {
        $(this).attr("alt", anim);
        $(this).attr("src", static);
    }
}

$(document).on("click", ".newButton", displayGIFS);
$(document).on("click", ".newGIF", pausePlay);


