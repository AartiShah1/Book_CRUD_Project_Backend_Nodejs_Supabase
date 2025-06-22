
// books, bookName,bookPrice, bookAuthor, bookGenre

const bookModel = (sequelize,DataTypes)=>{
     const Book = sequelize.define("book",{
        bookName : {
            type : DataTypes.STRING, 
            allowNull : false
        }, 
        price : {
            type : DataTypes.INTEGER,
            allowNull : false
        }, 
        bookAuthor : {
            type : DataTypes.STRING,
        }, 
        bookGenre : {
            type : DataTypes.STRING
        }
     })
    console.log("Book model created")
     return Book
}
module.exports = bookModel // export default bookModel