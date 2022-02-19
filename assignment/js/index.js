function welcome(x)
{   var email = document.getElementById("email").value;
    const name = email.split('@')[0];
    console.log(name);
    var day = new Date();
    var hr = day.getHours();
    if (hr >= 0 && hr < 12) {
        alert("Good Morning!"+name);
    } else if (hr >= 12 && hr <= 17) {
        document.write("Good Afternoon!"+name);
    } else {
        alert("Good Evening!"+name);
    }
    
}

