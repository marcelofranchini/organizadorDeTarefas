const TaskModel = require('../models/TaskModel');
const {startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear} = require('date-fns')
let current = new Date();

module.exports = TaskController = {

    create: async (req, res) => {
        try {
            let create = await TaskModel.create(req.body)

            return res.status(200).json({ create, msg: "Cadastro realizado" })
        } catch (error) {
            return res.status(400).json({ error });
        }
    },

    update: async (req, res) => {
        let { id } = req.params
        let { macaddress, type, title, description, when } = req.body

        try {
            let update = await TaskModel.findByIdAndUpdate({ '_id': id },
                req.body, { new: true }
            )
            return res.status(200).json({ update, msg: "Cadastro Atualizado" })
        } catch (error) {
            return res.status(400).json({ error });

        }

    },

    index: async (req, res) => {
        let {macaddress} = req.params
        try {

            let all= await TaskModel.find({
                macaddress: { '$in': macaddress }
            }).sort('when')

            return res.status(200).json(all)
        } catch (error) {
            return res.status(400).json({ error });
        }
    },

    show: async (req, res) => {
        let { id } = req.params
        try {

            let show = await TaskModel.findById(id)

            if (show)
                return res.status(200).json({ show })
            else {

                return res.status(400).json({ error, msg: "tarefa não cadastrada" });
            }

        } catch (error) {

            return res.status(400).json({ error, msg: "não foi possivel encontrar a tarefa" });
        }
    },

    delete: async (req, res) => {
        let { id } = req.params
        try {
            let deletar = await TaskModel.deleteOne({
                '_id': id
            })
            return res.status(200).json({ msg: 'Tarefa deletada com sucesso' })
        } catch (error) {
            return res.status(500).json({ msg: "tarefa não deletada" + error });
        }
    },

    done: async (req, res) => {
        let { id, done } = req.params

        try {

            let doneTask = await TaskModel.findByIdAndUpdate(
                { '_id': id },
                { 'done': done },
                { new: true })
                return res.status(200).json({doneTask,msg:'Done alterado'})
        } catch (error) {
            return res.status(400).json({error, msg:'Erro na alteração'})
        }
    },

    last: async (req, res) =>{
        let {macaddress} = req.params
        try{
            let last =  await TaskModel.find({
                'when': {'$lt': current}, // <=
                'macaddress': {'$in': macaddress}
            }).sort('when')

            console.log(last)
            
            return res.status(200).json(last)

        }catch(error){
            return res.status(400).json(error)
        }
    },

    today: async (req, res) =>{
        let {macaddress} = req.params
        try{
            let today =  await TaskModel.find({
                'macaddress': {'$in': macaddress},
                'when':{'$gte': startOfDay(current), '$lt': endOfDay(current)}
            }).sort('when')

            return res.status(200).json(today)

        }catch(error){
            return res.status(400).json(error)
        }
    },

    week: async (req, res) =>{
        let {macaddress} = req.params
        try{
            let week =  await TaskModel.find({
                'macaddress': {'$in': macaddress},
                'when':{'$gte': startOfWeek(current), '$lt': endOfWeek(current)}
            }).sort('when')

            return res.status(200).json(week)

        }catch(error){
            return res.status(400).json(error)
        }
    },

    month: async (req, res) =>{
        let {macaddress} = req.params
        try{
            let month =  await TaskModel.find({
                'macaddress': {'$in': macaddress},
                'when':{'$gte': startOfMonth(current), '$lt': endOfMonth(current)}
            }).sort('when')

            return res.status(200).json(month)

        }catch(error){
            return res.status(400).json(error)
        }
    },

    year: async (req, res) =>{
        let {macaddress} = req.params
        try{
            let year =  await TaskModel.find({
                'macaddress': {'$in': macaddress},
                'when':{'$gte': startOfYear(current), '$lt': endOfYear(current)}
            }).sort('when')

            return res.status(200).json(year)

        }catch(error){
            return res.status(400).json(error)
        }
    },




}