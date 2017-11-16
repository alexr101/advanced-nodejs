const printStars = (amount, header) => {
  var stars = "*".repeat(stars)
  console.log(stars);
  console.log(header);
  console.log(stars)
}

console.log("require.main")
console.log(require.main)

if(require.main == module) {
  printStars(process.argv[2], process.argv[3]);
} else {
  module.exports = printStars;
}