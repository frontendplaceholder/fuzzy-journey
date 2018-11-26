var currentDate = new Date();
var manad = currentDate.getMonth();
manad += 1;
document.querySelector("#currentDate").innerHTML = currentDate.getDate() + "." + manad + "." + currentDate.getFullYear();
var i = 0;

function stringHandler() {
    var firstName = document.loanDetails.firstName.value;
    var lastName = document.loanDetails.lastName.value;
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    console.log(firstName + " " + lastName)
    document.querySelector("#namnen").innerHTML = lastName + " " + firstName;
}

function numberConverter() {
    var initialNumber = document.numberSystem.inputNumber.value;
    console.log(initialNumber);
    var initialNumber = initialNumber.replace(',', '.');
    console.log(initialNumber);
    if (isNaN(initialNumber) == false) {
        /*Här e functionen*/
        document.querySelector("#roten").innerHTML = Math.sqrt(initialNumber).toFixed(2);
        document.querySelector("#kvadraten").innerHTML = (initialNumber * initialNumber).toFixed(2);
        document.querySelector("#inversa").innerHTML = (1 / initialNumber).toFixed(5);
        var roundedDown = Math.floor(initialNumber);
        document.querySelector("#integer").innerHTML = roundedDown;
        document.querySelector("#binart").innerHTML = roundedDown.toString(2);
        document.querySelector("#oktal").innerHTML = roundedDown.toString(8);
        document.querySelector("#hexadec").innerHTML = roundedDown.toString(16);
    }
    else {
        alert("Inte ett nummer ;)")
    }
}

function loanKalkylerare() {
    var loanAmount = document.loanCalculator.levelOfDesperation.value;
    var loanRent = document.loanCalculator.loanRent.value / 12 / 100;
    var loanLengthMonths = document.loanCalculator.loanDuration.value * 12;
    var loanPayment = loanAmount * ((loanRent * Math.pow((1 + loanRent), loanLengthMonths)) / (Math.pow((1 + loanRent), loanLengthMonths) - 1));
    var loanPaymentTotal = loanPayment * loanLengthMonths;
    document.querySelector("#payDisMuch").innerHTML = "Du betalar " + loanPayment.toFixed(2) + " €/månad" + "<br> och totalt " + loanPaymentTotal.toFixed(2) + " €";
}

function changeBg() {
    var rgbValue = document.bgChange.rgbValue.value;

    if (rgbValue.startsWith("#")) {
        document.querySelector(".bodyLeft").style.backgroundColor = rgbValue;
        document.querySelector(".bodyRight").style.backgroundColor = rgbValue;
        convertToDec(rgbValue.slice(1));
    }
    else {
        convertToHex(rgbValue);
        document.querySelector(".bodyLeft").style.backgroundColor = "rgb(" + rgbValue + ",0.6)";
        document.querySelector(".bodyRight").style.backgroundColor = "rgb(" + rgbValue + ",0.6)";
    }
}

function convertToDec(hexValue) {
    if (hexValue.length == 3) {
        red = hexValue.charAt(0);
        red += hexValue.charAt(0);
        green = hexValue.charAt(1);
        green += hexValue.charAt(1);
        blue = hexValue.charAt(2);
        blue += hexValue.charAt(2);
        red = parseInt(red, 16);
        green = parseInt(green, 16);
        blue = parseInt(blue, 16);
        document.querySelector("#convertedRgbField").innerHTML = red + "," + green + "," + blue
    }
    else if (hexValue.length == 6) {
        red = hexValue.charAt(0) + hexValue.charAt(1);
        green = hexValue.charAt(2) + hexValue.charAt(3);
        blue = hexValue.charAt(4) + hexValue.charAt(5);
        red = parseInt(red, 16);
        green = parseInt(green, 16);
        blue = parseInt(blue, 16);
        document.querySelector("#convertedRgbField").innerHTML = red + "," + green + "," + blue
    }
    else {
        alert("Ogiltig färg??")
    }
}

function convertToHex(rgb) {
    for (i = 0; i < rgb.length; i++) {
        if (rgb.charAt(i) == ",") {
            var red = rgb.slice(0, i);
            rgb = rgb.substring(i + 1, rgb.length);
            rgbNaNCheck(red);
            red = +red;
            red = red.toString(16);
            (red.length == 1) ? red = "0" + red : red;
            break;
        }
    }
    for (i = 0; i < rgb.length; i++) {
        if (rgb.charAt(i) == ",") {
            var green = rgb.slice(0, i);
            rgb = rgb.substring(i + 1, rgb.length);
            rgbNaNCheck(green);
            green = +green;
            green = green.toString(16);
            (green.length == 1) ? green = "0" + green : green;
        }
    }
    if (isNaN(rgb) == false) {
        blue = rgb;
        rgbNaNCheck(blue);
        blue = +blue;
        blue = blue.toString(16);
        (blue.length == 1) ? blue = "0" + blue : blue;
    }
    else { alert("Talet är inte giltigt!"); }
    document.querySelector("#convertedRgbField").innerHTML = "#" + "" + red + "" + green + "" + blue
}

function rgbNaNCheck(n) {
    if (n > 255 || n < 0 || isNaN(n)) {
        alert("Talet är inte giltigt!");
    }
}

function randomStringsAndNums() {
    var firstNames = ["Grommash", "Orgrim", "Thrall", "Sylvanas", "Alleria", "Baine", "Cairne", "Leeroy", "Anduin", "Bolvar", "Millhouse", "Mankrik"];
    var lastNames = ["Hellscream", "Windrunner", "Stormrage", "Manastorm", "Lothar", "Doomhammer", "Bloodhoof", "Jenkins", "Noggenfogger", "Fordragon", "Proudmoore", "Agamaggan"]
    var firstLastNames = [];
    var randomNums = [];
    for (i = 0; i < 5; i++) {
        firstLastNames[i] = firstNames[Math.floor(Math.random() * firstNames.length)] + " " + lastNames[Math.floor(Math.random() * lastNames.length)];
    }
    for (i = 0; i < 10; i++) {
        randomNums[i] = Math.floor(Math.random() * 20);
    }
    firstLastNames.sort();
    randomNums.sort(function (a, b) { return b - a; });

    for (i = 0; i < firstLastNames.length; i++) {
        document.querySelector("#firstLastNamesArray").innerHTML += "<li>" + firstLastNames[i] + "</li>";
    }
    for (i = 0; i < randomNums.length; i++) {
        document.querySelector("#randomNumsArray").innerHTML += "<li>" + randomNums[i] + "</li>";
    }
}

function calculateExpiryDate() {
    var expiryDays = Number(document.forfalloDag.forfalloDagar.value);
    let year = currentDate.getFullYear(), month = currentDate.getMonth(), day = currentDate.getDate();
    var expiryDate = new Date(year, month, day + expiryDays);
    if (expiryDate.getDay() == 6) {
        var expiryDate = new Date(year, month, day + expiryDays + 2);
    }
    else if (expiryDate.getDay() == 0) {
        var expiryDate = new Date(year, month, day + expiryDays + 1);
    }
    document.querySelector("#whenCustomerHasToPay").innerHTML = expiryDate.getDate() + "." + Number(expiryDate.getMonth() + 1) + "." + expiryDate.getFullYear();
}

function referenceGenerator() {
    var userID = document.referenceForm.userIDNum.value;
    var referenceNum = "";
    var controlNumWeights = [1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1, 3, 7],
        controlNum = 0, controlNumInitialSum = 0, controlNumRoundUp = 0, unchangedReferenceNum = 0, splitUpReferenceNum = "";
    for (i = 0; i < userID.length; i++) {
        //Most advanced algorithm, uncrackable!
        referenceNum = referenceNum + "" + userID.charAt(i) * Math.floor((Math.random() * 5 + 1) / Math.floor(Math.random() * 3 + 1));
    }
    if (referenceNum.charAt(0) == 0) {
        referenceNum = "1" + referenceNum.slice(1);
    }
    for (i = 0; i < userID.length; i++) {
        controlNumInitialSum += userID.charAt(i) * controlNumWeights[i];
    }
    controlNumRoundUp = Math.ceil(controlNumInitialSum / 10) * 10;
    controlNum = controlNumRoundUp - controlNumInitialSum;
    unchangedReferenceNum = referenceNum;
    for (i = 0; i < referenceNum.length; i += 4) {
        splitUpReferenceNum = splitUpReferenceNum + " " + unchangedReferenceNum.slice(i, i + 4);
    }
    referenceNum = splitUpReferenceNum;
    document.querySelector("#referenceNumber").innerHTML = referenceNum + "" + controlNum;
    (referenceNum.length > 19) ? document.querySelector("#referenceNumber").innerHTML = "Din referensnummer blev för lång, tryck knappen igen eller korta av din kundnummer" : console.log("userID length O-K");
}

function ssnChecker() {
    var initialSSN = document.socialSecurityForm.ssn.value;
    var controlNumberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "H",
        "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "X", "Y"]
    var integerSSN = 0;
    var moduloSSN = 0;
    var weirdThreeNumberInt = 0;
    var whatCentury = 0;
    var birthDate = 0;
    var century = 0;
    var birthdayDay = 0;
    var birthDateNames = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
    if (initialSSN.length == 11 && isNaN(initialSSN.slice(0, 6)) == false
        && isNaN(initialSSN.slice(7, 10)) == false) {
        document.querySelector("#correctSSN").innerHTML = "Korrekt personbeteckning!";
    }
    else {
        alert("Din personbeteckning är fel längd eller inte siffror där det borde vara")
    }
    (initialSSN.charAt(6) == "A"

        || initialSSN.charAt(6) == "-"
        || initialSSN.charAt(6) == "+") ? console.log("Correct divider") : alert("Din personbeteckning ska ha '+','-' eller 'A' efter födelsedatumet");

    integerSSN = initialSSN.slice(0, 6) + "" + initialSSN.slice(7, 10);
    moduloSSN = integerSSN % 31;
    initialSSN = initialSSN.slice(0, initialSSN.length - 1) + initialSSN.charAt(initialSSN.length - 1).toUpperCase();
    if (controlNumberArray[moduloSSN] == initialSSN.charAt(initialSSN.length - 1)) {
        console.log("Correct control number");
    }
    else {
        alert("Din kontrollnummer är felaktig, kanske du inte är en riktig person?");
    }
    weirdThreeNumberInt = initialSSN.slice(7, 10);
    if (weirdThreeNumberInt % 2 == 0) {
        document.querySelector("#manOrWoman").innerHTML = "Du är en <i>hooman female</i>, "
    }
    else if (weirdThreeNumberInt % 2 == 1) {
        document.querySelector("#manOrWoman").innerHTML = "Du är en <i>hooman male</i>, "
    }
    whatCentury = initialSSN.charAt(6);
    switch (whatCentury) {
        case "+":
            century = 18 + "" + initialSSN.slice(4, 6);
            break;

        case "-":
            century = 19 + "" + initialSSN.slice(4, 6);
            break;

        case "A":
            century = 20 + "" + initialSSN.slice(4, 6);
            break;
    }
    birthdayDay = initialSSN.slice(0, 2);
    birthDate = new Date(century, initialSSN.slice(2, 4) - 1, birthdayDay);
    console.log(birthDate.getDay());
    document.querySelector("#restOfStringSSN").innerHTML = "född år " + century + " på en " + birthDateNames[birthDate.getDay()];
}
