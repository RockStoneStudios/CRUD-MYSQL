const controller = {};
controller.list = (req,res)=>{
   req.getConnection((err,conn)=>{
       conn.query('SELECT * FROM customer',(err,customers)=>{
           if(err) {
               res.json(err).status(400);
           }
           
           res.render('customer',{
               data : customers
           });
       })
   })
};

controller.save = (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO customer set ?',[req.body],(err,data)=>{
            console.log(data);
            res.redirect('/');
        });
    });
}


controller.edit = (req,res)=>{
    const {id} = req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM customer WHERE id = ?',[id],(err,customer)=>{
            console.log(customer);
            res.render('customerEdit',{
                data : customer[0]
            });
        })
    })

}

controller.update = (req,res)=>{
    const {id} = req.params;
    const newCustomer = req.body;
    req.getConnection((err,conn)=>{
        conn.query('UPDATE customer set ? WHERE id = ?',[newCustomer,id],(err,rows)=>{
            res.redirect('/');
        })
    })
}

controller.delete= (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM customer WHERE id = ?',[req.params.id],(err,rows)=>{
            res.redirect('/');
        })
    })
}
module.exports = controller;