function adduser()
{
    playerone=document.getElementById("player1name").value;
    playertwo=document.getElementById("player2name").value;
    localStorage.setItem("playerone",playerone);
    localStorage.setItem("playertwo",playertwo);
    window.location="game_page.html";
}
