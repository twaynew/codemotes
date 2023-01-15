function myFunction() {
    var time = new Date().getDate();

    if (time % 2 != 0) {
        greeting = "Odd Day";
    } else  {
        greeting = "Even Day";
    }
    document.getElementById("demo").innerHTML = greeting;
}

myFunction();
