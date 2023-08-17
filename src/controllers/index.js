import { getAssignees, createAssignee, updateAssignee, deleteAssignee } from "../db/index.js"


const getAllAssignees = async (req, res)=>{
    try {
        const allAssignees = await getAssignees()


        return res.json(allAssignees).end()
    } catch(err) {
        console.log(err)
    }
}


const createController = async (req, res)=>{

    const {image, name, age, location, description, task} = req.body 

    try {
        const newAssignee = await createAssignee({
            image,
            name,
            age,
            location,
            description,
            task
        })


        return res.json(newAssignee).end()

    } catch (err) {
        console.log(err)
    }

}


const updateController = async (req, res)=>{
    const {id} = req.params
    const userInfo = req.body

    try {
        const updatedAssignee = await updateAssignee(id, userInfo)


        return res.json(updatedAssignee).end()

    } catch(err) {
        console.log(err)
    }
}


const deleteController = async (req, res)=>{
    const {id} = req.params

    try {
        const deletedAssignee = await deleteAssignee(id)

        return res.json(deletedAssignee).end()
    } catch(err) {
        console.log(err)
    }
}
export {
    getAllAssignees,
    createController,
    updateController,
    deleteController
}