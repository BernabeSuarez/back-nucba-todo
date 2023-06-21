import { Router } from 'express'
import { createTodo, deleteTodo, getTodo, updateTodo } from '../controllers/todoControllers.js'

const router = Router()

router.get('/todos', getTodo)
router.post('/todo', createTodo)
router.put('/todo/:id', updateTodo)
router.delete('/todo/:id', deleteTodo)

export default router