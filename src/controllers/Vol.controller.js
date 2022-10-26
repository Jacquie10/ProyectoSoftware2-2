import Vol from '../models/Vol'

export const renderVol = async (req, res) =>
{
    const vols = await Vol.find().lean()

    console.log(vols[0])

    res.render('voluntariado', {vols : vols})
}

export const createVol = async (req, res) =>
{
    try {
        const vol = Vol(req.body)

        await vol.save()
    
        res.redirect("/voluntariado")
    } catch (error) {
        console.log(error)
    }
}

export const renderVolEdit = async(req, res) =>
{
    try {
        const vol = await Vol.findById(req.params.id).lean()
        res.render('edit/editVol', {vol})
    } catch (error) {
        console.log(error.message)
    }
}

export const editVol = async (req, res) =>
{
    const {id} = req.params
    await Vol.findByIdAndUpdate(id, req.body)
    res.redirect('/voluntariado')
}

export const deleteVol = async (req, res) =>
{
    const {id} = req.params
    await Vol.findByIdAndDelete(id)
    res.redirect('/voluntariado')
}

export const volToggleDone = async(req, res) =>
{
    const {id} = req.params;
    const vol = await Vol.findById(id)
    vol.done = !vol.done;

    await vol.save();

    res.redirect('/voluntariado')
}