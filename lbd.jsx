let score=JSON.parse(JSON.fetch("scores.json"))

const a=document.getElementById('lboard')

const boarddisplay=
(
	for (i:score)
	{
		<span class="scorename">{i} : {score[i]}</span>
	}

);
