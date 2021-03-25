import express from 'express'
import { userList } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(userList, protect)


export default router