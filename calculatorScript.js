var val;
var u5mod;
var u15mod;
var sA;
var mA;
var prog;
var weekDays = 7;
var workHours = 8;

// 		--= D E P R E C A T E D   C O D E =--
// function hourMinuteChange() {
//     var hourMinute = document.getElementById('timeToggle').checked;
//     if (hourMinute === false) {
//         document.getElementById('hours').style.display = 'none';
//         document.getElementById('minutes').style.display = 'block';
//     } else {
//         document.getElementById('hours').style.display = 'block';
//         document.getElementById('minutes').style.display = 'none';
//     }
// }

function elementHider() {
	var elementSelect = document.getElementsByClassName('messages');
	var i;
	for (i = 0; i < elementSelect.length; i++) {
			elementSelect[i].style.display = "none";
		}
}


function chronoChange(type) {
	var minuteToggle = document.getElementById('checkboxMinute');
	var hourToggle = document.getElementById('checkboxHour');
	var dayToggle = document.getElementById('checkboxDay');
	var progressToggle = document.getElementById('checkboxProgress');
	var elementSelect = document.getElementsByClassName('messages');

	if (type === "minute") {
		hourToggle.checked = false;
		dayToggle.checked = false;
		progressToggle.checked = false;

		elementHider();
		document.querySelector("#minute").style.display = "block";

	} else if (type === 'hour') {
		minuteToggle.checked = false;
		dayToggle.checked = false;
		progressToggle.checked = false;

		elementHider();
		document.querySelector("#hour").style.display = "block";

	} else if (type === 'day') {
		minuteToggle.checked = false;
		hourToggle.checked = false;
		progressToggle.checked = false;

		elementHider();
		document.querySelector("#day").style.display = "block";

	} else if (type === 'progress') {
		minuteToggle.checked = false;
		hourToggle.checked = false;
		dayToggle.checked = false;

		elementHider();
		document.querySelector("#progress").style.display = "block";

	}
}

function costCalc() {
    giveVal();
    var cost = val / 3;
    return document.getElementById('crCos').value = cost.toFixed(2);
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
    var DCmod = Number(document.getElementById('difficultyModifier').value);
    if (DCmod > 0) {
        prog = ((check * u5mod) * (DC + DCmod) * mA);
    } else {
        prog = (check * u5mod) * DC * mA;
    }
    return prog;
}

function elementPainter(bgC) {
	var elementSelect = document.getElementsByClassName('messages');
	var i;
	for (i = 0; i < elementSelect.length; i++) {
			elementSelect[i].style.backgroundColor = bgC;
			elementSelect[i].style.boxShadow = "5px 5px " + bgC + "46";
		}
}

function craftCalc() {
    var progIn = document.getElementById('inputProgress');
    var minIn = document.getElementById('inputMinutes');
    var hourIn = document.getElementById('inputHours');
    var dayIn = document.getElementById('inputDays');
    var totalTimeHours;
    var totalTimeMinutes;
    var totalTimeDays;
    var sp = val * 10;

    optionCheck();
    progressCheck();

    if (prog-sp <= 0) {
    	totalTimeHours = (workHours * (weekDays / u15mod))/sA;
    	totalTimeMinutes = totalTimeHours * 60
    	totalTimeDays = totalTimeHours / workHours;

    	elementPainter("#B12717");
    } else {
    	totalTimeHours = ((weekDays / u15mod) / ((prog - sp) / sp) * workHours) / sA;
	    totalTimeDays = totalTimeHours / workHours;
	    totalTimeMinutes = totalTimeHours * 60;

	    elementPainter("#1EBD3B");
    }

    progIn.innerHTML = prog + " / " + sp;
    hourIn.innerHTML = totalTimeHours.toFixed(1);
    minIn.innerHTML = totalTimeMinutes.toFixed(1);
    dayIn.innerHTML = totalTimeDays.toFixed(1);

}