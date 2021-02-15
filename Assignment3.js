// Getting input by presssing button
document.getElementById("submit-btn").addEventListener('click',function(){
    fullInput = document.getElementById('input-country').value;
    fullInput = fullInputValidation(input);
    findcountries(input);

})



function findcountries(input){
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res=>res.json())
    .then(data=>{
        for(i=0;i<data.length;i++){
            if(input == data[i].name){
                $("#flag-container").empty()
                $("#flag-container").append('<img src="'+ data[i].flag+'">')
                $("#capital").empty();
                $("#capital").append(data[i].capital);
                $("#dialing-code").empty();
                $("#dialing-code").append("+" + data[i].callingCodes);
                $("#timezones").empty();
                $("#timezones").append(data[i].timezones);
                $("#currencies").empty();
                console.log(data);
                $("#currencies").append(data[i].currencies[0].name +" (" + data[i].currencies[0].symbol + ")");
                $("#region").empty();
                $("#region").append(data[i].region);
                $("#amountOfLand").empty();
                $("#amountOfLand").append(data[i].area);
            }
        }
    })
    
}

// Making input Capitalized and lowercased properly
function inputValidation(input){
    input = input.toLowerCase();
    input = input.charAt(0).toUpperCase() + input.slice(1);
    return input;
}





