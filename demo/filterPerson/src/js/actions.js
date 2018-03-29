var oInp = document.getElementById("inp"),
	oAge = document.getElementById("age"),
	oMale = document.getElementById("male"),
	oFemale = document.getElementById("female"),
	oAll = document.getElementById("all");
var actions = [
	{doc: oInp, type: "filterName"},
	{doc: oAge, type: "addAge"},
	{doc: oMale, type: "filterSex", prame: "male"},
	{doc: oFemale, type: "filterSex", prame: "female"},
	{doc: oAll, type: "filterSex", prame: "all"}
];