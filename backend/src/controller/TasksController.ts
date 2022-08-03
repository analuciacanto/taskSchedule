import { AppDataSource } from "../data-source"
import {Tasks} from "../entity/Tasks"
import {Request, Response} from 'express'

const tasksRepository = AppDataSource.getRepository(Tasks)

export const getTasks = async (request: Request, response: Response) => {
    const tasks = await tasksRepository.find();
    return response.send(tasks);
}   

export const getTask = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id, 10)
    const task = await tasksRepository.findOne({where: {id: id}});
    return response.json(task);
}

export const updateTask = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id, 10)
    const task = await tasksRepository.update(id, request.body);

    if (task.affected ===  1){
        const taskUpdated = await tasksRepository.findOne({where: {id: id}});
        return response.json(taskUpdated);
    }
    return response.status(404).json({message: "Not Found"})
}

export const saveTask = async (request: Request, response: Response) => {
    const task = await tasksRepository.save(request.body);
    return response.json(task);
}

export const removeTask = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id, 10)
    const task = await tasksRepository.delete(id);

    if (task.affected ===  1){
        return response.json({message: "Task removed"})
    }
    return response.status(404).json({message: "Not Found"})
}