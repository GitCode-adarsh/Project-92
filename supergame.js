player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name+" : ";
document.getElementById("player2_name").innerHTML = player2_name+" : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = player1_name+"'s Turn to Question";
document.getElementById("player_answer").innerHTML = player2_name+"'s Turn to Answer";

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_word = "<h4> "+number1 + "X" + number2+"</h4>"; 
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row; 
    document.getElementById("number1").value = ""; 
    document.getElementById("number2").value = "";
}   
question_Turn = "player1";
answer_Turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    console.log(get_answer);
    if (get_answer == actual_answer) {
        if (answer_Turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_Turn == "player1") {
        question_Turn = "player2"
        document.getElementById("player_question").innerHTML = player2_name + "'s Turn to question";

    } else {
        question_Turn = "player1"
        document.getElementById("player_question").innerHTML = player1_name + "'s Turn to question";
    }
    if (answer_Turn == "player1") {
        answer_Turn = "player2"
        document.getElementById("player_answer").innerHTML = player2_name + "'s Turn to answer";

    } else {
        answer_Turn = "player1"
        document.getElementById("player_answer").innerHTML = player1_name + "'s Turn to answer";
    }
    document.getElementById("output").innerHTML = "";
}