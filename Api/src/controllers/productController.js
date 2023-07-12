

function getAllProducts(req, res){
    res.send('product all');
    
}

const getOneProduct=(req,res)=>{
    console.log("hola 1")
}

const createProduct=(req,res)=>{

}

const deleteProduct=()=>{

}

const updateProduct=()=>{

}

const product={
    all:getAllProducts,
    one:getOneProduct,
    create:createProduct,
    detele:deleteProduct,
    update:updateProduct
}

module.exports =product

