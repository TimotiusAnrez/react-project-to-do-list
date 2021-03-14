const {TodoItem} = require('../models/index');

class TodoController {
    static read(req,res){

        TodoItem.findAll()
            .then(data => res.render('todoList', {data}))
            .catch(err => console.log(err))
        
    }

    static create(req,res){
        let data = {
            item:req.body.item,
            isDone:false
        }
        TodoItem.create(data)
            .then(data => res.redirect('/'))
            .catch(err => console.log(err))
    }

    static update(req,res){
        let idInput = +req.params.id
        let dataInput = {
            item:req.body.item,
            isDone:req.body.isDone
        }
        TodoItem.update(dataInput,{where:{id:idInput}})
            .then(result => res.redirect('/'))
            .catch(err => console.log(err))
    }
    static delete(req,res){
        let idInput = +req.params.id
        TodoItem.destroy({where:{id:idInput}})
            .then(result => res.redirect('/'))
            .catch(err => console.log(err))
    }
};

module.exports = TodoController;