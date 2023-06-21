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
        const updateItem = await Todo.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.send("Item Update")
    } catch (error) {
        console.log(error)
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const deleteItem = await Todo.findByIdAndDelete(req.params.id)
        res.send("Deleted")
    } catch (error) {

    }
}