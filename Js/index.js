var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Getting input by presssing button


function findcountry(input){
    $(".main-container").empty();
    fetch("https://restcountries.eu/rest/v2/name/"+ input)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
            if (data.message ==  "Not Found"){ 
                $("#main-container").append("<p style = 'font-size:30px; margin:auto; text-align:center; color:#d8a0a6;'>This country cannot be found!</p>");
                return;
            }
            for(i=0;i<data.length;i++){
                createCard(i);
                $("#flag-container"+i).empty();
                $("#flag-container"+i).append('<img src="'+ data[i].flag+'">');
                $("#capital"+i).empty();
                $("#capital"+i).append(data[i].capital);
                $("#dialing-code"+i).empty();
                $("#dialing-code"+i).append("+" + data[i].callingCodes);
                $("#timezones"+i).empty();
                $("#timezones"+i).append(data[i].timezones[0]);
                $("#currencies"+i).empty();
                $("#currencies"+i).append(data[i].currencies[0].name +" (" + data[i].currencies[0].symbol + ")");
                $("#region"+i).empty();
                $("#region"+i).append(data[i].region);
                $("#amountOfLand"+i).empty();
                $("#amountOfLand"+i).append(data[i].area);
                
            }
        
    })
}

function createCard(i){
    cardDiv = document.createElement('div');
    cardDiv.classList.add('card-container');
    cardDiv.id = 'card-container'+ i;
    $("#main-container").append(cardDiv);;
    flagDiv = document.createElement('div');
    flagDiv.classList.add('flag-container');
    flagDiv.id = 'flag-container'+ i;
    $("#card-container"+ i).append(flagDiv);
    infoDiv = document.createElement('div');
    infoDiv.classList.add('info-container');
    infoDiv.id = 'info-container'+ i;
    infoDiv.innerHTML = "\
    <h3> Capital : "+"<div class = 'country-results' id='capital"+i+"'></div>"+"</h3>\
    <h3> Dialing Code :"+"<div class = 'country-results' id='dialing-code"+i+"'></div>"+"</h3>\
    <h3> TimeZone: "+"<div class = 'country-results' id='timezones"+i+"'></div>"+"</h3>\
    <h3> Currencies: "+"<div class = 'country-results' id='currencies"+i+"'></div>"+"</h3>\
    <h3> Region: "+"<div class = 'country-results' id='region"+i+"'></div>"+"</h3>\
    <h3> Land space: "+"<div class = 'country-results' id='amountOfLand"+i+"'></div>"+" km²"+"</h3>\
    ";
    $("#card-container" + i).append(infoDiv);
}

// Making input Capitalized and lowercased properly
function fullInputValidation(Input){
    if (Input.split(" ").length > 1) {
        for(i=0;i<Input.split(" ").length;i++)
        var [a, b] = Input.split(" ");
        a = a.toLowerCase();
        a = a.charAt(0).toUpperCase() + a.slice(1);
        b = b.toLowerCase();
        b = b.charAt(0).toUpperCase() + b.slice(1);
        return a +" "+ b;
    }
    
    else{
        Input = Input.toLowerCase();
        Input = Input.charAt(0).toUpperCase() + Input.slice(1);
        return Input; 
    }
}

function userValidation(){
    var countryId = localStorage.getItem("countriesId");
    return countryId;
}

function makingquestion1(countryId){
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
            for(i=0;i<data.length;i++){
                if(data[i].alpha2Code ==  countryId){
                    $(".question-box").empty();
                    $(".question-box").append("<div class='question-name'>"+"Q1) What is the Capitial name of "+data[i].name+"</div>");
                    $(".question-box").append("<img class='question-flag' src='"+data[i].flag+" 'alt='Country Flag' >");
                    $(".question-box").append("<input id='question-input' class='question-input' type='text' placeholder='Enter Answer...' required>");
                    $(".question-box").append("<button id= 'user-submit-btn' class='user-submit-btn'>Submit</button>");
                }
            }
        
    })
    document.getElementById("user-submit-btn").addEventListener('click',function(){
        input = document.getElementById('user-submit-btn').value;
        console.log("hi");
        checkAnswer(input);
    })
    
}


function checkAnswer(input,countryId){
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res=>res.json())
    .then(data=>{
            for(i=0;i<data.length;i++){
                if(data[i].alpha2Code ==  countryId){
                    if(input == data[i].capital){
                        console.log("hi")
                    }
                    else{
                        console.log("hi")
                    }
                }
            }
        
    })
}