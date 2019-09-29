function lokTime(){
	var today= new Date();  		//获取Date时间
	var y = today.getFullYear();	//获取时间的年份
	var mo= today.getMonth()+1;		//获取时间的月份    注意: js的月份从0~11,所以后面＋1
	var d = today.getDate();		//获取时间的日期
	var h = today.getHours();		//获取时间的小时
	var m = today.getMinutes();		//获取时间的分钟
	var s = today.getSeconds();		//获取时间的秒数
	
	mo = chaTime(mo);
	d  = chaTime(d);
	m  = chaTime(m);
	s  = chaTime(s);
	
	document.getElementById("time").innerHTML=y+"-"+mo+"-"+d+"</br>"+h+":"+m+":"+s;
	setTimeout(function(){
		lokTime();
	},300);	
}

function chaTime(i){
	if(i<10){
		i="0"+i;
	}
	return i;
}
