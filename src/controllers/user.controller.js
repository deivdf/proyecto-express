const UsersService = require('../services/user.service');
const service = new UsersService();

const create = async(req, res) => {
    try{
        const respuesta = await service.create(req.body);
        res.json({success: true, data: respuesta});
    } catch (err){
        res.status(500).send({success: false, message: err.message});
    }
}

const getAll = async(req, res) => {
    try{
        const respuesta = await service.find();
        res.json(respuesta);
    } catch (err){
        res.status(500).send({success: false, message: err.message});
    }
}

const getById = async(req, res) => {
    console.log(req.params, 'id entrante');
    try{
        const { id } = req.params;
        const respuesta = await service.findOne(id);
        res.json(respuesta)
    } catch (err){
        res.status(500).send({success: false, message: err.message});
    }
}

const update = async(req, res) =>{
    try{
        const { id } = req.params;
        const body = req.body
        const respuesta = await service.update(id, body);
        res.json(respuesta);
    }catch(err){
        res.status(500).send({success: false, message: err.message});
    }
}

const _delete = async(req, res) => {
    console.log(req.params, 'id entrante');
    try{
        
        const { id } = req.params;
        console.log(id, 'entra parseado')
        const respuesta = await service.delete(id);
        res.json(respuesta);
    }catch(err){
        console.log('no entra')
        res.status(500).send({success: false, message: err.message});
        
    }
}




module.exports = { create, getAll, getById, update, _delete };
