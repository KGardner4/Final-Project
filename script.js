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
	});

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