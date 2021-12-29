window.onload = function () {
  colorCode();
  nineAM();
  tenAM();
  elevenAM();
  twelvePM();
  onePM();
  twoPM();
  threePM();
  fourPM();
  fivePM();
};

//CURRENT DATE AND TIME//
var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

//HOURS//
var now = new Date().getHours();
// BLOCK COLOR CHANGE ON THE HOUR//
function colorCode() {
  if (now > 9) {
    $("#comment9am").addClass("past");
  } else if (now >= 9 && now < 10) {
    $("#comment9am").addClass("present");
  } else if (now < 9) {
    $("#comment9am").addClass("future");
  }
  if (now > 10) {
    $("#comment10am").addClass("past");
  } else if (now >= 10 && now < 11) {
    $("#comment10am").addClass("present");
  } else if (now < 10) {
    $("#comment10am").addClass("future");
  }
  if (now > 11) {
    $("#comment11am").addClass("past");
  } else if (now >= 11 && now < 12) {
    $("#comment11am").addClass("present");
  } else if (now < 11) {
    $("#comment11am").addClass("future");
  }
  if (now > 12) {
    $("#comment12pm").addClass("past");
  } else if (now >= 12 && now < 13) {
    $("#comment12pm").addClass("present");
  } else if (now < 12) {
    $("#comment12pm").addClass("future");
  }
  if (now > 13) {
    $("#comment1pm").addClass("past");
  } else if (now >= 13 && now < 14) {
    $("#comment1pm").addClass("present");
  } else if (now < 13) {
    $("#comment1pm").addClass("future");
  }
  if (now > 14) {
    $("#comment2pm").addClass("past");
  } else if (now >= 14 && now < 15) {
    $("#comment2pm").addClass("present");
  } else if (now < 14) {
    $("#comment2pm").addClass("future");
  }
  if (now > 15) {
    $("#comment3pm").addClass("past");
  } else if (now >= 15 && now < 16) {
    $("#comment3pm").addClass("present");
  } else if (now < 15) {
    $("#comment3pm").addClass("future");
  }
  if (now > 16) {
    $("#comment4pm").addClass("past");
  } else if (now >= 16 && now < 17) {
    $("#comment4pm").addClass("present");
  } else if (now < 16) {
    $("#comment4pm").addClass("future");
  }
  if (now > 17) {
    $("#comment5pm").addClass("past");
  } else if (now >= 17 && now < 18) {
    $("#comment5pm").addClass("present");
  } else if (now < 17) {
    $("#comment5pm").addClass("future");
  }
}

// Function per hour: Save, Text, Refresh
function nineAM() {
  var input_textarea = document.querySelector("#comment9am");
  var output_div = document.querySelector("#comment9am");
  var save_button = document.querySelector("#button9am");

  save_button.addEventListener("click", updateOutput);

  output_div.textContent = localStorage.getItem("content");
  input_textarea.value = localStorage.getItem("content");

  function updateOutput() {
    localStorage.setItem("content", input_textarea.value);

    output_div.textContent = input_textarea.value;
  }


//   Time functions

  function nineAM() {
    var input_textarea = document.querySelector("#comment9am");
    var output_div = document.querySelector("#comment9am");
    var save_button = document.querySelector("#button9am");
  
    save_button.addEventListener("click", updateOutput);
  
    output_div.textContent = localStorage.getItem("content");
    input_textarea.value = localStorage.getItem("content");
  
    function updateOutput() {
      localStorage.setItem("content", input_textarea.value);
  
      output_div.textContent = input_textarea.value;
    }
}

    function tenAM() {
        var input_textarea2 = document.querySelector("#comment10am");
        var output_div2 = document.querySelector("#comment10am");
        var save_button2 = document.querySelector("#button10am");
      
        save_button2.addEventListener("click", updateOutput2);
      
        output_div2.textContent = localStorage.getItem("content2");
        input_textarea2.value = localStorage.getItem("content2");
      
        function updateOutput2() {
          localStorage.setItem("content2", input_textarea2.value);
      
          output_div2.textContent = input_textarea2.value;
        }
    }

        function elevenAM() {
            var input_textarea3 = document.querySelector("#comment11am");
            var output_div3 = document.querySelector("#comment11am");
            var save_button3 = document.querySelector("#button11am");
          
            save_button3.addEventListener("click", updateOutput3);
          
            output_div3.textContent = localStorage.getItem("content3");
            input_textarea3.value = localStorage.getItem("content3");
          
            function updateOutput3() {
              localStorage.setItem("content3", input_textarea3.value);
          
              output_div3.textContent = input_textarea3.value;
            }
          }

          function twelevePM() {
            var input_textarea4 = document.querySelector("#comment12pm");
            var output_div4 = document.querySelector("#comment12pm");
            var save_button4 = document.querySelector("#button12pm");
          
            save_button4.addEventListener("click", updateOutput4);
          
            output_div4.textContent = localStorage.getItem("content4");
            input_textarea4.value = localStorage.getItem("content4");
          
            function updateOutput4() {
              localStorage.setItem("content4", input_textarea4.value);
          
              output_div4.textContent = input_textarea4.value;
            }
          }
  
          
          function onePM() {
            var input_textarea = document.querySelector("#comment9am");
            var output_div = document.querySelector("#comment9am");
            var save_button = document.querySelector("#button9am");
          
            save_button.addEventListener("click", updateOutput);
          
            output_div.textContent = localStorage.getItem("content");
            input_textarea.value = localStorage.getItem("content");
          
            function updateOutput() {
              localStorage.setItem("content", input_textarea.value);
          
              output_div.textContent = input_textarea.value;
            }
          }
          
          
          function twoPM() {
            var input_textarea = document.querySelector("#comment9am");
            var output_div = document.querySelector("#comment9am");
            var save_button = document.querySelector("#button9am");
          
            save_button.addEventListener("click", updateOutput);
          
            output_div.textContent = localStorage.getItem("content");
            input_textarea.value = localStorage.getItem("content");
          
            function updateOutput() {
              localStorage.setItem("content", input_textarea.value);
          
              output_div.textContent = input_textarea.value;
            }
          }
  
          
          function threePM() {
            var input_textarea = document.querySelector("#comment9am");
            var output_div = document.querySelector("#comment9am");
            var save_button = document.querySelector("#button9am");
          
            save_button.addEventListener("click", updateOutput);
          
            output_div.textContent = localStorage.getItem("content");
            input_textarea.value = localStorage.getItem("content");
          
            function updateOutput() {
              localStorage.setItem("content", input_textarea.value);
          
              output_div.textContent = input_textarea.value;
            }
          }
  
          
          function fourPM() {
            var input_textarea = document.querySelector("#comment9am");
            var output_div = document.querySelector("#comment9am");
            var save_button = document.querySelector("#button9am");
          
            save_button.addEventListener("click", updateOutput);
          
            output_div.textContent = localStorage.getItem("content");
            input_textarea.value = localStorage.getItem("content");
          
            function updateOutput() {
              localStorage.setItem("content", input_textarea.value);
          
              output_div.textContent = input_textarea.value;
            }
          }
  
          function fivePM() {
            var input_textarea = document.querySelector("#comment9am");
            var output_div = document.querySelector("#comment9am");
            var save_button = document.querySelector("#button9am");
          
            save_button.addEventListener("click", updateOutput);
          
            output_div.textContent = localStorage.getItem("content");
            input_textarea.value = localStorage.getItem("content");
          
            function updateOutput() {
              localStorage.setItem("content", input_textarea.value);
          
              output_div.textContent = input_textarea.value;
            }
          }
          
    

      

