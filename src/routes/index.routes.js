import { Router} from 'express'
import {renderTask, createTask, renderTaskEdit, editTask, deleteTask, taskToggleDone} from '../controllers/task.controller'

// CONTENEDORES
const router = Router()

router.get('/', renderTask);

router.post('/tasks/add', createTask)

// TOGGLE DONE
//router.get('/tasks/:id/toggleDone', taskToggleDone)

// MODIFICAR

router.get('/tasks/:id/edit', renderTaskEdit);

router.post('/tasks/:id/edit', editTask);


// ELIMINAR

router.get('/tasks/:id/delete', deleteTask);

router.get("/repositorio", (req,res) => {
    res.render("repositorio")
} );


export default router;