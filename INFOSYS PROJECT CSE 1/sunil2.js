var twob1=document.getElementById("quesTwoOneYes");
var twob2=document.getElementById("quesTwoOneNo");
var mainPagecount=0;
var twoOnecount=0;
var twoTwocount=0;
var twoThreecount=0;
var twoFourcount=0;
var threeOnecount=0;
var threeTwocount=0;
var threeThreecount=0;
var threeFourcount=0;
function displayFirst(){
    document.getElementById("calenderone").style.display="inline-block";
    twoOnecount=twoOnecount+1;
    document.getElementById("quesOneError").style.display="none";
}
function displaySecond(){
    document.getElementById("calendertwo").style.display="inline-block";
    twoTwocount=twoTwocount+1;
    
}
function displayThird(){
    document.getElementById("calenderthree").style.display="inline-block";
    twoThreecount=twoThreecount+1;
}
function displayFourth(){
    document.getElementById("calenderfour").style.display="inline-block";
    twoFourcount=twoFourcount+1;
}
function hideFirst(){
    document.getElementById("calenderone").style.display="none";
    twoOnecount=twoOnecount+1;
}
function hideSecond(){
    document.getElementById("calendertwo").style.display="none";
    twoTwocount=twoTwocount+1;
}
function hideThird(){
    document.getElementById("calenderthree").style.display="none";
    twoThreecount=twoThreecount+1;
}
function hideFourth(){
    document.getElementById("calenderfour").style.display="none";
    twoFourcount=twoFourcount+1;
}
function threeFirstD(){
    document.getElementById("dateOne").style.display="inline-block";
    threeOnecount=threeOnecount+1;
}
function threeFirstH(){
    document.getElementById("dateOne").style.display="none";
    threeOnecount=threeOnecount+1;
}
function threeSecondD(){
    document.getElementById("dateTwo").style.display="inline-block";
    threeTwocount=threeTwocount+1;
}
function threeSecondH(){
    document.getElementById("dateTwo").style.display="none";
    threeTwocount=threeTwocount+1;
}
function threeThirdD(){
    document.getElementById("dateThree").style.display="inline-block";
    threeThreecount=threeThreecount+1;
}
function threeThirdH(){
    document.getElementById("dateThree").style.display="none";
    threeThreecount=threeThreecount+1;
}
function threeFourthD(){
    document.getElementById("dateFour").style.display="inline-block";
    threeFourcount=threeFourcount+1;
}
function threeFourthH(){
    document.getElementById("dateFour").style.display="none";
    threeFourcount=threeFourcount+1;
}
function displayTwoThree(){
    document.getElementById("questwo").style.display="block";
    document.getElementById("questhree").style.display="block";
    document.getElementById("mainpageError").style.display="none";
    document.getElementById("requiredText").style.visibility="hidden";
    mainPagecount=mainPagecount+1;
}
function hideTwoThree(){
    document.getElementById("questwo").style.display="none";
    document.getElementById("questhree").style.display="none";
    document.getElementById("mainpageError").style.display="none";
    document.getElementById("requiredText").style.visibility="hidden";
    mainPagecount=mainPagecount+1;
    //document.getElementById("quesOneNo").clicked=true;
}
function mainPageErrors(){
    return true;
    var button1=document.getElementById("quesOneYes").clicked;
    var button2=document.getElementById("quesOneNo").clicked;
    if((!button1==true || !button2==true)){
        document.getElementById("mainpageError").style.display="block";
        document.getElementById("requiredText").style.visibility="visible";
        return false;
    }
    return true;
}
function errormessage(){
    if(mainPagecount>0){
        document.getElementById("mainpageError").style.display="none";
        document.getElementById("requiredText").style.visibility="hidden";
        if(twoOnecount==0 || twoTwocount==0 || twoThreecount==0 || twoFourcount==0 || threeOnecount==0 || threeTwocount==0 || threeThreecount==0 || threeFourcount==0){
            document.getElementById("secondpageerrors").style.display="block";
        }
        else{
            document.getElementById("secondpageerrors").style.display="none";
        }
        if(twoOnecount==0){
            
            document.getElementById("quesTwoOne").style.display="block";
            document.getElementById("dateErrorMsgOne").style.visibility="visible";
        }
        else{
            document.getElementById("dateErrorMsgOne").style.visibility="hidden";
            document.getElementById("quesTwoOne").style.display="none";
            var d=document.getElementById("dateTwoOne");
            if(!d.value){
                document.getElementById("quesTwoOneDate").style.display="block";  
                document.getElementById("secondpageerrors").style.display="block";
            }
            else{
                document.getElementById("quesTwoOneDate").style.display="none"; 
            }
        }
        if(twoTwocount==0){

            document.getElementById("quesTwoTwo").style.display="block";
            document.getElementById("dateErrorMsgTwo").style.visibility="visible";
        }
        else{
            document.getElementById("quesTwoTwo").style.display="none";
            document.getElementById("dateErrorMsgTwo").style.visibility="hidden";
            var d=document.getElementById("dateTwoTwo");
            if(!d.value){
                document.getElementById("secondpageerrors").style.display="block";
                document.getElementById("quesTwoTwoDate").style.display="block";  
            }
            else{
                document.getElementById("quesTwoTwoDate").style.display="none"; 
            }
        }
        if(twoThreecount==0){
            document.getElementById("quesTwoThree").style.display="block";
            document.getElementById("dateErrorMsgThree").style.visibility="visible";
        }
        else{
            document.getElementById("dateErrorMsgThree").style.visibility="hidden";
            document.getElementById("quesTwoThree").style.display="none";
            var d=document.getElementById("dateTwoThree");
            if(!d.value){
                document.getElementById("quesTwoThreeDate").style.display="block";  
                document.getElementById("secondpageerrors").style.display="block";
            }
            else{
                document.getElementById("quesTwoThreeDate").style.display="none"; 
            }
        }
        if(twoFourcount==0){
            
            document.getElementById("quesTwoFour").style.display="block";
        }
        else{
            
            document.getElementById("quesTwoFour").style.display="none";
            var d=document.getElementById("dateTwoFour");
            if(!d.value){
                document.getElementById("dateErrorMsgFour").style.visibility="visible";
                document.getElementById("quesTwoFourDate").style.display="block";  
                document.getElementById("secondpageerrors").style.display="block";
            }
            else{
                document.getElementById("dateErrorMsgFour").style.visibility="hidden";
                document.getElementById("quesTwoFourDate").style.display="none"; 
            }
        }
        if(threeOnecount==0){  
            document.getElementById("quesThreeOne").style.display="block";
        }
        else{
            document.getElementById("quesThreeOne").style.display="none";
            var dd=document.getElementById("dates");
            if(!dd.value){
                document.getElementById("quesThreeOneDate").style.display="block";  
                document.getElementById("secondpageerrors").style.display="block";
            }
            else{
                document.getElementById("quesThreeOneDate").style.display="none"; 
            }
        }
        if(threeTwocount==0){
            document.getElementById("quesThreeTwo").style.display="block";
        }
        else{
            document.getElementById("quesThreeTwo").style.display="none";
            var dt=document.getElementById("dateThreeTwo");
            if(!dt.value){
                document.getElementById("quesThreeTwoDate").style.display="block";  
                document.getElementById("secondpageerrors").style.display="block";
            }
            else{
                document.getElementById("quesThreeTwoDate").style.display="none"; 
            }
        }
        if(threeThreecount==0){
            document.getElementById("quesThreeThree").style.display="block";
        }
        else{

            document.getElementById("quesThreeThree").style.display="none";
            var df=document.getElementById("dateThreeThree");
            if(!df.value){
                document.getElementById("quesThreeThreeDate").style.display="block"; 
                document.getElementById("secondpageerrors").style.display="block"; 
            }
            else{
                document.getElementById("quesThreeThreeDate").style.display="none"; 
            }
        }
        if(threeFourcount==0){

            document.getElementById("quesThreeFour").style.display="block";
        }
        else{
            document.getElementById("quesThreeFour").style.display="none";
            var dg=document.getElementById("dateThreeFour");
            if(!dg.value){
                document.getElementById("quesThreeFourDate").style.display="block";  
                document.getElementById("secondpageerrors").style.display="block";
            }
            else{
                document.getElementById("quesThreeFourDate").style.display="none"; 
            }
        }
    }
    
}
//document.getElementById("nextButton").addEventListener('click',mainPageErrors);
document.getElementById("nextButton").addEventListener('click',errormessage);
function sunilgofun2(){
    var k=mainPageErrors();
    if(k){
        document.getElementById("sunilgo2").setAttribute("href","form.html")
    }
    else{
     document.getElementById("sunilgo2").setAttribute("href","#");   
    }

}
