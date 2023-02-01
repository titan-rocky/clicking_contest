console.log("Fc");
let count=0;
let highscore=0;
let defaulttime=60;

const button=document.getElementById("clickme");
const res=document.getElementById("reset");
const label=document.getElementById("counter");
const timesec=document.getElementById("timesec");
const hsclabel=document.getElementById("highsc");


let time=defaulttime;
timesec.textContent=time+"s";
function timer()
{
	if (time)
	{time--;timesec.textContent=time+"s";}
	else
	{
		if (highscore<count)
		{
			highscore=count;
			hsclabel.textContent="High Score : "+highscore;
		}

		button.disabled=true;
		clearInterval(timer);
	}
	
}

var a=0;
var timerrun=0;
function countg()
{
	if (a==0)
	{
		timerrun=setInterval(timer,1000);
		a=1;
	}
	count++;
	if (count>highscore)
	{
		label.style["animation"]="firetext 0.5s linear 0s infinite alternate"
	}
	else
	{
		label.style.color="#e1d9cf"
	}
	label.textContent="Count : "+count;
	console.log(count);
}
button.addEventListener("click",countg);

function resettime()
{
	count=0;time=defaulttime;
	clearInterval(timerrun);
	timesec.textContent=time+"s";
	button.disabled=false;
	a=0;
}

res.addEventListener("click",resettime)
























ggwp