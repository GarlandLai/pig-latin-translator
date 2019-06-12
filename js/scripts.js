// sets up the document as ready
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O','U','y','Y']
    var consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'X', 'W','Y','Z','b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'w', 'y', 'z']
    var userInput = ($("#input1").val());
    var qu = ['qu', 'QU', 'Qu']
    var searchQU = "qu"
    var indexOfFirst = userInput.indexOf(searchQU);
    console.log(indexOfFirst)
    //gets us the index of "Q"


    for (var index = 0; index < userInput.length; index += 1)

        if (userInput[0] === 'y'|| userInput[0] === 'Y') {
          var vowelSlice = userInput.slice(1)
          $("#output").text(vowelSlice + userInput[0] + "ay");
        }
        else if (vowels.includes(userInput[0])) {
        $("#output").text(userInput + "way");
        }

        else if (qu.includes(userInput[""])) {
          var searchQU = "qu"
          var indexOfFirst = userInput.indexOf(searchQU);
          // $("#output").text(userInput.push(word) + "ay")
        }

        else if (consonants.includes(userInput[0]) && consonants.includes(userInput[1])) {
          var consonantSlice = userInput.slice(2)
          $("#output").text(consonantSlice + userInput[0] + userInput[1] + "ay");
        }
        else if (consonants.includes(userInput[0])) {
        var consonantSlice = userInput.slice(1)
        $("#output").text(consonantSlice + userInput[0] + "ay");
      }

          else {
         $("#output").text("sorry dawg");
        }

        // // else if (
        // //   for (var index = 0; index <= ; index +=1)
        // // )
        //
        //
        // (consonants.includes(userInput[0])) {
        // var multipleCons = userInput.slice(vowels)
        // $("#output").text(multipleCons + userInput[0] + "ay");
        // }
      // };
    console.log(userInput)
  });
  });







// $(document).ready(function() {
//     $(".formOne").submit(function(event) {
//       var vowels = ['a', 'e', 'i', 'o', 'u'];
//       var userInput = $("#input1").val()).split("");
//       // var userInput = ($("#input1").val()).split("");
//       console.log(userInput);
//       event.preventDefault();
//     });
//   });


      // if (userInput[0] === "a" || userInput[0] === "e" || userInput[0] === "i" || userInput[0] === "o" || userInput[0] === "u") {
