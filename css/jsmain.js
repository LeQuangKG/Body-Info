var line1i;
var line2i;
var line3i;
var iInterval = [];
/* line1 */
var listAction1 = [60,105,1,1];
var listAction2 = [117,55,1,1];
var listAction3 = [322,27,1,1];
var flag1 = false;
var flag2 = false;
var flag3 = false;
var divpopup;
window.onload = function(){
	document.body.addEventListener('touchmove',function(e){e.preventDefault();},false);
	var mainIpad = document.getElementById("mainIpad");
	
	var line1 = document.getElementById("line1");
	line1i = line1.getElementsByClassName("line1i");
	
	var line2 = document.getElementById("line2");
	line2i = line2.getElementsByClassName("line2i");
	
	var line3 = document.getElementById("line3");
	line3i = line3.getElementsByClassName("line3i");
	
	//document.body.addEventListener("click",openHead,false);
	//document.body.addEventListener("click",openBody,false);
	document.body.addEventListener("click",openLeg,false);
}

function openHead(e){
	e.preventDefault();
	clearInterval(iInterval[0]);
	var temp= 0;
	if(!flag1){
		flag1 = true;
		iInterval[0] = setInterval(function(){
			switch (temp){
				case 0:
					line1i[temp].style.width =  listAction1[temp]+ "px";
					line1i[temp].style.top =   "85px";
				break;
				case 1: 
					line1i[temp].style.width =  listAction1[temp]+ "px";
				break;
				
				case 2:
					line1i[temp].style.display =  "block";
					line1i[temp+1].style.display = "block";
				break;
				case 3:
					line1i[temp].style.left = "742px";
					line1i[temp].style.opacity = 1;
				break;
				default: clearInterval(iInterval[0]); break;	
			}
			temp++;
		},200);
	} else {
		
		iInterval[0] = setInterval(function(){
			switch (temp){
				case 0:
					line1i[3].style.opacity = 0;
					line1i[3].style.display = "none";
					line1i[2].style.display =  "none";
				break;
				case 1: 
					line1i[1].style.width =  "0px";
				break;
				
				case 2:
					line1i[0].style.width =  "0px";
					line1i[0].style.top =   "97px";
					flag1 = false;
				break;
				default: clearInterval(iInterval[0]); break;	
			}
			temp++;
		},200);
	}
}


function openBody(e){
	e.preventDefault();
	clearInterval(iInterval[0]);
	var temp= 0;
	if(!flag2){
		flag2 = true;
		iInterval[0] = setInterval(function(){
			switch (temp){
				case 0:
					line2i[temp].style.width =  listAction2[temp]+ "px";
					line2i[temp].style.top =   "257px";
					line2i[temp].style.left =   "577px";
				break;
				case 1: 
					line2i[temp].style.width =  listAction2[temp]+ "px";
				break;
				
				case 2:
					line2i[temp].style.display =  "block";
					line2i[temp+1].style.display = "block";
				break;
				case 3:
					line2i[temp].style.left = "742px";
					line2i[temp].style.opacity = 1;
				break;
				default: clearInterval(iInterval[0]); break;	
			}
			temp++;
		},200);
	} else {
		iInterval[0] = setInterval(function(){
			switch (temp){
				case 0:
					line2i[3].style.opacity = 0;
					line2i[3].style.display = "none";
					line2i[2].style.display =  "none";
				break;
				case 1: 
					line2i[1].style.width =  "0px";
				break;
				
				case 2:
					line2i[0].style.width =  "0px";
					line2i[0].style.top =   "292px";
					line2i[0].style.left =   "587px";

					flag2 = false;
				break;
				default: clearInterval(iInterval[0]); break;	
			}
			temp++;
		},200);
	}
}


function openLeg(e){
	
	e.preventDefault();
	clearInterval(iInterval[0]);
	var temp= 0;
	if(!flag3){
		flag3 = true;
		iInterval[0] = setInterval(function(){
			switch (temp){
				case 0:
					line3i[temp].style.width =  listAction3[temp]+ "px";
					line3i[temp].style.top =   "445px";
					line3i[temp].style.left =   "497px";
				break;
				case 1: 
					line3i[temp].style.width =  listAction3[temp]+ "px";
				break;
				
				case 2:
					console.log(line3i[temp]);
					line3i[temp].style.display =  "block";
					line3i[temp+1].style.display = "block";
				break;
				case 3:
					line3i[temp].style.left = "743px";
					line3i[temp].style.opacity = 1;
				break;
				default: clearInterval(iInterval[0]); break;	
			}
			temp++;
		},200);
	} else {
		iInterval[0] = setInterval(function(){
			switch (temp){
				case 0:
					line3i[3].style.opacity = 0;
					line3i[3].style.display = "none";
					line3i[2].style.display =  "none";
				break;
				case 1: 
					line3i[1].style.width =  "0px";
				break;
				
				case 2:
					line3i[0].style.width =  "0px";
					line3i[0].style.left =   "605px";
					line3i[0].style.top =   "596px";
					flag3 = false;
				break;
				default: clearInterval(iInterval[0]); break;	
			}
			temp++;
		},200);
	}

}