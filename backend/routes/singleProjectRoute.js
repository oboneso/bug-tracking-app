import express from 'express'
import { getProject, deleteProject } from '../controllers/projectController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/:id').get(protect, getProject)
router.route('/:id').delete(protect, deleteProject)

export default router