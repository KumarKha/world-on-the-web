

// Function called when button is clicked 
function handleSubmit(){

    var question_One =document.quiz.question_one.value;
    var question_Two =document.quiz.question_two.value;
    var question_Three =document.quiz.question_three.value;
    var question_Four =document.quiz.question_four.value;
    var score = 0;


    // Checking  if answers are correct
    if (question_One == "tokyo"||question_One == "Tokyo"){
        score++
    }
    if (question_Two == "26_Million"){
        score ++
    }
    if (question_Three == "Egypt"){
        score ++
    }
    if (question_Four == "4"){
        score ++
    }



//Depending on the Score the button, message and alert will be changed and diplayed 
    //Perfect Score 
    if(score == 4){
        alert("Congratulations\nYou got them all correct")

        document.getElementById("message_to_user").innerHTML = "Perfect Score You got " + score +"/4 correct"
        document.getElementById('return_button').innerHTML ="Return Home"
        document.getElementById('return_button').onclick = () =>location.href ='./index.html'
        

    }
    // Score less than 4 
    else {

        alert("Sorry\nOne or More Incorrect")

        document.getElementById("message_to_user").innerHTML = "You got " + score +"/4 correct"
        document.getElementById('return_button').innerHTML ="Try Again"
        document.getElementById('return_button').onclick = () =>location.reload();

    }
    //Displaying message 
    document.getElementById('message').style.visibility ="hidden"
    document.getElementById('after_submit').style.visibility ="visible"
}