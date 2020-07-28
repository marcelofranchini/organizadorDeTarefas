/// forma POO

const TaskModel = require('../models/TaskModel');
const { response } = require('express');

class teste{



    async show (req,res){
        

         await TaskModel.findById(req.params.id).then(response =>{

             if(response)
                 return res.status(200).json({response})
             else{
    
                 return res.status(400).json({error, msg:"id não encontrado"});
             }

         }).catch(error =>{
            
            return res.status(400).json({error, msg:"teste"});
        })
    }

}

module.exports =  new teste()