var helloBye = function(req, res){
  res.write('hello bye');
  res.end();
}

module.exports = helloBye;