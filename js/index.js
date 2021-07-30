function handleClick() {

    var cgpa = 0;
    var sum = 0;
    var totCredits = 0;

    const credit = document.querySelectorAll('.credit');
    const gpa = document.querySelectorAll('.gpa');

    for (let i = 0; i < credit.length; i++) {

        if (credit[i].value && gpa[i].value) {
            const currentCredit = parseFloat(credit[i].value);
            const currentGpa = parseFloat(gpa[i].value);

            sum += currentCredit * currentGpa;
            totCredits += currentCredit;
        }

    }
    sum = sum.toFixed(2);
    totCredits = totCredits.toFixed(2);

    cgpa = sum / totCredits;
    alert("Your CGPA is " + cgpa.toFixed(2));
}