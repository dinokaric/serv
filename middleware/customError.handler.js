function customErrorHandler(showStack) {

  return function (err, req, res, next) {
    if (showStack) 
      res.status(500).send(err.stack);
    else
      res.status(500).send("Something went wrong");
  }
}

export default customErrorHandler;