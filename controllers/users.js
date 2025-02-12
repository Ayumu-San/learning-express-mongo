const User =- re


let users = [
    { id:1, name: "Ayumu", email: "Ayumu@gmail.com"},
    { id:2, name: "Setsuna", email: "Setsuna@gmail.com"},
];

module.exports = {
    index: (req, res) => {
        if(users.length > 0){
            res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url
            })
        } else {
            res.json({
                status: false,
                message: "data kosong"
            })
        }
    },
    store:(req, res) => {
        users.push(req.body)
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message:"data berhasil ditambah"    ,
        })
    },
    update:(req, res) => {
        const id = req.params.id
        users.filter(user => {
            if(user.id == id){
                user.name = req.body.name
                user.email = req.body.email
                return user
            }
        })
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message:"data berhasil diubah"    ,
        })
    },
    delete:(req, res) => {
        const id = Number(req.params.id);  // Konversi ke Number
        users = users.filter(user => user.id != id); // Perbaiki filter
       
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            message:"data berhasil dihapus"
        })
    }
}