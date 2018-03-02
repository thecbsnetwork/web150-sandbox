//1. function to toggle the class to "on" for the title text using getElementById

function changeClass() {
    this.classList.toggle("title");
    this.classList.toggle("on");
}
document.getElementById("title1").addEventListener('click', changeClass);

//2. display info about the show on double click using getElementById
function showTagline() {
    var playwright = document.getElementById("playwright1").style.cssText = "display:block;";
    var director = document.getElementById("director1").style.cssText = "display:block;";
    var tagline = document.getElementById("tagline1").style.cssText = "display:block;";
}
document.addEventListener('dblclick', showTagline, false);

//3&4. create function buyTix() so that when user clicks on button a link appears to tell them to purchase AND include a switch to say if there is a show on that day

function buyTix() {
    var n;
    var d = new Date().getDay();

    switch (d) {
    case 0:
        n = 'Today is Sunday. There is no show tonight, but you can still <a href="http://bit.ly/RowYrBoatTix">buy tickets!</a>';
        break;

    case 1:
        n = 'Today is Monday. There is no show tonight, but you can still <a href="http://bit.ly/RowYrBoatTix">buy tickets!</a>';
        break;

    case 2:
        n = 'Today is Tuesday. There is no show tonight, but you can still <a href="http://bit.ly/RowYrBoatTix">buy tickets!</a>';
        break;

    case 3:
        n = 'Today is Wednesday. There is no show tonight, but you can still <a href="http://bit.ly/RowYrBoatTix">buy tickets!</a>';
        break;

    case 4:
        n = 'Today is Thursday. There is a show tonight! You should <a href="http://bit.ly/RowYrBoatTix">buy tickets!</a>';
        break;

    case 5:
        n = 'Today is Friday. There is a show tonight! You should <a href="http://bit.ly/RowYrBoatTix">buy tickets!</a>';
        break;

    case 6:
        n = 'Today is Saturday. There is a show tonight! You should <a href="http://bit.ly/RowYrBoatTix">buy tickets!</a>';
        break;

    default:
        n = '<a href="http://bit.ly/RowYrBoatTix">Buy tickets!</a>';
        break;
    }
    document.getElementById("ticket1").innerHTML = n;
}