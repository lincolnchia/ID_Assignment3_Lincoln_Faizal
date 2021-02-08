// document.getElementById('submit_button').addEventListener('click', function(){
//     const searchdata = document.getElementById('input-country').value
//     convertedData = searchdata.replace(/\s/g,"%20")
    // fetch("https://restcountries.eu/rest/v2/name/"+searchdata+"fullText=true")
    fetch("https://restcountries.eu/rest/v2/all")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        initalize(data)
    })
    .catch(function(err){
        console.log("Error: " + err)
    })

    function initalize(countrydata){
        console.log(countrydata)
    }
