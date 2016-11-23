$(document).ready(function(){
	var buildings;	
    $("#saveApplication").click(function(){
        addReqs(student_id,"hello",building[0].id, function(response) {
			if(!response.success){
			console.log("error getting buildings"+response.error_message);
			}else{
			buildings = response.buildings;
			console.log("**Sucessfully fetched buildings!**");
			}	
        });
	});
	
	$(".page_section li").click(function(){
		$(".page_section li").removeClass("selected");
		$(this).addClass("selected").siblings();
	});
	
	
});