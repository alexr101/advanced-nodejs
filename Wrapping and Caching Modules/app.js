var stars = require("./printStars");

stars(15, "STARRS");


// Node js caches modules so requiring it twice won't run the code again.
// You can delete cache with the methods below
var chachedAstroBoy = require("./requireCache");
// console.log(require.cache);

// Solution1 :not most efficient
// delete require.cache["C:\\Users\\alexp\\Documents\\more-about-cloned\\node\\advanced-nodejs\\Wrapping and Caching Modules\\requireCache.js"];
var chachedAstroBoy = require("./requireCache");

// SOLUTION 2
// Wrap the log under module.exports, and call it from here

require('./cachedAstroBoy')();
require('./cachedAstroBoy')();

