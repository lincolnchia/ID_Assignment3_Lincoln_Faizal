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
                    $(".question-name").empty();
                    $(".question-name").append("Q1) What is the Capitial name of "+data[i].name);
                    $(".flag-container").empty();
                    $(".flag-container").append("<img class='question-flag' src='"+data[i].flag+" 'alt='Country Flag' >");
                }
            }
        
    })
}

document.getElementById("user-submit-btn").addEventListener('click',function(){
    input = document.getElementById('question-input').value;
    checkAnswer1(input);
})



function checkAnswer1(input,countryId){
    countryId = localStorage.getItem("countriesId");
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res=>res.json())
    .then(data=>{
            for(i=0;i<data.length;i++){
                if(data[i].alpha2Code ==  countryId){
                    if(input == data[i].capital){
                        correctPage();
                    }
                    else{
                        wrongPage();
                    }
                }
            }
        
    })
}
function correctPage(){
    $(".question-name").empty();
    $(".question-name").append("You got it correct! :)");
    $(".flag-container").empty();
    $(".flag-container").append("<lottie-player src='https://assets2.lottiefiles.com/packages/lf20_56Jc5o.json'  background='#83E27E'  speed='1'  style='width:100% ; height: 100%;' autoplay></lottie-player>");
    $(".question-input").hide();
    $(".user-submit-btn").hide();
    $(".question-box").append("<button class='user-submit-btn2' id='user-submit-btn2'>continue</button>");
    document.getElementById("user-submit-btn2").addEventListener('click',function(){
        scorepage();
    });
}
function scorepage(){
    $(".user-submit-btn2").hide();
    $(".question-name").empty();
    $(".question-name").append("Input your name:");
    $(".flag-container").empty();
    $(".flag-container").append("<lottie-player src='https://assets4.lottiefiles.com/packages/lf20_7z6eZJ.json'  background='transparent'  speed='1'  style='width:100%; height: 100%;'  loop  autoplay></lottie-player>");
    $(".question-box").append("<input id='question-input2' class='question-input2' type='text' placeholder='Enter Your Name...' required>");
    $(".question-box").append("<button class='user-submit-btn3' id='user-submit-btn2' onclick='location.reload();'>continue</button>"); 
}

function wrongPage(){
    $(".question-name").empty();
    $(".question-name").append("You got it wrong! :(");
    $(".flag-container").empty();
    $(".flag-container").append("<lottie-player src='https://assets8.lottiefiles.com/packages/lf20_2frpohrv.json'  background='transparent'  speed='1'  style='width:100% ; height: 100%;' autoplay></lottie-player>");
    $(".question-input").hide();
    $(".user-submit-btn").hide();
    $(".question-box").append("<button class='user-submit-btn2' id='user-submit-btn2'>continue</button>");
    document.getElementById("user-submit-btn2").addEventListener('click',function(){
        scorepage();
    });
}
    
function contactFunction() {
    var elmnt = document.getElementById("leftright");
    elmnt.scrollIntoView();
}