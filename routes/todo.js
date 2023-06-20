import { Router } from 'express'
import { createTodo } from '../controllers/todoControllers.js'

const router = Router()

router.get('/', (req, res) => {
    res.send('Server running OK!')
})

router.post('/todo', createTodo)

export default router