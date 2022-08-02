import {Router, Request, Response} from 'express'
import {getTasks, saveTask, getTask, updateTask, removeTask} from './controller/TasksController'
const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Hello'})

});

routes.get("/tasks", getTasks)
routes.get("/task/:id", getTask)
routes.post("/tasks", saveTask)
routes.put("/task/:id", updateTask)
routes.delete("/task/:id", removeTask)

export default routes;