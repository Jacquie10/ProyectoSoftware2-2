import Char from '../models/Char'

export const renderChar = async (req, res) =>
{
    const chars = await Char.find().lean()

    console.log(chars[0])

    res.render('charla', {chars : chars})
}

export const createChar = async (req, res) =>
{
    try {
        const char = Char(req.body)

        await char.save()
    
        res.redirect("/charla")
    } catch (error) {
        console.log(error)
    }
}

export const renderCharEdit = async(req, res) =>
{
    try {
        const char = await Char.findById(req.params.id).lean()
        res.render('edit/editChar', {char})
    } catch (error) {
        console.log(error.message)
    }
}

export const editChar = async (req, res) =>
{
    const {id} = req.params
    await Char.findByIdAndUpdate(id, req.body)
    res.redirect('/charla')
}

export const deleteChar = async (req, res) =>
{
    const {id} = req.params
    await Char.findByIdAndDelete(id)
    res.redirect('/charla')
}

export const charToggleDone = async(req, res) =>
{
    const {id} = req.params;
    const char = await Char.findById(id)
    char.done = !char.done;

    await char.save();

    res.redirect('/charla')
}