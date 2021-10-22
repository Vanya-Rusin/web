function* generateRand(min, max) {
	for (let i = min; i <= max; i++) {
		let randomValue = Math.floor(min + Math.random() * (max + 1 - min));
    yield randomValue;
  }
}
const typeArray = [...generateRand(10, 20)];

const newTypeArray = typeArray.filter(value => value > typeArray[0]);

console.log(typeArray);
console.log(newTypeArray);