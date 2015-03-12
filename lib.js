ReactiveVar.prototype.push = function(value) {
  var array = this.curValue;
  if (!_.isArray(array)) array = [array];
  array.push(value);
  this.set(array);
  return;
};

ReactiveVar.prototype.pull = function(value) {
  var array = this.curValue;
  if (!_.isArray(array)) array = [array];
  array = _.without(array, value);
  this.set(array);
  return;
};

ReactiveVar.prototype.toggle = function(value) {
  var array = this.curValue;
  if (!_.isArray(array)) array = [array];
  if (_.contains(array, value)) {
    this.pull(value);
  } else {
    this.push(value);
  }
  return;
};
