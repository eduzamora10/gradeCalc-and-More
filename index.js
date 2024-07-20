var active = false;
var paused = false;
var start = false;
var reset = false;
var timerInterval = 0;
var remainingTime = 0;
var count = 0;
var audio;

function getGrade(){
    var letter;
    var grade = 0;
    var numerator = 0;
    var mult = 0;
    var weightSum = 0;
    for(var i = 1; i <= 8; i++){ // gets the sum for weight
        var weight = document.getElementById("weight" + i);
        var weightValue = parseFloat(weight.value);
        if(isNaN(weightValue)){
            weightValue = 0;
        }
        weightSum = weightSum + weightValue;
    }

    for(var i = 1; i <= 8; i++){
        var grade = document.getElementById("grade" + i);
        var gradeValue = parseFloat(grade.value);
        weight = document.getElementById("weight" + i);
        weightValue = parseFloat(weight.value);
        if(isNaN(gradeValue) && isNaN(weightValue)){
            gradeValue = 0;
            weightValue = 0;
        }
        mult = gradeValue * weightValue;
        numerator = numerator + mult;
    }

    grade = numerator / weightSum;
    grade = grade.toFixed(2);

    if(isNaN(grade)){
        document.getElementById("display-gradenum").value = 0;
        document.getElementById("display-gradeletter").value = "No Letter";
        //alert("Oops, you forgot something!");
        
    }
    else{
        if(grade >= 97){
            letter = 'A+'
        }
        else if (grade >= 93 && grade < 97){
            letter = 'A'
        }
        else if (grade >= 90 && grade < 93){
            letter = 'A-'
        }
        else if (grade >= 87 && grade < 90){
            letter = 'B+'
        }
        else if (grade >= 83 && grade < 87){
            letter = 'B'
        }
        else if (grade >= 80 && grade < 83){
            letter = 'B-'
        }
        else if (grade >= 77 && grade < 80){
            letter = 'C+'
        }
        else if (grade >= 73 && grade < 77){
            letter = 'C'
        }
        else if (grade >= 70 && grade < 73){
            letter = 'C-'
        }
        else if (grade >= 67 && grade < 70){
            letter = 'D+'
        }
        else if (grade >= 63 && grade < 67){
            letter = 'D'
        }
        else if (grade >= 60 && grade < 63){
            letter = 'D-'
        }
        else{
            letter = "F"
        }

        document.getElementById("display-gradenum").value = grade;
        document.getElementById("display-gradeletter").value = letter;
    }
    
    
}

document.getElementById("display-gpa").readOnly = true;
document.getElementById("display-credits").readOnly = true;



function getGPA1(){
    var gradePoints = [4.000, 4.000, 3.670, 3.330, 3.000, 2.670, 2.330, 2.000, 1.670, 1.330, 1.000, 0.670, 0.000];
    var gradePointLetter = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];
    
    var credits = 0;
    var gpa = 0;
    var x = document.getElementById("credits-so-far");
    var creditsSoFar = parseInt(x.value);
    var y = document.getElementById("culGPA");
    var culmulativeGPA = parseFloat(y.value);
    if(isNaN(creditsSoFar)){
        creditsSoFar = 0;
    }
    var creditsTotal = creditsSoFar;

    if(isNaN(culmulativeGPA)){
        culmulativeGPA = 0;
    }

    var numerator = culmulativeGPA * creditsSoFar;

    for(var i = 1; i <= 8; i++){ // gets the sum for weight
        var credits = document.getElementById("credits" + i);
        var creditsValue = parseInt(credits.value);
        if(isNaN(creditsValue)){
            creditsValue = 0;
        }
        
        creditsTotal = creditsTotal + creditsValue;
    }

    for(var i = 1; i <= 8; i++){
        var gradeLetter = document.getElementById("grade" + i);
        var gradeLetterValue = gradeLetter.value;
        credits = document.getElementById("credits" + i);
        creditsValue = parseInt(credits.value);
        if(isNaN(gradeLetterValue) && isNaN(creditsValue)){
            gradeLetterValue = 0;
            creditsValue = 0;

        }


        for(var j = 0; j < 13; j++){
            if(gradeLetterValue === gradePointLetter[j]){
                numerator = numerator + (gradePoints[j] * creditsValue);
                break;
            }
        }
    }
    numerator = numerator.toFixed(2);
    gpa = numerator / creditsTotal;
    gpa = gpa.toFixed(3);

    if(isNaN(gpa)){
        gpa = 0;
        document.getElementById("display-gpa").value = gpa.toFixed(3);
    }
    else{
        document.getElementById("display-gpa").value = gpa;
    }
    
    
    
    document.getElementById("display-credits").value = creditsTotal;
}

function getGPA2(){
    var gradePoints = [4.000, 3.000, 2.000, 1.000, 0.000];
    var gradePointLetter = ["A", "B", "C", "D", "F"];
    
    var credits = 0;
    var gpa = 0;
    var x = document.getElementById("credits-so-far");
    var creditsSoFar = parseInt(x.value);
    var y = document.getElementById("culGPA");
    var culmulativeGPA = parseFloat(y.value);
    if(isNaN(creditsSoFar)){
        creditsSoFar = 0;
    }
    var creditsTotal = creditsSoFar;

    if(isNaN(culmulativeGPA)){
        culmulativeGPA = 0;
    }

    var numerator = culmulativeGPA * creditsSoFar;

    for(var i = 1; i <= 8; i++){ // gets the sum for weight
        var credits = document.getElementById("credits" + i);
        var creditsValue = parseInt(credits.value);
        if(isNaN(creditsValue)){
            creditsValue = 0;
        }
        
        creditsTotal = creditsTotal + creditsValue;
    }

    for(var i = 1; i <= 8; i++){
        var gradeLetter = document.getElementById("grade" + i);
        var gradeLetterValue = gradeLetter.value;
        credits = document.getElementById("credits" + i);
        creditsValue = parseInt(credits.value);
        if(isNaN(gradeLetterValue) && isNaN(creditsValue)){
            gradeLetterValue = 0;
            creditsValue = 0;
        }

        for(var j = 0; j < 5; j++){
            if(gradeLetterValue === gradePointLetter[j]){
                numerator = numerator + (gradePoints[j] * creditsValue);
                break;
            }
        }
    }
    numerator = numerator.toFixed(2);
    gpa = numerator / creditsTotal;
    gpa = gpa.toFixed(3);

    if(isNaN(gpa)){
        gpa = 0;
        document.getElementById("display-gpa").value = gpa.toFixed(3);
    }
    else{
        document.getElementById("display-gpa").value = gpa;
    }
    document.getElementById("display-credits").value = creditsTotal;
}




function startTime(){
    
    if(!start){
        $("h1").text("Reset to Restart Timer");
        reset = false;
        paused = false;
        var hours = document.getElementById("hours");
        var hoursVal = parseInt(hours.value);
        var mins = document.getElementById("mins");
        var minsVal = parseInt(mins.value);
        var secs = document.getElementById("secs");
        var secsVal = parseInt(secs.value);
        if(isNaN(hoursVal)){
            hoursVal = 0;
        }
        if(isNaN(minsVal)){
            minsVal = 0;
        }
        if(isNaN(secsVal)){
            secsVal = 0;
        }

        if(hoursVal <= 0 && minsVal <= 0 && secsVal <= 0){
            event.preventDefault();
            $("h1").text("Time's Up!")
            hoursVal = 0;
            minsVal = 0;
            secsVal = 0;
            animateGameOver();
        }

        var totalSecs = secsVal + (hoursVal * 3600) + (minsVal * 60);
        start = true;
        //alert(totalSecs);
        startCountdown(totalSecs);
    }
    else{
        paused = !paused; // Toggle the pause state
        if(paused){
            $("h1").text("Paused");
           // document.body.classList.remove('body');
            document.body.classList.add('paused-screen');
            //$("body").css("background-color", "#31304D");
        }
        else{
            $("h1").text("Reset to Restart Timer");
            document.body.classList.remove('paused-screen');
            //$("body").css("background-color", "#4a6b81");
        }
    }
    
    
}

function startCountdown(totalTime) {

    
    function updateTimer() {
        let hours = Math.floor(totalTime / 3600);
        let minutes = Math.floor((totalTime % 3600) / 60);
        let seconds = totalTime % 60;

        // Add leading zeros if needed
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        document.getElementById("hours").value = hours;
        document.getElementById("mins").value = minutes;
        document.getElementById("secs").value = seconds;

        // Decrement the total time
        if(!paused){
            totalTime--;
        }
        else if(reset){
            document.getElementById("hours").value = '';
            document.getElementById("mins").value = '';
            document.getElementById("secs").value = '';
            //alert("helo");

            clearInterval(timerInterval);
            paused = false;
            start = false;
        }
        

        // If the countdown is over, stop the timer
        if (totalTime < 0) {
            //alert("times up");
            clearInterval(timerInterval);
            $("h1").text("Time's Up!");
            paused = false;
            start = false;
            reset = false;
            totalTime = 0;
            animateGameOver();
        }
    }

    // Update the timer display immediately
    updateTimer();

    // Set interval to update the timer every second
    let timerInterval = setInterval(updateTimer, 1000);
}


function restart(){
    $("h1").text("Select Duration of Timer");
    document.body.classList.remove('paused-screen');
    document.body.classList.remove('game-over');
    document.body.classList.add('body');
    clearInterval(timerInterval);
    paused = true;
    reset = true;
    start = false;
    active = false;
    
    
 
    audio.pause();
    audio.currentTime = 0;

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    document.getElementById("hours").value = '';
    document.getElementById("mins").value = '';
    document.getElementById("secs").value = '';

    // Add leading zeros if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
}

function animateGameOver(){
    // for(var i = 0; i < 10; i++){
    //     $("body").addClass("game-over");
    //     setTimeout(function(){
    //         $("body").removeClass("game-over");
    //     }, 100)
    // }
    playAlarm();
    var flashes = 100000;
    
    active = true;

    function flash(){

        if(!active){
            $("body").toggleClass("body");
            return;
        }
        
        $("body").toggleClass("game-over");
        count++;
        if(count < flashes){
            setTimeout(flash, 500);
        }
        else{
            $("body").remove("game-over");
        }
    }

    flash();
    
    
}

function playAlarm(){
    audio = new Audio("../assests/alarm.mp3");
    audio.play();
}