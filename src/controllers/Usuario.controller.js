import Usuario from '../models/Usuario'

export const renderUsuario = async (req, res) =>
{
    const usuarios = await Usuario.find().lean()

    console.log(usuarios[0])

    res.render('usuario', {usuarios : usuarios})
}

export const renderUsuarioPerfil = async (req, res) =>
{
    const perfiles = await Usuario.find({"password":"poiuyt","email":"reenma48@gmail.com"})

   res.render('perfil', {perfiles : perfiles})
}




export const createUsuario = async (req, res) =>
{
    try {
        const usuario = Usuario(req.body)

        await usuario.save()
    
        res.redirect("/usuario")
    } catch (error) {
        console.log(error)
    }
}

export const renderUsuarioEdit = async(req, res) =>
{
    try {
        const usuario = await Usuario.findById(req.params.id).lean()
        res.render('edit/editUsuario', {usuario})
    } catch (error) {
        console.log(error.message)
    }
}
export const renderPerfilEdit = async(req, res) =>
{
    try {
        const usuario = await Usuario.findById(req.params.id).lean()
        res.render('perfil', {usuario})
    } catch (error) {
        console.log(error.message)
    }
}


export const editUsuario = async (req, res) =>
{
    const {id} = req.params
    console.log(req.params)
    await Usuario.findByIdAndUpdate(id, req.body)
    res.redirect('/usuario')
}
export const editPerfil = async (req, res) =>
{
    const {id} = req.params
    console.log(req.params)
    await Usuario.findByIdAndUpdate(id, req.body)
    res.redirect('/perfil')
}

export const deleteUsuario = async (req, res) =>
{
    const {id} = req.params

    await Usuario.findByIdAndDelete(id)
    res.redirect('/usuario')
}

export const usuarioToggleDone = async(req, res) =>
{
    const {id} = req.params;
    const usuario = await Usuario.findById(id)
    usuario.done = !usuario.done;

    await usuario.save();

    res.redirect('/usuario')
}