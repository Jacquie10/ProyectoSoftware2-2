import Not from '../models/Not'

export const renderNot = async (req, res) =>
{
    const nots = await Not.find().lean()

    console.log(nots[0])

    res.render('noticia', {nots : nots})
}

export const createNot = async (req, res) =>
{
    try {
        const not = Not(req.body)

        await not.save()
    
        res.redirect("/noticia")
    } catch (error) {
        console.log(error)
    }
}

export const renderNotEdit = async(req, res) =>
{
    try {
        const not = await Not.findById(req.params.id).lean()
        res.render('edit/editNot', {not})
    } catch (error) {
        console.log(error.message)
    }
}

export const editNot = async (req, res) =>
{
    const {id} = req.params
    await Not.findByIdAndUpdate(id, req.body)
    res.redirect('/noticia')
}

export const deleteNot = async (req, res) =>
{
    const {id} = req.params
    await Not.findByIdAndDelete(id)
    res.redirect('/noticia')
}

export const notToggleDone = async(req, res) =>
{
    const {id} = req.params;
    const not = await Not.findById(id)
    not.done = !not.done;

    await not.save();

    res.redirect('/noticia')
}