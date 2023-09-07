const router = require('express').Router();
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/courses
router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getUser).delete(deleteUser).put(updateUser);

// router.route('/:userId/friends').post(addFriend);

router.route('/:userId/friends/:friendId').put(addFriend).delete(removeFriend);

// /api/courses/:courseId
