
// Getting input by presssing button
document.getElementById("submit-btn").addEventListener('click',function(){
    fullInput = document.getElementById('input-country').value;
    fullInput = fullInputValidation(fullInput);
    findcountry(fullInput);
})

// Getting input by pressing enter key
document.getElementById("input-country").addEventListener("keyup", function(event){
    if (event.key === 'Enter') {
        fullInput = document.getElementById('input-country').value;
        fullInput = fullInputValidation(fullInput);
        console.log(fullInput);
        findcountry(fullInput);
    }
})

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
            createCard();
            for(i=0;i<data.length;i++){
                $("#flag-container").empty();
                $("#flag-container").append('<img src="'+ data[i].flag+'">');
                $("#capital").empty();
                $("#capital").append(data[i].capital);
                $("#dialing-code").empty();
                $("#dialing-code").append("+" + data[i].callingCodes);
                $("#timezones").empty();
                $("#timezones").append(data[i].timezones[0]);
                $("#currencies").empty();
                $("#currencies").append(data[i].currencies[0].name +" (" + data[i].currencies[0].symbol + ")");
                $("#region").empty();
                $("#region").append(data[i].region);
                $("#amountOfLand").empty();
                $("#amountOfLand").append(data[i].area);
                
            }
        
    })
}

function createCard(){
    cardDiv = document.createElement('div');
    cardDiv.classList.add('card-container');
    cardDiv.id = 'card-container';
    $(".main-container").append(cardDiv);
    flagDiv = document.createElement('div');
    flagDiv.classList.add('flag-container');
    flagDiv.id = 'flag-container';
    $(".card-container").append(flagDiv);
    infoDiv = document.createElement('div');
    infoDiv.classList.add('info-container');
    infoDiv.id = 'info-container';
    infoDiv.innerHTML = "\
    <h3> Capital : "+"<div class = \"country-results\" id=\"capital\"></div>"+"</h3>\
    <h3> Dialing Code :"+"<div class = \"country-results\" id=\"dialing-code\"></div>"+"</h3>\
    <h3> TimeZone: "+"<div class = \"country-results\" id=\"timezones\"></div>"+"</h3>\
    <h3> Currencies: "+"<div class = \"country-results\" id=\"currencies\"></div>"+"</h3>\
    <h3> Region: "+"<div class = \"country-results\" id=\"region\"></div>"+"</h3>\
    <h3> Land space: "+"<div class = \"country-results\" id=\"amountOfLand\"></div>"+"</h3>\
    ";
    $(".card-container").append(infoDiv);
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





