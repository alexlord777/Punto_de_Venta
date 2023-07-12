

function getAllUsers(req, res){
    res.send('user all');
}

const getOneUser=(req,res)=>{

}

const createUser=(req,res)=>{

}

const deleteUser=()=>{

}

const updateUser=()=>{

}

const users={
    all:getAllUsers,
    one:getOneUser,
    create:createUser,
    detele:deleteUser,
    update:updateUser
}

module.exports =users