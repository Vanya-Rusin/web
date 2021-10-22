const selectArray = document.getElementById("measure1").options;
console.log(selectArray);

document.getElementById("action-button").addEventListener("click", () => {
  const inputValue = document.getElementById("action-input").value;
  let checkValue = inputValue.slice(0, 2).toUpperCase();

	
  for (let i = 0; i < selectArray.length; i++) {
		if (selectArray[i].outerHTML.includes(checkValue)) {
			selectArray[i].selected = true;
			document.getElementById("placeholder").innerHTML = selectArray[i].innerHTML;
    }
  }
});
 const areas = {
  02: "AB",
   03: "AC",
   04: "AE",
   05: "AH",
   06: "AM",

 };

function getArea(object, value) {
   return Object.keys(object).find((key) => object[key] === value);
 }