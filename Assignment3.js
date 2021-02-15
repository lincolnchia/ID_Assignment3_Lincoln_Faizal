// Getting input by presssing button
document.getElementById("submit-btn").addEventListener('click',function(){
    fullInput = document.getElementById('input-country').value;
    fullInput = fullInputValidation(fullInput);
    findcountries(fullInput);

})

// Getting input by pressing enter key
document.getElementById("input-country").addEventListener("keyup", function(event){
    if (event.key === 'Enter') {
        fullInput = document.getElementById('input-country').value;
        fullInput = fullInputValidation(fullInput);
        findcountries(fullInput);
    }
})

function findcountries(fullInput){
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res=>res.json())
    .then(data=>{
        for(i=0;i<data.length;i++){
            if(fullInput == data[i].name){
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
function fullInputValidation(fullInput){
    fullInput = fullInput.toLowerCase();
    fullInput = fullInput.charAt(0).toUpperCase() + fullInput.slice(1);
    return fullInput;
}





