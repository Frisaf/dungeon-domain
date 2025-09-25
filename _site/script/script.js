var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display  = "block"
        }
    })
}

function openNav() {
    document.getElementById("sidePanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidePanel").style.width = "0";
}

var dropdown = document.getElementsByClassName("sidePanelDropdownBtn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("activeDropdown");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block"
        }
    });
}

var attempt = 4;

function validate() {
    var password = document.getElementById("password").value;
    console.log("Current URL: ", window.location.href);
    if (password === "CoolAndBest.123") {
        alert("Login success");
        console.log("Redirecting to secrets.html");
        window.location.href = "secrets.html";
        return false;
    } else {
        attempt--;
        alert("Wrong password. You have " + attempt + " attempts left");
        if (attempt === 0) {
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
        }
        return false
    }
}