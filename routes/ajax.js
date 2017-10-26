$(function(){
	$.ajax({
		type:"POST",
		url:"http://localhost:3000/jgr",
		dataType:"json",
		success:function(e){
			for(var i in e){
				$("div").append("<p>"+e[i]+"</p>")
			}
		}
	});
})
