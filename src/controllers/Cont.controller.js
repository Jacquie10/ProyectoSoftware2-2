import Cont from '../models/Cont'

export const renderCont = async (req, res) =>
{
    const conts = await Cont.find().lean()

    console.log(conts[0])

    res.render('contenedor', {conts : conts})
}

export const createCont = async (req, res) =>
{
    try {
        const cont = Cont(req.body)

        await cont.save()
    
        res.redirect("/contenedor")
    } catch (error) {
        console.log(error)
    }
}

export const renderContEdit = async(req, res) =>
{
    try {
        const cont = await Cont.findById(req.params.id).lean()
        res.render('edit/editCont', {cont})
    } catch (error) {
        console.log(error.message)
    }
}

export const editCont = async (req, res) =>
{
    const {id} = req.params
    await Cont.findByIdAndUpdate(id, req.body)
    res.redirect('/contenedor')
}

export const deleteCont = async (req, res) =>
{
    const {id} = req.params
    await Cont.findByIdAndDelete(id)
    res.redirect('/contenedor')
}

export const contToggleDone = async(req, res) =>
{
    const {id} = req.params;
    const cont = await Cont.findById(id)
    cont.done = !cont.done;

    await cont.save();

    res.redirect('/contenedor')
}