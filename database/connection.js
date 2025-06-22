
// hami yaha database connection ko code/logic lekxam

const {Sequelize,DataTypes} =  require("sequelize")
// 

// const bookModel = require("./models/book.model")

// const sequelize = require("sequelize")
// const Sequelize = sequelize.Sequelize
// const DataTypes = sequelize.DataTypes

const sequelize = new Sequelize(process.env.CS)


// const bookModel = require("./models/book.model")








sequelize.authenticate()
.then(()=>{
    console.log("Authenticated vayo, connected vayo !!")
})
.catch((err)=>{
    console.log("Error aayo" +err)
})

const db  = {}
db.Sequelize = Sequelize 
db.sequelize = sequelize

db.books =  require("./models/book.model")(sequelize,DataTypes)
db.users = require("./models/user.model")(sequelize,DataTypes)
db.products = require("./models/product.model")(sequelize,DataTypes)
sequelize.sync({alter:false})
.then(()=>{
    console.log("Table created")
})

// sequelize.sync({force:true})
// .then(()=>{
//     console.log("Table created")
// })

module.exports = db