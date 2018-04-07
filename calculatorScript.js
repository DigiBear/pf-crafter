var val;
var u5mod;
var u15mod;
var sA;
var mA;
var prog;
var weekDays = 7;
var workHours = 8;

// function tryOut() {
// 	console.log('test');
// }
function hourMinuteChange() {
    var hourMinute = document.getElementById('timeToggle').checked;
    if (hourMinute === false) {
        document.getElementById('hours').style.display = 'none';
        document.getElementById('minutes').style.display = 'block';
    } else {
        document.getElementById('hours').style.display = 'block';
        document.getElementById('minutes').style.display = 'none';
    }
}

function costCalc() {
    giveVal();
    var cost = val / 4;
    return document.getElementById('crCos').value = cost;
}

function giveVal() {
    val = Number(document.getElementById('itVal').value);
    return val;
}

function optionCheck() {
    checkUnchained5();
    checkUnchained15();
    checkSwiftAlchemy();
    checkMasterAlchemist();
}

function checkUnchained5() {
    var chain5 = document.getElementById('Ur5').checked;
    if (chain5 === true) {
        u5mod = 2;
    } else {
        u5mod = 1;
    }
    return u5mod;
}

function checkUnchained15() {
    var chain15 = document.getElementById('Ur15').checked;
    if (chain15 === true) {
        u15mod = weekDays;
    } else {
        u15mod = 1;
    }
    return u15mod;
}

function checkSwiftAlchemy() {
    var swiftAlc = document.getElementById('swA').checked;
    if (swiftAlc === true) {
        sA = 2;
    } else {
        sA = 1;
    }
    return sA;
}

function checkMasterAlchemist() {
    var mastAlc = document.getElementById('msA').checked;
    if (mastAlc === true) {
        mA = 10;
    } else {
        mA = 1;
    }
    return mA;
}

function progressCheck() {
    var check = Number(document.getElementById('crC').value);
    var DC = Number(document.getElementById('itDC').value);
    var DCmod = Number(document.getElementById('modDC').value);
    if (DCmod > 0) {
        prog = ((check * u5mod) * (DC + DCmod) * mA);
    } else {
        prog = (check * u5mod) * DC * mA;
    }
    return prog;
}

function craftCalc() {
    var progIn = document.getElementById('inputProgress');
    var minIn = document.getElementById('inputMinutes');
    var hourIn = document.getElementById('inputHours');
    var totalTimeHours;
    var totalTimeMinutes;
    var sp = val * 10;

    optionCheck();
    progressCheck();

    totalTimeHours = ((weekDays / u15mod) / ((prog - sp) / sp) * workHours) / sA;
    totalTimeMinutes = totalTimeHours * 60;

    progIn.innerHTML = prog + " / " + sp;
    hourIn.innerHTML = totalTimeHours.toFixed(2);
    minIn.innerHTML = totalTimeMinutes.toFixed(2);
            
    if (prog - sp <= 0) {
        document.getElementById('hours').style.display = 'none';
        document.getElementById('minutes').style.display = 'none';
        document.getElementById('timeLabel').style.display = 'none';
        document.getElementById('progress').style.display = 'block';

    } else {
        if (document.getElementById('timeToggle').checked === true) {
            document.getElementById('hours').style.display = 'block';
            document.getElementById('timeLabel').style.display = 'block';
            document.getElementById('progress').style.display = 'none';
        } else {
            document.getElementById('minutes').style.display = 'block';
            document.getElementById('timeLabel').style.display = 'block';
            document.getElementById('progress').style.display = 'none';
        }
    }
}