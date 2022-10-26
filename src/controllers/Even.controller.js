import Even from '../models/Even'

export const renderEven = async (req, res) =>
{
    const evens = await Even.find().lean()

    console.log(evens[0])

    res.render('evento', {evens : evens})
}

export const createEven = async (req, res) =>
{
    try {
        const even = Even(req.body)

        await even.save()
    
        res.redirect("/evento")
    } catch (error) {
        console.log(error)
    }
}

export const renderEvenEdit = async(req, res) =>
{
    try {
        const even = await Even.findById(req.params.id).lean()
        res.render('edit/editEven', {even})
    } catch (error) {
        console.log(error.message)
    }
}

export const editEven= async (req, res) =>
{
    const {id} = req.params
    await Even.findByIdAndUpdate(id, req.body)
    res.redirect('/evento')
}

export const deleteEven = async (req, res) =>
{
    const {id} = req.params
    await Even.findByIdAndDelete(id)
    res.redirect('/evento')
}

export const evenToggleDone = async(req, res) =>
{
    const {id} = req.params;
    const even = await Even.findById(id)
    even.done = !even.done;

    await cont.save();

    res.redirect('/evento')
}