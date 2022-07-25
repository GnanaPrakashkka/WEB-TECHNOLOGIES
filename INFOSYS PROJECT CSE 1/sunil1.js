const TOE=$('#tableOfErrors');
flagObject={'X/SSLC/Junior/Equivalent':{
				'Degree':-1,
				'School':-1,
				'Board':-1,
				'Specialization':-1,
				'Country':-1,
				'State':-1,
				'Simple Average percentage/CGPA/Grade for all semesters/years':-1,
				'Passing month and year':-1
			},
			'Graduation':{
				'Degree':-1,
				'Institute':-1,
				'University':-1,
				'Country':-1,
				'State':-1,
				'Branch/Stream/Area of Specialization':-1,
				'Simple Average percentage/CGPA/Grade for all semesters/years':-1,
				'Passing month and year':-1
			},
			'XII-Standard':{
				'Degree':-1,
				'School':-1,
				'Board':-1,
				'State':-1,
				'Country':-1,
				'Branch/Stream/Area of Specialization':-1,
				'Simple Average percentage/CGPA/Grade for all semesters/years':-1,
				'Passing month and year':-1
			},
			'Diploma':{
				'Degree':-1,
				// 'Institute':-1,
				'University':-1,
				'Country':-1,
				'State':-1,
				'Branch/Stream/Area of Specialization':-1,
				'Simple Average percentage/CGPA/Grade for all semesters/years':-1,
				'Passing month and year':-1
			}
		};
trash=[]
const t1='Simple Average percentage/CGPA/Grade for all semesters/years';
const t2='Passing month and year';
const t3='Branch/Stream/Area of Specialization';
// sectionsNone=['X/SSLC/Junior/Equivalent','XII-Standard','Graduation','Diploma'];
// sectionsAlways=['X/SSLC/Junior/Equivalent','Graduation'];
activeFlag=0;
gapFlag=0;
submitFlag=0;
clickCount=0
function validate(){

	submitFlag=0;
	if(clickCount==0){
		for(i in flagObject)
		{
			if(i=='XII-Standard' && document.getElementById('XII').style.display=="none"){
				continue;
			}
			if(i=='Diploma' && document.getElementById('DIP').style.display=="none"){
				continue;
			}
			for(j in flagObject[i])
			{
				if(flagObject[i][j]==2){
					continue;
				}
				else{
					submitFlag+=1;
					if(j==t1)
						j='Simple';
					if(j==t2)
						j='Passing';
					if(j==t3){
						j='Branch';
					}
					if(j=='Degree')
						continue;
					temp=document.getElementById(i+j);
					if(j=="School" || j=='Simple' || j=='Passing'){
						othercheck(temp);
					}
					else{
						check(temp);
					}
				}
			}
		}
		clickCount=1;
	}
	if(XIIDIP()==false){
		submitFlag+=1;
	}
	
	if(activeFlag==0){
		submitFlag+=1;
		document.getElementById("errorBACK").style.display="flex";
	}
	else{
		document.getElementById("errorBACK").style.display="none";	
	}
	if(gapFlag==0){
		submitFlag+=1;
		document.getElementById("errorGAPS").style.display="flex";
	}
	else{
		document.getElementById("errorGAPS").style.display="none";
	}
	if(submitFlag!=0){
		return false;
	}
	document.getElementById("err").style.display="block";
	return true;
}
function radioCheck(){

}
function editId(id){
	if(id==t1){
		return "Simple";
	}
	else if(id==t2){
		return "Passing";
	}
	else if(id==t3){
		return "Branch";
	}
}
function check(i){
	k=i.value
	console.log(i.getAttribute("id"));
	var field=i.parentElement.parentElement.parentElement.children[0].innerText;
	var section=i.parentElement.parentElement.parentElement.parentElement.children[0].children[1].innerText;
	if(field==t1){
		field='Simple';
	}
	if(field==t2){
		field='Passing';
	}
	if(field==t3){
		field='Branch';
	}
	if(k==""){
		Erroring(null,field,section);
		if(flagObject[section][field]==1){
			decBar();
		}
		i.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display="flex";

	}
	else{
		if(flagObject[section][field]!=2){
			incBar();
		}
		ErrorFree(null,field,section);
		console.log(i);
		i.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display="none";		
		i.parentElement.nextElementSibling.nextElementSibling.style.display="none";
	}
}
rdflag=0;
cdflag=0;
function radiofun(i){
	if(rdflag==0){
		incBar();
	}
	rdflag+=1;
}
function cboxfun(i){
	if(cdflag==0){
		incBar();
		cdflag+=1;
	}
	if(xopen.checked==false && dopen.checked==false){
		decBar();
		cdflag=0;
	}
	
}
function incBar(){
	j=document.getElementById("myBar").style.width;
	j=(Number(j.slice(0,2))+1);
	document.getElementById("myBar").style.width=j+'%';
	document.getElementById("varNum").innerText=j;
}
function decBar(){
	j=document.getElementById("myBar").style.width;
	j=(Number(j.slice(0,2))-1);
	document.getElementById("myBar").style.width=j+'%';
	document.getElementById("varNum").innerText=j;
}
function please(i){
	k=i.value;
	if(k=="Others"){
		i.parentElement.nextElementSibling.style.display="flex";
	}
	else if(k!="Others"){
		i.parentElement.nextElementSibling.style.display="none";
		i.parentElement.nextElementSibling.nextElementSibling.style.display="none";
	}
}
function othercheck(i){
	var field=i.parentElement.parentElement.children[0].innerText;
	var section=i.parentElement.parentElement.parentElement.children[0].children[1].innerText
	k=i.value;
	if(field==t1){
		field='Simple';
	}
	if(field==t2){
		field='Passing';
	}
	if(field==t3){
		field='Branch';
	}
	if(k==""){
		Erroring(null,field,section);
		if(flagObject[section][field]==1){
			decBar();
		}
		i.parentElement.nextElementSibling.style.display="flex";
	}
	else{
		ErrorFree(null,field,section);
		incBar();
		i.parentElement.nextElementSibling.style.display="none";
	}
}
function Erroring(i=null,field=null,section=null){
	errorData="In "+section+", "+field+" not filled";
	errorIDt="\""+section+field+"t\"";
	errorID="\""+section+field+"\""
	temp=flagObject[section][field];
	if(temp==-1 || temp==0){
		flagObject[section][field]=0;
	}
	else if(temp==1){
		flagObject[section][field]=0;
	}
	else if(temp==2){
		flagObject[section][field]=1;
	}
	TOE.append("<tr onclick=navigate("+errorID+") id="+errorIDt+"><td></td><td>"+errorData+"</td><td><img src="+"eyesunil.png"+"></td></tr>");	
}
function ErrorFree(i=null,field=null,section=null){
	temp=flagObject[section][field];
	if(temp==1 || temp==0){
		errorID=section+field+'t';
		console.log(errorID);
		document.getElementById(errorID).remove();
	}
	flagObject[section][field]=2;
}

function butls(e){
	e.preventDefault();
	$("#logyes").css({'background-color':'hsl(277,56%,89%)','border':'2px solid #9c4ecd'})
	$("#logno").css({'background-color':'white','border':'0.2px solid #e0e0e0'})
	document.getElementById("chai1").style.display="block";
	document.getElementById("errorBACK").style.display="none";
	activeFlag=1
}
function butln(e){
	e.preventDefault();
	$("#logno").css({'background-color':'hsl(277,56%,89%)','border':'2px solid #9c4ecd'})
	$("#logyes").css({'background-color':'white','border':'0.2px solid #e0e0e0'})
	document.getElementById("chai1").style.display="none";
	document.getElementById("errorBACK").style.display="none";
	activeFlag=1
}
logyes=document.getElementById("logyes");
logyes.addEventListener("click",butls,false);
logyes=document.getElementById("logno");
logyes.addEventListener("click",butln,false);


function butgs(e){
	e.preventDefault();
	$("#gapyes").css({'background-color':'hsl(277,56%,89%)','border':'2px solid #9c4ecd'})
	$("#gapno").css({'background-color':'white','border':'0.2px solid #e0e0e0'})
	document.getElementById("chai2").style.display="block";
	document.getElementById("errorGAPS").style.display="none";
	gapFlag=1
}
function butgn(e){
	e.preventDefault();
	$("#gapno").css({'background-color':'hsl(277,56%,89%)','border':'2px solid #9c4ecd'})
	$("#gapyes").css({'background-color':'white','border':'0.2px solid #e0e0e0'})
	document.getElementById("chai2").style.display="none";
	document.getElementById("errorGAPS").style.display="none";
	gapFlag=1
}
logyes=document.getElementById("gapyes");
logyes.addEventListener("click",butgs,false);
logyes=document.getElementById("gapno");
logyes.addEventListener("click",butgn,false);



xopen=document.getElementById("XIIopen");
xopen.addEventListener("click",function(){
	if(xopen.checked){
		document.getElementById('XII').style.display="block";
	}
	else{
		document.getElementById('XII').style.display="none";

	}
})
dopen=document.getElementById("dipopen");
dopen.addEventListener("click",function(){
	if(dopen.checked){
		document.getElementById('DIP').style.display="block";
	}
	else{
		document.getElementById('DIP').style.display="none";
	}
})

function navigate(loc){
	window.location="#"+loc;
}
function extralast(i){
	j=i.nextElementSibling.nextElementSibling;
	if(i.value==""){
		j.style.display="flex"
	}
	else{
		j.style.display="none"	
	}
}
function XIIDIP(){
	var x=document.getElementById("XIIopen").checked;
	var d=document.getElementById("dipopen").checked;
	if(x==false && d==false){
		document.getElementById("specError").style.display="block";
		return false;
	}
	else{
		document.getElementById("specError").style.display="none";
		return true;	
	}
}

function SSCDeg(){
	var x=document.getElementById("inDeg1").checked;
	var d=document.getElementById("inDeg2").checked;
	if(x==true || d==true){
		document.getElementById("errorDEGREE").style.display="none";
		return true;
	}
	else{
		document.getElementById("errorDEGREE").style.display="block";
		return false;
	}
}
function sunilgofun(){
	var k=validate();
	if(k)
		document.getElementById("sunilgo").setAttribute("href","sunil2.html");
	else
		document.getElementById("sunilgo").setAttribute("href","#");
}
