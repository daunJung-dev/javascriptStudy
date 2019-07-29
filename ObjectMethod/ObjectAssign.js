function assign(target, source) {
  for (let i = 0; i < Object.keys(source).length; i++) {
    target[Object.keys(source)[i]] = Object.values(source)[i];
  }
  return target;
}

module.exports = assign;
