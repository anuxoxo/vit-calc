function handleClick() {

    var cgpa = 0;
    var sum = 0;
    var totCredits = 0;

    const credit = document.querySelectorAll('.credit');
    const gpa = document.querySelectorAll('.gpa');

    for (var i = 0; i < credit.length; i++) {

        // ----- if both fields are not null -----

        if (credit[i].value && gpa[i].value) {

            const currentCredit = parseFloat(credit[i].value);
            const currentGpa = parseFloat(gpa[i].value);

            sum += currentCredit * currentGpa;
            totCredits += currentCredit;
        }

        // ----- if one of the two fields is null -----

        else if (credit[i].value || gpa[i].value) {
            alert("Please enter valid credit & gpa values.");
            break;
        }
    }

    if (i === credit.length) {

        sum = sum.toFixed(2);
        totCredits = totCredits.toFixed(2);

        cgpa = sum / totCredits;

        if (cgpa)
            // alert("Your CGPA is " + cgpa.toFixed(2));
            overlayOn(cgpa);
        else
            alert("Please enter valid credit & gpa values.");

    }
}

document.addEventListener('keydown', (event) => {
    if (event.code == 'Enter' && !event.shiftKey) {
        event.preventDefault()
        document.querySelector("#submit-btn").click();
    }
});

// ---------------- Handle overlays ------------------

function overlayOn(cgpa) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay-text").innerHTML = `<h3>Your CGPA is ${cgpa.toFixed(2)}</h3>`;
}

function overlayOff() {
    document.getElementById("overlay").style.display = "none";
}