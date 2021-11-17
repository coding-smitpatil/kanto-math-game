player1=localStorage.getItem("playerone");
player2=localStorage.getItem("playertwo");
player1score=0;
player2score=0;
document.getElementById("playeronename").innerHTML=player1+" : ";
document.getElementById("playertwoname").innerHTML=player2+" : ";
document.getElementById("playeronescore").innerHTML=player1score;
document.getElementById("playertwoscore").innerHTML=player2score;
document.getElementById("playerquestion").innerHTML="Question Turn - " + player1;
document.getElementById("playeranswer").innerHTML="answer Turn - " + player2;
function sent(){
    Number1=document.getElementById("mathnumber1").value;
    Number2=document.getElementById("mathnumber2").value;
    actual_answer = parseInt(Number1) * parseInt(Number2);
    question_number = "<h4>" + Number1 + " X "+ Number2 +"</h4>";
     input_box = "<br>Answer : <input type='text' id='input_check_box'>";
      check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
       row = question_number + input_box + check_button ;

document.getElementById("output").innerHTML = row;
document.getElementById("mathnumber1").value = "";
document.getElementById("mathnumber2").value = "";
}

questionturn="player1";
answerturn="player2";

function check(){
answer=document.getElementById("input_check_box").value;

if(answer==actual_answer)
{if(answerturn=="player1")
{
    player1score=player1score+1;
    document.getElementById("playeronescore").innerHTML=player1score;
}
else{
    player2score=player2score+1;
    document.getElementById("playertwoscore").innerHTML=player2score; 
}
}
if(answerturn=="player1")
{
   answerturn="player2";
    document.getElementById("playeranswer").innerHTML="Answer Turn - " + player2;
}
else{
    answerturn="player1";
    document.getElementById("playeranswer").innerHTML="Answer Turn - " + player1;
}
if(questionturn=="player1")
{
   questionturn="player2";
    document.getElementById("playerquestion").innerHTML="question Turn - " + player2;
}
else{
    questionturn="player1";
    document.getElementById("playerquestion").innerHTML="question Turn - " + player1;
}

document.getElementById("output").innerHTML = "";
}

