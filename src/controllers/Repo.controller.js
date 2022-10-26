import Repo from '../models/Repo'

export const renderRepo = async (req, res) =>
{
    const repos = await Repo.find().lean()

    console.log(repos[0])
 
    res.render('repositorio', {repos : repos})
}

export const createRepo = async (req, res) =>
{
    try {
        const repo = Repo(req.body)

        await repo.save()
    
        res.redirect("/repositorio")
    } catch (error) {
        console.log(error)
    }
}

export const renderRepoEdit = async(req, res) =>
{
    try {
        const repo = await Repo.findById(req.params.id).lean()
        res.render('edit/editRepo', {repo})
    } catch (error) {
        console.log(error.message)
    }
}

export const editRepo = async (req, res) =>
{
    const {id} = req.params
    await Repo.findByIdAndUpdate(id, req.body)
    res.redirect('/repositorio')
}

export const deleteRepo = async (req, res) =>
{
    const {id} = req.params
    await Repo.findByIdAndDelete(id)
    res.redirect('/repositorio')
}

export const repoToggleDone = async(req, res) =>
{
    const {id} = req.params;
    const repo = await Repo.findById(id)
    repo.done = !repo.done;

    await repo.save();

    res.redirect('/repositorio')
}