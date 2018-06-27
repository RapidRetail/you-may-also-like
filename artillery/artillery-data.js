const generateRandomId = (userContext, events, done) => {
  const min = 5000000;
  const max = 10000000;

  const id = Math.floor(Math.random() * ((max - min) + 1)) + min;

  userContext.vars.id = id;

  return done();
};

module.exports = {
  generateRandomId
};
