const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");

let users = require('../public/user.json')


module.exports.getAllUsers = async (req, res, next) => {
    try {
      const { limit, page } = req.query;
  
      res.status(200).json({ success: true, data: users.slice(0, limit) });
    } catch (error) {
      next(error);
    }
  };