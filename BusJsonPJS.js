function showEvents(data){
	var newContent='';
	for(var i=0; i<data.schedules.length;i++){
		newContent+='<div class="destination">';
		newContent+='<img src="'+data.schedules[i].img+'"';
		newContent+='alt="'+data.schedules[i].destination+'" />';
		newContent+='<p><b>'+data.schedules[i].destination+'</b><br/>';
		newContent+=data.schedules[i].date+'<br/>';
		newContent+=data.schedules[i].price+'</p></div>';
	}
	document.getElementById('content').innerHTML=newContent;
}
