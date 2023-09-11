const express = require('express')
const app = express()
const mysql =require('mysql')
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.listen(3006, ()=>{
    console.log('server started')
})

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tamalvarezz'
})

//usuarios datos

app.get('/datos',(req, res)=>{
    db.query('select * from usuarios_registro',
  (err,result) =>{
    if(err)console.log(err)
    else{
        res.send(result)
        console.log("metodo get",result)
    }
  }
    )
    
})

app.post('/crearusuario', (req,res)=>{
    const Id_usuario = req.body.id;
    const Nombre = req.body.Nombre;
    const Apellidos = req.body.Apellidos;
    const Gmail = req.body.Gmail;
    const telefono = req.body.telefono;
    const dirrecion = req.body.dirrecion;
    const Contraseña= req.body.Contraseña;

db.query('INSERT INTO usuarios_registro VALUES (?,?,?,?,?,?,?)',[Id_usuario,Nombre,Apellidos,Gmail,telefono,dirrecion,Contraseña]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("el usuario se registro con exito")
        console.log("el usuario se registro con exito",result)
    }
}
})

app.put('/editusuario',(req,res)=>{
    const Id_usuario = req.body.id;
    const Nombre = req.body.Nombre;
    const Apellidos = req.body.Apellidos;
    const Gmail = req.body.Gmail;
    const telefono = req.body.telefono;
    const dirrecion = req.body.dirrecion;
    const Contraseña= req.body.Contraseña;
db.query('UPDATE usuarios_registro SET Nombre=?, Apellidos=?, Gmail=?,telefono=?,dirrecion=?,Contraseña=?',[Id_usuario,Nombre,Apellidos,Gmail,telefono,dirrecion,Contraseña]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("los datos se actualizaron con exito",result)
        console.log("los datos se actualizaron con exito",result)
    }
}
})

//productos datos 

app.get('/producto',(req, res)=>{
    db.query('select * from productos',
  (err,result) =>{
    if(err)console.log(err)
    else{
        res.send(result)
        console.log("metodo get",result)
    }
  }
    )
    
})

app.post('/crear/:producto', (req,res)=>{
    const Id_producto = req.body.id;
    const Nombre = req.body.Nombre;
    const descripcion = req.body.descripcion;
    const precios = req.body.precios;
    const categoria = req.body.categoria;
    const stock = req.body.stock;
    const img = req.body.img;

db.query('INSERT INTO productos VALUES (?,?,?,?,?,?,?)',[Id_producto,Nombre,descripcion,precios,categoria,stock,img]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("el producto se registro con exito")
        console.log("el producto se registro con exito",result)
    }
}
})

app.put('/edit/:producto',(req,res)=>{
    const Id_producto = req.body.id;
    const Nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const precios = req.body.precio;
    const categoria = req.body.categoria;
    const stock = req.body.stock;
    const img = req.body.img;
db.query('UPDATE productos SET Nombre=?, descripcion=?,precios=?,categoria=?,stock=?, imagen=?',[Id_producto,Nombre,descripcion,precios,categoria,stock,img]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("el producto se actualizo con exito",result)
        console.log("el producto se registro con exito",result)
    }
}
})

app.delete('/delete/:id',(req,res)=>{
    const id = req.body.id;

    db.query('DELETE FROM productos WHERE Id_producto=?',id),
    (err,result)=>{
if(err)console.log(err)
else{
    res.send("Eliminar",result)
    console.log("el producto fue eliminado con exito ")
}        
    }

})

//reservas 

app.get('/reservas',(req, res)=>{
    db.query('select * from reservas',
  (err,result) =>{
    if(err)console.log(err)
    else{
        res.send(result)
        console.log("metodo get",result)
    }
  }
    )
    
})
app.post('/crear/:reserva', (req,res)=>{
    const Id_reserva = req.body.id;
    const Nombre_cliente = req.body.Nombre_cliente;
    const Fecha_hora = req.body.Fecha_hora;
    const Cantidad_personas = req.body.precio;
    const Estado = req.body.Estado;

db.query('INSERT INTO reservas VALUES (?,?,?,?,?)',[Id_reserva,Nombre_cliente,Fecha_hora,Cantidad_personas,Estado]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("La reserva se registro con exito")
        console.log("La reserva se registro con exito",result)
    }
}
})

app.put('/edit/:reserva',(req,res)=>{
    const Id_reserva = req.body.id;
    const Nombre_cliente = req.body.Nombre_cliente;
    const Fecha_hora = req.body.Fecha_hora;
    const Cantidad_personas = req.body.precio;
    const Estado = req.body.Estado;
db.query('UPDATE reservas SET Nombre_cliente=?, Fecha_hora=?,Cantidad_personas=?,Estado=?',[Id_reserva,Nombre_cliente,Fecha_hora,Cantidad_personas,Estado]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("la reserva se actualizo con exito",result)
        console.log("la reserva se registro con exito",result)
    }
}
})

app.delete('/delete/:id_reserva',(req,res)=>{
    const id = req.body.id;

    db.query('DELETE FROM reservas WHERE Id_reserva=?',id),
    (err,result)=>{
if(err)console.log(err)
else{
    res.send("Eliminar",result)
    console.log("la reserva se cancelo con exito ")
}        
    }

})  

//domicilios 

app.get('/domicilios',(req, res)=>{
    db.query('select * from domicilios',
  (err,result) =>{
    if(err)console.log(err)
    else{
        res.send(result)
        console.log("metodo get",result)
    }
  }
    )
    
})

app.post('/crear/:domicilio', (req,res)=>{
    const Id_domicilio = req.body.id;
    const Nombre_cliente = req.body.Nombre_cliente;
    const Dirreción = req.body.Dirreción;
    const Vereda = req.body.Vereda;
    const Teléfono_cliente = req.body.Telefono_info;
    const Info_pedido = req.body.Info_pedido;
    const Productos = req.body.Productos;
    const Valor_compra = req.body.Valor_compra;

db.query('INSERT INTO domicilios VALUES (?,?,?,?,?,?,?,?)',[Id_domicilio,Nombre_cliente,Dirreción,Vereda,Teléfono_cliente,Info_pedido,Productos,Valor_compra]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("el domicilio se registro con exito")
        console.log("el domicilio se registro con exito",result)
    }
}
})

app.put('/edit/:domicilio',(req,res)=>{
    const Id_domicilio = req.body.id;
    const Nombre_cliente = req.body.Nombre_cliente;
    const Dirreción = req.body.Dirreción;
    const Vereda = req.body.Vereda;
    const Télefono_cliente = req.body.Telefono_info;
    const Info_pedido = req.body.Info_pedido;
    const Productos = req.body.Productos;
    const Valor_compra = req.body.Valor_compra;
db.query('UPDATE domicilios  SET Id_domicilio=?,Nombre_cliente=?,Dirreción=?,Vereda=?,Telefono_info=?,Info_pedido=?,Productos=?,Valor_compra=?',[Id_domicilio,Nombre_cliente,Dirreción,Vereda,Télefono_cliente,Info_pedido,Productos,Valor_compra]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("el domicilio se actualizo con exito",result)
        console.log("el domicilio  se registro con exito",result)
    }
}
})

app.delete('/delete/:id_domicilio',(req,res)=>{
    const id = req.body.id;

    db.query('DELETE FROM domicilios WHERE Id_domicilio=?',id),
    (err,result)=>{
if(err)console.log(err)
else{
    res.send("Eliminar",result)
    console.log("el domicilio se cancelo con exito ")
}        
    }

})  

//compra 

app.get('/compra',(req, res)=>{
    db.query('select * from compra ',
  (err,result) =>{
    if(err)console.log(err)
    else{
        res.send(result)
        console.log("metodo get",result)
    }
  }
    )
    
})

app.post('/crear/:compra', (req,res)=>{
    const Id_compra = req.body.id;
    const cantidad_productos = req.body.cantidad_productos;
    const precio_final= req.body.precio_final;
    const nombre_producto = req.body.nombre_producto;
  

db.query('INSERT INTO compra VALUES (?,?,?,?)',[Id_compra,cantidad_productos,precio_final,nombre_producto]),
(err,result)=>{
    if(err)console.log(err)
    else{
        res.send("la compra se registro con exito")
        console.log("la commpra se registro con exito",result)
    }
}
})

app.delete('/delete/:idcompra',(req,res)=>{
    const id = req.body.id;

    db.query('DELETE FROM compra WHERE Id_domicilio=?',id),
    (err,result)=>{
if(err)console.log(err)
else{
    res.send("Eliminar",result)
    console.log("el domicilio se cancelo con exito ")
}        
    
}

}) 



