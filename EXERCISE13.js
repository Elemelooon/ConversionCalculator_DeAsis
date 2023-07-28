const unit = document.getElementById('unitselector');
const right = document.getElementById('rightselect');
const left = document.getElementById('leftselect');


// FUNCTION FOR CHANGING DROPDOWNS
function updateOptions () {
    const selectedUnit = unit.value;

    left.innerHTML='';
    right.innerHTML='';

    if (selectedUnit === 'Speed' ) {
        const kph = document.createElement('option')
        kph.value = 'Kilometer per hour';
        kph.text = 'Kilometer per hour';
        right.appendChild(kph);

        const mph = document.createElement('option')
        mph.value = 'Mile per hour';
        mph.text = 'Mile per hour';
        right.appendChild(mph);

        const fps = document.createElement('option')
        fps.value = 'Foot per second';
        fps.text = 'Foot per second';
        right.appendChild(fps);

        const mps = document.createElement('option')
        mps.value = 'Meter per second';
        mps.text = 'Meter per second';
        right.appendChild(mps);

        const mps1 = document.createElement('option')
        mps1.value = 'Meter per second';
        mps1.text = 'Meter per second';
        left.appendChild(mps1);

        const fps1 = document.createElement('option')
        fps1.value = 'Foot per second';
        fps1.text = 'Foot per second';
        left.appendChild(fps1);

        const mph1 = document.createElement('option')
        mph1.value = 'Mile per hour';
        mph1.text = 'Mile per hour';
        left.appendChild(mph1);

        const kph1 = document.createElement('option')
        kph1.value = 'Kilometer per hour';
        kph1.text = 'Kilometer per hour';
        left.appendChild(kph1);

    }   else if (selectedUnit === 'Length') {
        const inch = document.createElement('option')
        inch.value = 'Inch';
        inch.text = 'Inch';
        right.appendChild(inch);

        const cm = document.createElement('option')
        cm.value = 'Centimeter';
        cm.text = 'Centimeter';
        right.appendChild(cm);

        const meter = document.createElement('option')
        meter.value = 'Meter';
        meter.text = 'Meter';
        right.appendChild(meter);

        const foot = document.createElement('option')
        foot.value = 'Foot';
        foot.text = 'Foot';
        right.appendChild(foot);

        const cm1 = document.createElement('option')
        cm1.value = 'Centimeter';
        cm1.text = 'Centimeter';
        left.appendChild(cm1);

        const meter1 = document.createElement('option')
        meter1.value = 'Meter';
        meter1.text = 'Meter';
        left.appendChild(meter1);

        const foot1 = document.createElement('option')
        foot1.value = 'Foot';
        foot1.text = 'Foot';
        left.appendChild(foot1);

        const inch1 = document.createElement('option')
        inch1.value = 'Inch';
        inch1.text = 'Inch';
        left.appendChild(inch1);

    }   else if (selectedUnit === 'Temp') {
        const faren = document.createElement('option')
        faren.value = 'Fahrenheit';
        faren.text = 'Fahrenheit';
        right.appendChild(faren);
        
        const celcius = document.createElement('option')
        celcius.value = 'Degree Celcius';
        celcius.text = 'Degree Celcius';
        right.appendChild(celcius);

        const kelvin = document.createElement('option')
        kelvin.value = 'Kelvin';
        kelvin.text = 'Kelvin';
        right.appendChild(kelvin);

        const celcius1 = document.createElement('option')
        celcius1.value = 'Degree Celcius';
        celcius1.text = 'Degree Celcius';
        left.appendChild(celcius1);

        const faren1 = document.createElement('option')
        faren1.value = 'Fahrenheit';
        faren1.text = 'Fahrenheit';
        left.appendChild(faren1);

        const kelvin1 = document.createElement('option')
        kelvin1.value = 'Kelvin';
        kelvin1.text = 'Kelvin';
        left.appendChild(kelvin1);

    }   else if (selectedUnit === 'Time') {
        const sec = document.createElement('option')
        sec.value = 'Second';
        sec.text = 'Second';
        right.appendChild(sec);

        const min = document.createElement('option')
        min.value = 'Minute';
        min.text = 'Minute';
        right.appendChild(min);

        const hour = document.createElement('option')
        hour.value = 'Hour';
        hour.text = 'Hour';
        right.appendChild(hour);

        const min1 = document.createElement('option')
        min1.value = 'Minute';
        min1.text = 'Minute';
        left.appendChild(min1);

        const hour1 = document.createElement('option')
        hour1.value = 'Hour';
        hour1.text = 'Hour';
        left.appendChild(hour1);
        
        const sec1 = document.createElement('option')
        sec1.value = 'Second';
        sec1.text = 'Second';
        left.appendChild(sec1);


    }   else if (selectedUnit === 'Mass') {
        const kg = document.createElement('option')
        kg.value = 'Kilogram';
        kg.text = 'Kilogram';
        right.appendChild(kg);

        const gram = document.createElement('option')
        gram.value = 'Gram';
        gram.text = 'Gram';
        right.appendChild(gram);

        const pound = document.createElement('option')
        pound.value = 'Pound';
        pound.text = 'Pound';
        right.appendChild(pound);

        const oz = document.createElement('option')
        oz.value = 'Ounce';
        oz.text = 'Ounce';
        right.appendChild(oz);

        const gram1 = document.createElement('option')
        gram1.value = 'Gram';
        gram1.text = 'Gram';
        left.appendChild(gram1);

        const pound1 = document.createElement('option')
        pound1.value = 'Pound';
        pound1.text = 'Pound';
        left.appendChild(pound1);

        const oz1 = document.createElement('option')
        oz1.value = 'Ounce';
        oz1.text = 'Ounce';
        left.appendChild(oz1);
        
        const kg1 = document.createElement('option')
        kg1.value = 'Kilogram';
        kg1.text = 'Kilogram';
        left.appendChild(kg1);

    }
    let clear = "";
    document.getElementById('left').value = clear;
    leftbox = document.getElementById('leftselect').value
    rightbox = document.getElementById('rightselect').value
    parent()
}

unit.addEventListener('change', updateOptions);

updateOptions();

// FUNCTION FOR CHANGING DROPDOWNS

var  leftbox = left.value;
var  rightbox = right.value;
var form = document.getElementById('formula');

// IF ELSE FUNCTION FOR COMPUTATION
function parent(){
    if (leftbox === 'Meter per second' && rightbox === 'Kilometer per hour') {
        mpsTokph();
    }   else if (leftbox === 'Meter per second' && rightbox === 'Mile per hour') {
        mpsTomph();
    }   else if (leftbox === 'Meter per second' && rightbox === 'Foot per second') {
        mpsTofps();
    }   else if (leftbox === 'Meter per second' && rightbox === 'Meter per second') {
        mpsTomps();
    }   else if (leftbox === 'Foot per second' && rightbox === 'Foot per second') {
        fpsTofps();
    }   else if (leftbox === 'Foot per second' && rightbox === 'Kilometer per hour') {
        fpsTokph();
    }   else if (leftbox === 'Foot per second' && rightbox === 'Mile per hour') {
        fpsTomph();
    }   else if (leftbox === 'Foot per second' && rightbox === 'Meter per second') {
        fpsTomps();
    }   else if (leftbox === 'Mile per hour' && rightbox === 'Meter per second') {
        mphTomps();
    }   else if (leftbox === 'Mile per hour' && rightbox === 'Foot per second') {
        mphTofps();
    }   else if (leftbox === 'Mile per hour' && rightbox === 'Kilometer per hour') {
        mphTokph();
    }   else if (leftbox === 'Mile per hour' && rightbox === 'Mile per hour') {
        mphTomph();
    }   else if (leftbox === 'Kilometer per hour' && rightbox === 'Mile per hour') {
        kphTomph();
    }   else if (leftbox === 'Kilometer per hour' && rightbox === 'Kilometer per hour') {
        kphTokph();
    }   else if (leftbox === 'Kilometer per hour' && rightbox === 'Meter per second') {
        kphTomps();
    }   else if (leftbox === 'Kilometer per hour' && rightbox === 'Foot per second') {
        kphTofps();
    }   else if (leftbox === 'Meter' && rightbox === 'Centimeter') {
        mTocm();
    }   else if (leftbox === 'Meter' && rightbox === 'Inch') {
        mToinch();
    }   else if (leftbox === 'Meter' && rightbox === 'Foot') {
        mTof();
    }   else if (leftbox === 'Meter' && rightbox === 'Meter') {
        mTom();
    }   else if (leftbox === 'Centimeter' && rightbox === 'Meter') {
        cmTom();
    }   else if (leftbox === 'Centimeter' && rightbox === 'Inch') {
        cmToinch();
    }   else if (leftbox === 'Centimeter' && rightbox === 'Foot') {
        cmTof();
    }   else if (leftbox === 'Centimeter' && rightbox === 'Centimeter') {
        cmTocm();
    }   else if (leftbox === 'Inch' && rightbox === 'Centimeter') {
        inchTocm();
    }   else if (leftbox === 'Inch' && rightbox === 'Foot') {
        inchTof();
    }   else if (leftbox === 'Inch' && rightbox === 'Meter') {
        inchTom();
    }   else if (leftbox === 'Inch' && rightbox === 'Inch') {
        inchToinch();
    }   else if (leftbox === 'Foot' && rightbox === 'Inch') {
        fToinch();
    }   else if (leftbox === 'Foot' && rightbox === 'Meter') {
        fTom();
    }   else if (leftbox === 'Foot' && rightbox === 'Foot') {
        fTof();
    }   else if (leftbox === 'Foot' && rightbox === 'Centimeter') {
        fTocm();
    }   else if (leftbox === 'Degree Celcius' && rightbox === 'Fahrenheit') {
        dcTof();
    }   else if (leftbox === 'Degree Celcius' && rightbox === 'Kelvin') {
        dcTok();
    }   else if (leftbox === 'Degree Celcius' && rightbox === 'Degree Celcius') {
        dcTodc();
    }   else if (leftbox === 'Fahrenheit' && rightbox === 'Degree Celcius') {
        fTodc();
    }   else if (leftbox === 'Fahrenheit' && rightbox === 'Kelvin') {
        fTok();
    }   else if (leftbox === 'Fahrenheit' && rightbox === 'Fahrenheit') {
        fTof();
    }   else if (leftbox === 'Kelvin' && rightbox === 'Fahrenheit') {
        kTof();
    }   else if (leftbox === 'Kelvin' && rightbox === 'Degree Celcius') {
        kTodc();
    }   else if (leftbox === 'Kelvin' && rightbox === 'Kelvin') {
        kTok();
    }   else if (leftbox === 'Second' && rightbox === 'Minute') {
        secTomin();
    }   else if (leftbox === 'Second' && rightbox === 'Hour') {
        secTohr();
    }   else if (leftbox === 'Second' && rightbox === 'Second') {
        secTosec();
    }   else if (leftbox === 'Minute' && rightbox === 'Second') {
        minTosec();
    }   else if (leftbox === 'Minute' && rightbox === 'Hour') {
        minTohr();
    }   else if (leftbox === 'Minute' && rightbox === 'Minute') {
        minTomin();
    }   else if (leftbox === 'Hour' && rightbox === 'Minute') {
        hrTomin();
    }   else if (leftbox === 'Hour' && rightbox === 'Second') {
        hrTosec();
    }   else if (leftbox === 'Hour' && rightbox === 'Hour') {
        hrTohr();
    }   else if (leftbox === 'Kilogram' && rightbox === 'Gram') {
        kgTog();
    }   else if (leftbox === 'Kilogram' && rightbox === 'Pound') {
        kgTop();
    }   else if (leftbox === 'Kilogram' && rightbox === 'Ounce') {
        kgTooz();
    }   else if (leftbox === 'Kilogram' && rightbox === 'Kilogram') {
        kgTokg();
    }   else if (leftbox === 'Gram' && rightbox === 'Kilogram') {
        gTokg();
    }   else if (leftbox === 'Gram' && rightbox === 'Pound') {
        gTop();
    }   else if (leftbox === 'Gram' && rightbox === 'Ounce') {
        gTooz();
    }   else if (leftbox === 'Gram' && rightbox === 'Gram') {
        gTog();
    }   else if (leftbox === 'Pound' && rightbox === 'Gram') {
        pTog();
    }   else if (leftbox === 'Pound' && rightbox === 'Kilogram') {
        pTokg();
    }   else if (leftbox === 'Pound' && rightbox === 'Ounce') {
        pTooz();
    }   else if (leftbox === 'Pound' && rightbox === 'Pound') {
        pTop();
    }   else if (leftbox === 'Ounce' && rightbox === 'Pound') {
        ozTop();
    }   else if (leftbox === 'Ounce' && rightbox === 'Kilogram') {
        ozTokg();
    }   else if (leftbox === 'Ounce' && rightbox === 'Gram') {
        ozTog();
    }   else if (leftbox === 'Ounce' && rightbox === 'Ounce') {
        ozTooz();
    }
}
function ozTooz() {
    let a = Number(document.getElementById("left").value);
    let result = a * 1;
    let form = ""
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
    
}
function ozTog() {
    let a = Number(document.getElementById("left").value);
    let result = a * 28.35;
    let form = "Mass multiply by 26.35";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function ozTokg() {
    let a = Number(document.getElementById("left").value);
    let result = a / 35.274;
    let form = "Mass divide by 35.274";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function ozTop() {
    let a = Number(document.getElementById("left").value);
    let result = a / 16;
    let form = "Mass divide by 16";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function pTop() {
    let a = Number(document.getElementById("left").value);
    let result = a * 1;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function pTooz() {
    let a = Number(document.getElementById("left").value);
    let result = a * 16;
    let form = "Mass multiply by 16";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function pTokg() {
    let a = Number(document.getElementById("left").value);
    let result = a / 2.205;
    let form = "Mass divide by 2.205";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function pTog() {
    let a = Number(document.getElementById("left").value);
    let result = a * 453.6;
    let form = "Mass multiply by 453.6";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function gTog() {
    let a = Number(document.getElementById("left").value);
    let result = a * 1;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function gTooz() {
    let a = Number(document.getElementById("left").value);
    let result = a / 28.35;
    let form = "Mass divide by 28.35";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function gTop() {
    let a = Number(document.getElementById("left").value);
    let result = a / 453.6;
    let form = "Mass divide by 453.6";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function gTokg() {
    let a = Number(document.getElementById("left").value);
    let result = a / 1000;
    let form = "Mass divide by 1000";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function kgTokg() {
    let a = Number(document.getElementById("left").value);
    let result = a * 1;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function kgTooz() {
    let a = Number(document.getElementById("left").value);
    let result = a * 35.274;
    let form = "Mass multiply by 35.274";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function kgTop() {
    let a = Number(document.getElementById("left").value);
    let result = a * 2.205;
    let form = "Mass multiply by 2.205";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function kgTog() {
    let a = Number(document.getElementById("left").value);
    let result = a * 1000;
    let form = "Mass multiply by 1000";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
// TIME FUNCTIONS

function hrTohr() {
    let a = Number(document.getElementById("left").value);
    let result = a * 1;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function hrTosec() {
    let a = Number(document.getElementById("left").value);
    let result = a * 3600;
    let form = "Time multiply by 3600";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function hrTomin() {
    let a = Number(document.getElementById("left").value);
    let result = a * 60;
    let form = "Time multiply by 60";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function minTomin() {
    let a = Number(document.getElementById("left").value);
    let result = a * 1;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function minTohr() {
    let a = Number(document.getElementById("left").value);
    let result = a / 60;
    let form = "Time divide by 60";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function minTosec() {
    let a = Number(document.getElementById("left").value);
    let result = a * 60;
    let form = "Time multiply by 60";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function secTosec() {
    let a = Number(document.getElementById("left").value);
    let result = a * 1;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function secTohr() {
    let a = Number(document.getElementById("left").value);
    let result = a / 3600;
    let form = "Time divide by 3600";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function secTomin() {
    let a = Number(document.getElementById("left").value);
    let result = a / 60;
    let form = "Time divide by 60";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function kTok() {
    let a = Number(document.getElementById("left").value);
    let result = a * 1;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function kTodc() {
    let a = Number(document.getElementById("left").value);
    let result = a - 273.15;
    let form = "Temperature - 273.15";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function kTof() {
    let a = Number(document.getElementById("left").value);
    let result = (a - 273.15) * 9 / 5 + 32;
    let form = "(Temperature - 273.15) x 9/5 +32";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function fTof() {
    let a = Number(document.getElementById("left").value);
    let result = a * 1;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function fTok() {
    let a = Number(document.getElementById("left").value);
    let result = (a - 32 ) * 5 / 9 + 273.15;
    let form = "(Temperature - 32) x 5/9 +273.15";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function fTodc() {
    let a = Number(document.getElementById("left").value);
    let b = a - 32;
    let c = b * 5;
    let result = c / 9;
    let form = "(Temperature - 32) x 5/9";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function dcTodc() {
    let a = Number(document.getElementById("left").value);
    let result = a * 1;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function dcTok() {
    let a = Number(document.getElementById("left").value);
    let result = a + 273.15;
    let form = "Temperature + 273.15";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function dcTof() {
    let a = Number(document.getElementById("left").value);
    let result = a * 9 / 5 + 32;
    let form = "Temperature x 9/5 +32";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function fTocm() {
    let a = Number(document.getElementById("left").value);
    let b = 30.48;
    let result = a * b;
    let form = "Length multiply by 30.48";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function fTof() {
    let a = Number(document.getElementById("left").value);
    let b = 1;
    let result = a * b;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function fTom() {
    let a = Number(document.getElementById("left").value);
    let b = 3.281;
    let result = a / b;
    let form = "Length divide by 3.281";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function fToinch() {
    let a = Number(document.getElementById("left").value);
    let b = 12;
    let result = a * b;
    let form = "Length multiply by 12";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function inchToinch() {
    let a = Number(document.getElementById("left").value);
    let b = 1;
    let result = a * b;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function inchTom() {
    let a = Number(document.getElementById("left").value);
    let b = 39.37;
    let result = a / b;
    let form = "Length divide by 39.37";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function inchTof() {
    let a = Number(document.getElementById("left").value);
    let b = 12;
    let result = a / b;
    let form = "Length divide by 12";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function inchTocm() {
    let a = Number(document.getElementById("left").value);
    let b = 2.54;
    let result = a * b;
    let form = "Length multiply by 2.54";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function cmTocm() {
    let a = Number(document.getElementById("left").value);
    let b = 1;
    let result = a * b;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function cmToinch() {
    let a = Number(document.getElementById("left").value);
    let b = 2.54;
    let result = a / b;
    let form = "Length divide by 2.54";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function cmTom() {
    let a = Number(document.getElementById("left").value);
    let b = 100;
    let result = a / b;
    let form = "Length divide by 100";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function mTom() {
    let a = Number(document.getElementById("left").value);
    let b = 1;
    let result = a * b;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function mTof() {
    let a = Number(document.getElementById("left").value);
    let b = 3.281;
    let result = a * b;
    let form = "Length multiply by 3.281";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function mToinch() {
    let a = Number(document.getElementById("left").value);
    let b = 39.37;
    let result = a * b;
    let form = "Length multiply by 39.37";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function mTocm() {
    let a = Number(document.getElementById("left").value);
    let b = 100;
    let result = a * b;
    let form = "Length multiply by 100";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function mpsTokph() {
        let a = Number(document.getElementById("left").value);
        let b = 3.6;
        let result = a * b;
        let form = "Speed multiply by 3.6";
        document.getElementById('formula').innerHTML = form;
        document.getElementById("right").value = result;
}
function mpsTomph() {
    let a = Number(document.getElementById("left").value);
    let b = 2.237;
    let result = a * b;
    let form = "Speed multiply by 2.237";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function mpsTofps() {
    let a = Number(document.getElementById("left").value);
    let b = 3.281;
    let result = a * b;
    let form = "Speed multiply by 3.281";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function mpsTomps() {
    let a = Number(document.getElementById("left").value);
    let b = 1;
    let result = a * b;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function fpsTofps() {
    let a = Number(document.getElementById("left").value);
    let b = 1;
    let result = a * b;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function fpsTokph() {
    let a = Number(document.getElementById("left").value);
    let b = 1.097;
    let result = a * b;
    let form = "Speed multiply by 1.097";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function fpsTomph() {
    let a = Number(document.getElementById("left").value);
    let b = 1.467;
    let result = a / b;
    let form = "Speed divide by 1.467";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function fpsTomps() {
    let a = Number(document.getElementById("left").value);
    let b = 3.281;
    let result = a / b;
    let form = "Speed divide by 3.281";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function mphTomps() {
    let a = Number(document.getElementById("left").value);
    let b = 2.237;
    let result = a / b;
    let form = "Speed divide by 2.237";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function mphTofps() {
    let a = Number(document.getElementById("left").value);
    let b = 1.467;
    let result = a * b;
    let form = "Speed multiply by 1.467";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function mphTokph() {
    let a = Number(document.getElementById("left").value);
    let b = 1.609;
    let result = a * b;
    let form = "Speed multiply by 1.609";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function mphTomph() {
    let a = Number(document.getElementById("left").value);
    let b = 1;
    let result = a * b;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function kphTomph() {
    let a = Number(document.getElementById("left").value);
    let b = 1.609;
    let result = a / b;
    let form = "Speed divide by 1.609";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function kphTokph() {
    let a = Number(document.getElementById("left").value);
    let b = 1;
    let result = a * b;
    let form = "";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function kphTomps() {
    let a = Number(document.getElementById("left").value);
    let b = 3.6;
    let result = a / b;
    let form = "Speed divide by 3.6";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}
function kphTofps() {
    let a = Number(document.getElementById("left").value);
    let b = 1.097;
    let result = a / b;
    let form = "Speed divide by 1.097";
    document.getElementById('formula').innerHTML = form;
    document.getElementById("right").value = result;
}



// parent();
function getLeftValue (){
    leftbox = document.getElementById('leftselect').value
    parent()
}
function getRightValue (){
    rightbox = document.getElementById('rightselect').value
    parent()
}
