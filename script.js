
$(document).ready (function() {

	var search_word = "dress";

	$.ajax({url: "https://api.qloo.com/suggestions?qloos.filter.category=fashion/brands&pageSize=30&page=1&query=" + search_word, success: function(result){
        //$("#div1").html(result);
		console.log(result);
    }});
	
	$.ajax({url: "https://api.qloo.com/qloos/FE5AACD4-7F2A-47CF-B622-4715D3C592E7/similar?pageSize=5", success: function(result){
        //$("#div1").html(result);
		console.log(result);
    }});

});