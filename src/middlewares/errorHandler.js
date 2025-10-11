/* eslint-disable-next-line no-unused-vars */
const errorHandler = (error, req, res, next) => {
  res.status(500).json({
    error: error.message,
  });
};

export default errorHandler;
