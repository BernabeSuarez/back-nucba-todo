import Todo from "../models/todo.js"

export const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)

    } catch (error) {
        console.log(error)
    }

}

export const createTodo = async (req, res) => {
    try {
        const item = new Todo(req.body)
        const saveItem = await item.save()
        res.status(200).json(saveItem)
    } catch (error) {
        console.log(error)
    }
}

export const updateTodo = async (req, res) => {
    try {
        const id = req.params.id
        const updateItem = await Todo.findByIdAndUpdate(id, { $set: req.body })
        res.send("Item Update").json({ "data": updateItem })
    } catch (error) {
        console.log(error)
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const id = req.params.id
        const deleteItem = await Todo.findByIdAndDelete(id)
        res.json("Item Deleted")
    } catch (error) {

    }
}