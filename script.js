function firstChar(text) {
  // your code here
let trimedStr = text.trim();
	if(trimedStr === "")
		return "";
	return trimedStr[0];
	
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));

