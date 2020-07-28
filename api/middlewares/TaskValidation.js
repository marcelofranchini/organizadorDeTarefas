const TaskModel = require('../models/TaskModel')
const {isPast} = require('date-fns')

const TaskValidation = async (req,res,next)=>{
    const {macaddress,type,title, description, when} = req.body

    if(!macaddress){
        res.status(400).json({error: " Macaddress é obrigatório"})
    }else if(!type){
        res.status(400).json({error: " Tipo é obrigatório"})
    }else if(!title){
        res.status(400).json({error: " Titulo é obrigatório"})
    }else if(!description){
        res.status(400).json({error: " Descrição é obrigatório"})
    }else if(!when){
        res.status(400).json({error: " Data e Hora são obrigatórios"})

    }else if(isPast(new Date(when))){
        res.status(400).json({error: " Indique uma data e hora futura"})
    }else{

        if(req.params.id){
            let exists =  await TaskModel.findOne({
                '_id': {'$ne': req.params.id},  // ignora quando for mesmo id
                'when': {'$eq': new Date(when)}, // se a data é igual 
                'macaddress':{'$in': macaddress} // se contém este mac valores que existam, se pertence ao msm
            })
    
            if(exists){
                res.status(400).json({error: " erro"})
            }

        }else{


            let exists =  await TaskModel.findOne({
                'when': {'$eq': new Date(when)}, // se a data é igual
                'macaddress':{'$in': macaddress} // se contém este mac
            })
    
            if(exists){
                res.status(400).json({error: " já existe uma tarefa nesta data"})
            }
            
        }
        next()
    }

}

module.exports = TaskValidation