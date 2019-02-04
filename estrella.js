var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

var star = document.getElementById('star1');
var star = document.getElementById('star2');
var star = document.getElementById('star3');
var star = document.getElementById('star4');
var star = document.getElementById('star5');

output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
    stars(this.value);
}

function stars(starValue) {
    if (starValue <= 100) {
        star1.className = "star on";
        star2.className = "star on";
        star3.className = "star on";
        star4.className = "star on";
        star5.className = "star on";
    }

    if (starValue <= 90) {
        star5.className = "star half";
    }

    if (starValue <= 80) {
        star5.className = "star";
    }

    if (starValue <= 70) {
        star4.className = "star half";
    }

    if (starValue <= 60) {
        star4.className = "star";
    }

    if (starValue <= 50) {
        star3.className = "star half";
    }

    if (starValue <= 40) {
        star3.className = "star";
    }

    if (starValue <= 30) {
        star2.className = "star half";
    }

    if (starValue <= 20) {
        star2.className = "star";
    }

    if (starValue <= 10) {
        star1.className = "star half";
    }

    if (starValue == 1) {
        star1.className = "star";
    }
}