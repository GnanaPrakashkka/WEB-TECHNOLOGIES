function fwar(){
	var r1=document.querySelector("#r1").checked
	var r2=document.querySelector("#r2").checked
	var r3=document.querySelector("#r3").checked
	if(r1 || r2 ||r3){
		document.querySelector(".wone").style.visibility="hidden";
	}
	else{
		document.querySelector(".wone").style.visibility="visible";
	}
}
function fname(){
	var fn=document.querySelector("#field1").value;
	var x=/^[a-z,A-Z][a-z, ,A-Z]*$/
	if(x.test(fn)){
		document.querySelector(".wtwo").style.visibility="hidden";
		return true;
	}
	else{
		document.querySelector(".wtwo").style.visibility="visible";
		return false;
	}
}

function lname(){
	var ln=document.querySelector("#field2").value;
	var x=/^[a-z,A-Z][a-z, ,A-Z]*$/
	if(x.test(ln)){
		document.querySelector(".wthree").style.visibility="hidden";
		return true;
	}
	else{
		document.querySelector(".wthree").style.visibility="visible";
		return false;
	}
}
function email(){
	var em=document.querySelector("#field3").value;
	var x=/^.+@.+$/
	if(x.test(em)){
		document.querySelector(".wfour").style.visibility="hidden";
		return true;
	}
	else{
		document.querySelector(".wfour").style.visibility="visible";
		return false;
	}
}

function phnum()
		{
			var p=document.querySelector("#us").value;
			var q=document.querySelector("#in").value;
			var pus=/^\d{3}-\d{3}-\d{4}$/
			var pus1=/^[6-9]\d{9}$/
			var india=document.getElementById('field5').value;
			if(pus.test(india)&q=='ind'){
				return true;
			}
			else if(pus1.test(india)&p=='usa'){
				return true;
			}
			else{
				document.getElementById('t').style.visibility='visible';
			}
		}
function phnum1()
		{
			var p=document.querySelector("#us1").value;
			var q=document.querySelector("#in1").value;
			var pus=/^\d{3}-\d{3}-\d{4}$/
			var pus1=/^[6-9]\d{9}$/
			var india=document.querySelector('.sd23').value;
			if(pus.test(india)&q=='ind'){
				document.getElementById('t1').style.visibility='hidden';
				return true;
			}
			else if(pus1.test(india)&p=='usa'){
				document.getElementById('t1').style.visibility='hidden';
				return true
			}
			else{
				document.getElementById('t1').style.visibility='visible';
			}
		}
function date(){
	var dt=document.getElementById('field6').value;
	if(dt==''){
		return true;
	}
	else{
		document.getElementById('rt').style.visibility='visible';
	}
}
function Citizenship(){
	var cs=document.querySelector("#field7").value;
	var n=/^[a-z,A-Z][a-z, ,A-Z]*$/
	if(n.test(cs)){
		document.querySelector(".wten").style.visibility="hidden";
		return true;
	}
	else{
		document.querySelector(".wten").style.visibility="visible";
		return false;
	}
}
function address(){
	var r=/^[a-zA-Z]+\[0-9]*[a-zA-Z]*/
	var rd=document.getElementById('field8').value;
	if(r.test('rd')){
		document.getElementById('ui').style.visibility='hidden';
		return true;
	}
	else{
		document.getElementById('ui').style.visibility='visible';
	}
}
function er(){
		document.querySelector('.df').style.display='block';
}
function nextpage(){
	fwar();
	fname();
	lname();
	email();
	phnum();
	Citizenship();
	phnum1();
	date();
	address();
	er();
}