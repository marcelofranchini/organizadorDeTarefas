const MacValidation = async (req,res,next)=>{
    if(!req.body.macaddress){
        res.status(400).json({error: " Macaddress é obrigatório"})
    }else{

        next()
    }

}

module.exports = MacValidation