
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