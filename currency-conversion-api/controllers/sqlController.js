const db = require('../models/index')


db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        // console.log(typeof db.Configurator)
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


const sql_OP={
    findAll: function () {
        return new Promise((resolve, reject) => {
            let res_data;
            let res_status;
            let res_msg;

            db.Currency.findAll({

                raw : true
            }).then(res=>{
                res_data = res
                res_status = 200;
                res_msg = 'found'
                resolve({data: res_data, status: res_status, msg: res_msg})
            }).catch(e=>{
                console.log(e)
                res_data = []
                res_status = 500;
                res_msg = e.message
                reject({data: res_data, status: res_status, msg: res_msg})
            })
        })

    },
    addPairs: function (data) {
        console.log(data)
        return new Promise((resolve, reject) => {
            let res_data;
            let res_status;
            let res_msg;
            db.Currency.bulkCreate(data,{ raw: true ,updateOnDuplicate: ["rate","updatedAt"] }).then(response=>{

                db.Currency.findAll({

                    raw : true
                }).then(res=>{
                    res_data = res
                    res_status = 200;
                    res_msg = 'update success'
                    resolve({data: res_data, status: res_status, msg: res_msg})
                }).catch(e=>{
                    console.log(e)
                    res_data = []
                    res_status = 500;
                    res_msg = e.message
                    reject({data: res_data, status: res_status, msg: res_msg})
                })

            }).catch(e=>{
                console.log(e)
                res_data = []
                res_status = 500;
                res_msg = e.message
                reject({data: res_data, status: res_status, msg: res_msg})
            })
        })
    },
    deletePairs: function (idList) {

        return new Promise((resolve, reject) => {
            let res_data;
            let res_status;
            let res_msg;
            db.Currency.destroy({
                where: {
                    id: idList,
                }
            }).then(res=>{

                if(res>0){
                        res_data = res
                        res_status = 200;
                        res_msg = 'delete success'
                        resolve({data: res_data, status: res_status, msg: res_msg})
                }
                else {
                    res_data = res
                    res_status = 404;
                    res_msg = 'not found'
                    reject({data: res_data, status: res_status, msg: res_msg})
                }


            }).catch(e=>{
                res_data = []
                res_status = 500;
                res_msg = e.message
                reject({data: res_data, status: res_status, msg: res_msg})
            })
        })
    },
}

module.exports = sql_OP;
