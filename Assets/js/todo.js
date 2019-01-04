$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
});
$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
})
$("input").keypress(function(event){
	if (event.which === 13) {
		//Cogemos el texto que queremos añadir
		let todoText = $(this).val();
		//limpiamos el input
		$(this).val("");
		//Creamos un nuevo li y meterlo dentro del ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});
$(".fa-plus").click(function(){
	$("input").fadeToggle();
});