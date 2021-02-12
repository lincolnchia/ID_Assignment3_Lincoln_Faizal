//     const searchdata = document.getElementById('input-country').value
//     convertedData = searchdata.replace(/\s/g,"%20")
    // fetch("https://restcountries.eu/rest/v2/name/"+searchdata+"fullText=true")
document.getElementById("submit-btn").addEventListener('click',function(){
    findcountries();
})

function findcountries(){
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res=>res.json())
    .then(data=>{
        for(i=0;i<data.length;i++){
            if(document.getElementById('input-country').value == data[i].name){
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




