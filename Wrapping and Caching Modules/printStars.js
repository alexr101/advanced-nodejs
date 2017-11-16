const printStars = (amount, header) => {
  var stars = ""

  for (var index = 0; index < amount; index++) {
    stars += "*"
    
  }
  // var stars = "*".repeat(stars)

  console.log(stars)
  console.log(header)
  console.log(stars)
}

// console.log("require.main")
// console.log(require.main)

if(require.main == module) {
  printStars(process.argv[2], process.argv[3]);
} else {
  module.exports = printStars;
}