import Todo from "../models/todo.js"

export const createTodo = async (req, res) => {

    const item = new Todo(req.body)
    const saveItem = await item.save()
    res.status(200).json(saveItem)
}