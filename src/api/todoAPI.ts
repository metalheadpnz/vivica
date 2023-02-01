import {instance} from "./instance";

export const todosAPI = {
    getTodos: () => {
        return instance.get('/todos')
    }
}