var now = moment();
var saved = {};

function init() {
    if(JSON.parse(localStorage.getItem("scheduleSave") !== null)){
        saved = JSON.parse(localStorage.getItem("scheduleSave"));
    };

    for (var i = 0; i < Object.keys(saved).length; i++){
        $("ul[data-time="+Object.keys(saved)[i]+"]").children(".description").val(saved[Object.keys(saved)[i]]);
    };

    setInterval(function(){
        
    }