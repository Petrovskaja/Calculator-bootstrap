//alert("Добро пожаловать!");
var flag =0;
var firstNumber=document.getElementById('firstNumber');
var secondNumber=document.getElementById('secondNumber');
var znak=document.getElementById('znak')
var result=document.getElementById('result')

document.getElementById('btn-0').onclick=function(event) {
	if (flag==0) {
		firstNumber.value += '0';
	}
	if (flag==1) {
		secondNumber.value += '0';
	}
}

document.getElementById('btn-1').onclick=function(event) {
	if (flag==0) {
		firstNumber.value += '1';
	}
	if (flag==1) {
		secondNumber.value += '1';
	}
}

document.getElementById('btn-2').onclick=function(event) {
	if (flag==0) {
		firstNumber.value += '2';
	}
	if (flag==1) {
		secondNumber.value += '2';
	}
}

document.getElementById('btn-3').onclick=function(event) {
	if (flag==0) {
		firstNumber.value += '3';
	}
	if (flag==1) {
		secondNumber.value += '3';
	}
}

document.getElementById('btn-4').onclick=function(event) {
	if (flag==0) {
		firstNumber.value += '4';
	}
	if (flag==1) {
		secondNumber.value += '4';
	}
}

document.getElementById('btn-5').onclick=function(event) {
	if (flag==0) {
		firstNumber.value += '5';
	}
	if (flag==1) {
		secondNumber.value += '5';
	}
}

document.getElementById('btn-6').onclick=function(event) {
	if (flag==0) {
		firstNumber.value += '6';
	}
	if (flag==1) {
		secondNumber.value += '6';
	}
}

document.getElementById('btn-7').onclick=function(event) {
	if (flag==0) {
		firstNumber.value += '7';
	}
	if (flag==1) {
		secondNumber.value += '7';
	}
}

document.getElementById('btn-8').onclick=function(event) {
	if (flag==0) {
		firstNumber.value += '8';
	}
	if (flag==1) {
		secondNumber.value += '8';
	}
}

document.getElementById('btn-9').onclick=function(event) {
	if (flag==0) {
		firstNumber.value += '9';
	}
	if (flag==1) {
		secondNumber.value += '9';
	}
}

document.getElementById('btn-C').onclick=function(event) {
		firstNumber.value = '';
		secondNumber.value = '';
		result.value='';
		znak.value='';
		flag=0;
}

document.getElementById('btnPlus').onclick=function(event) {
	flag=1;
	znak.value='+';
}

document.getElementById('btnMinus').onclick=function(event) {
	flag=1;
	znak.value='-';
}

document.getElementById('btnUmn').onclick=function(event) {
	flag=1;
	znak.value='*';
}

document.getElementById('btnDel').onclick=function(event) {
	flag=1;
	znak.value='/';
}

document.getElementById('btnResult').onclick=function(event) {
	flag=0;

	if (znak.value=='+') {
		result.value=parseFloat(firstNumber.value)+parseFloat(secondNumber.value)
	}
	if (znak.value=='-') {
		result.value=parseFloat(firstNumber.value)-parseFloat(secondNumber.value)
	}
	if (znak.value=='*') {
		result.value=parseFloat(firstNumber.value)*parseFloat(secondNumber.value)
	}
	if (znak.value=='/') {
		result.value=parseFloat(firstNumber.value)/parseFloat(secondNumber.value)
	}
}