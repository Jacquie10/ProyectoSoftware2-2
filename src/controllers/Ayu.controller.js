import Ayu from '../models/Ayu'

export const renderAyu = async (req, res) =>
{
    const ayus = await Ayu.find().lean()

    console.log(ayus[0])
 
    res.render('ayuda', {ayus : ayus})
}

export const createAyu = async (req, res) =>
{
    try {
        const ayu = Ayu(req.body)

        await ayu.save()
    
        res.redirect("/ayuda")
    } catch (error) {
        console.log(error)
    }
}

export const renderAyuEdit = async(req, res) =>
{
    try {
        const ayu = await Ayu.findById(req.params.id).lean()
        res.render('edit/editAyu', {ayu})
    } catch (error) {
        console.log(error.message)
    }
}

export const editAyu = async (req, res) =>
{
    const {id} = req.params
    await Ayu.findByIdAndUpdate(id, req.body)
    res.redirect('/ayuda')
}

export const deleteAyu = async (req, res) =>
{
    const {id} = req.params
    await Ayu.findByIdAndDelete(id)
    res.redirect('/ayuda')
}

export const ayuToggleDone = async(req, res) =>
{
    const {id} = req.params;
    const ayu = await Ayu.findById(id)
    ayu.done = !ayu.done;

    await ayu.save();

    res.redirect('/ayuda')
}