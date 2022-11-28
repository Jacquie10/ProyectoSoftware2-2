import { Router} from 'express'
import {renderTask, createTask, renderTaskEdit, editTask, deleteTask, taskToggleDone} from '../controllers/task.controller'
import {renderRepo, createRepo, renderRepoEdit, editRepo, deleteRepo, repoToggleDone} from '../controllers/Repo.controller'
import {renderVol, createVol, renderVolEdit, editVol, deleteVol, volToggleDone} from '../controllers/Vol.controller'
import {renderAyu, createAyu, renderAyuEdit, editAyu, deleteAyu, ayuToggleDone} from '../controllers/Ayu.controller'

import {renderChar, createChar, renderCharEdit, editChar, deleteChar, charToggleDone} from '../controllers/Char.controller'
import {renderCont, createCont, renderContEdit, editCont, deleteCont, contToggleDone} from '../controllers/Cont.controller'
import {renderEven, createEven, renderEvenEdit, editEven, deleteEven, evenToggleDone} from '../controllers/Even.controller'
import {renderNot, createNot, renderNotEdit, editNot, deleteNot, notToggleDone} from '../controllers/Not.controller'
import {renderUsuario, createUsuario, renderUsuarioEdit,renderPerfilEdit, editUsuario, editPerfil, deleteUsuario, renderUsuarioPerfil,  usuarioToggleDone} from '../controllers/Usuario.controller'

// CONTENEDORES
const router = Router()

//-----------------------------------------------------------------------------------------------------------------------------------
router.get('/', renderTask);
router.post('/tasks/add', createTask)
// MODIFICAR
router.get('/tasks/:id/edit', renderTaskEdit);
router.post('/tasks/:id/edit', editTask);
// ELIMINAR
router.get('/tasks/:id/delete', deleteTask);


//------------------------------------------------------------------------------------------------------------------------------------
   router.get('/repositorio', renderRepo);
   router.post('/repos/add', createRepo)
//MODIFICAR
   router.get('/repos/:id/edit', renderRepoEdit);
   router.post('/repos/:id/edit', editRepo);
// ELIMINAR
   router.get('/repos/:id/delete', deleteRepo);

//--------------------------------------------------------------------------------------------------------------------------------------
router.get('/voluntariado', renderVol);
router.post('/vols/add', createVol)
//MODIFICAR
 router.get('/vols/:id/edit', renderVolEdit);
 router.post('/vols/:id/edit', editVol);
// ELIMINAR
 router.get('/vols/:id/delete', deleteVol);

//---------------------------------------------------------------------------------------------------------------------------------
router.get('/ayuda', renderAyu);
router.post('/ayus/add', createAyu)
// MODIFICAR
router.get('/ayus/:id/edit', renderAyuEdit);
router.post('/ayus/:id/edit', editAyu);
// ELIMINAR
router.get('/ayus/:id/delete', deleteAyu);

//---------------------------------------------------------------------------------------------------------------------------------
router.get('/charla', renderChar);
router.post('/chars/add', createChar)
// MODIFICAR
router.get('/chars/:id/edit', renderCharEdit);
router.post('/chars/:id/edit', editChar);
// ELIMINAR
router.get('/chars/:id/delete', deleteChar);

//---------------------------------------------------------------------------------------------------------------------------------
router.get('/contenedor', renderCont);
router.post('/conts/add', createCont)
// MODIFICAR
router.get('/conts/:id/edit', renderContEdit);
router.post('/conts/:id/edit', editCont);
// ELIMINAR
router.get('/conts/:id/delete', deleteCont);

//---------------------------------------------------------------------------------------------------------------------------------
router.get('/evento', renderEven);
router.post('/evens/add', createEven);
// MODIFICAR
router.get('/evens/:id/edit', renderEvenEdit);
router.post('/evens/:id/edit', editEven);
// ELIMINAR
router.get('/evens/:id/delete', deleteEven);

//---------------------------------------------------------------------------------------------------------------------------------
router.get('/noticia', renderNot);
router.post('/nots/add', createNot);
// MODIFICAR
router.get('/nots/:id/edit', renderNotEdit);
router.post('/nots/:id/edit', editNot);
// ELIMINAR
router.get('/nots/:id/delete', deleteNot);
//---------------------------------------------------------------------------------------------------------------------------------
router.get('/usuario', renderUsuario);
router.get('/perfil', renderUsuarioPerfil);
router.post('/usuarios/add', createUsuario);
// MODIFICAR
router.get('/usuarios/:id/edit', renderUsuarioEdit);

router.get('/perfil/:id', renderPerfilEdit);
router.post('/perfil/:id/', editPerfil);


router.post('/usuarios/:id/edit', editUsuario);
// ELIMINAR
router.get('/usuarios/:id/delete', deleteUsuario);











//................................................................................................................................................
 router.get("/repositorio", (req,res) => {
    res.render("repositorio")
} );
router.get("/voluntariado", (req,res) => {
    res.render("voluntariado")
} );
router.get("/ayuda", (req,res) => {
    res.render("ayuda")
} );
router.get("/charla", (req,res) => {
    res.render("charla")
} );
router.get("/contenedor", (req,res) => {
    res.render("contenedor")
} );
router.get("/evento", (req,res) => {
    res.render("evento")
} );
router.get("/noticia", (req,res) => {
    res.render("noticia")
} );
router.get("/usuarios", (req,res) => {
    res.render("usuarios")
} );
router.get("/perfiles", (req,res) => {
    res.render("perfiles")
} );
router.get("/index", (req,res) => {
    res.render("index")
} );
   //--

// TOGGLE DONE
//router.get('/tasks/:id/toggleDone', taskToggleDone)








export default router;
