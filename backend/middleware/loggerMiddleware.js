const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Continue to the next middleware
  };
  
  module.exports = logger;
  