module.exports = function (err, req, res, next) {
	// only providing error in development
   const errorResponse = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.json(errorResponse);
};
