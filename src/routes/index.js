import express from "express"
import { getAllAssignees, createController, updateController, deleteController } from "../controllers/index.js"

const router = express.Router()

router.get('/', getAllAssignees )
router.post('/create', createController)
router.put('/update/:id', updateController )
router.delete('/delete/:id', deleteController )

export default router