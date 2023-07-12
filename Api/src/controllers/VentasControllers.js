const getAllVentas=(req, res)=>{
    res.send('ventas all');
}

const getOneVenta=(req,res)=>{

}

const createVenta=(req,res)=>{

}

const deleteVenta=()=>{

}

const updateVenta=()=>{

}

const ventas={
    all:getAllVentas,
    one:getOneVenta,
    create:createVenta,
    detele:deleteVenta,
    update:updateVenta
}

module.exports =ventas

