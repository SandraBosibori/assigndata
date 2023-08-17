import mongoose from "mongoose";

const assigneeSchema = new mongoose.Schema({
    image: {type: String},
    name: {type: String},
    age: {type: String},
    location: {type: String},
    description: {type: String},
    task: {type: String},
})

const Assignee = mongoose.model('Assignee', assigneeSchema)


const getAssignees = ()=>{
    return Assignee.find()
}


const createAssignee = (values)=> {

    return new Assignee(values).save()
    .then((assignee)=>{assignee.toObject()})

}



const updateAssignee = (id, values)=>{
    return Assignee.findByIdAndUpdate(id, values)
}


const deleteAssignee = (id)=>{
    return Assignee.findByIdAndDelete(id)
}



export {
    Assignee,
    getAssignees,
    createAssignee,
    updateAssignee,
    deleteAssignee
}