$(document).ready(function() {
	
	
	$("#q1true").click(function() {
		console.log("hi");
		$("#q1result").html("Diligent");
	});
		
	$("#q1false").click(function() {
		console.log("hi");
		$("#q1result").html("hardworking");
	});
		
	$("#q2true").click(function() {
		console.log("hi");
		$("#q2result").html("childish");
	});
		
	$("#q2false").click(function() {
		console.log("hi");
		$("#q2result").html("focus");
	});
	
	$("#q3true").click(function() {
		console.log("hi");
		$("#q3result").html("sensitive");
	});
	
	$("#q3false").click(function() {
		console.log("hi");
		$("#q3result").html("cold-hearted");
	})
	
	$("button").click(function(){
		//$("input:text").val("Search");
		
		var search_word = $("#search_input").val();
		console.log(search_word);
		
		$.ajax({url: "https://api.qloo.com/suggestions?qloos.filter.category=fashion/brands&pageSize=30&page=1&query=" + search_word, success: function(result){
			console.log(result);
			var id = result["body"]["suggestions"][0]["id"];
			console.log(id);
			
			$.ajax({url: "https://api.qloo.com/" + id + "/similar?pageSize=5", success: function(result){
			console.log(result);
			
				var arr = result["body"]["qloos"];
				for (var i=0; i<arr.length; i++) {
					var item = result["body"]["qloos"][i];
					var item_title = item["title"];
					var item_disamb = item["disambiguation"];
					console.log(item_title);
					
					// display result in HTML
					$("#fasion").html("");
					$("#fashion").append("<h4>" +item_title + "</h4>");
					$("#fashion").append("<h5>" +item_disamb + "</h5>");
				}
			}});
			
		}});
		
		
	});
	
	
	
});