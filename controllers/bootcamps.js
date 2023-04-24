// @desc gell all bootcamp
// @route GET api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Show all bootcamps'
  });
};

// @desc gell single bootcamp
// @route GET api/v1/bootcamps/:id
// @access Private
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Show bootcamps ${req.params.id}`
  });
};

// @desc create single bootcamp
// @route GET api/v1/bootcamps
// @access Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `create new bootcamps`
  });
};

// @desc update single bootcamp
// @route GET api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `update new bootcamps ${req.params.id}`
  });
};

// @desc delete single bootcamp
// @route GET api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `delet bootcamps ${req.params.id}`
  });
};
