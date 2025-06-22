const { books } = require("../database/connection");

exports.fetchBooks =async function(req, res) {
  const datas = await books.findAll();
  res.json({
    message : "books fetched sucessfully",
    datas 
})
}


exports.addBook = async function(req, res) {
  console.log(req.body);
  // const bookName = req.body.bookName;
  // const bookPrice = req.body.bookPrice;
  console.log(req.body, "Frontend bata aako Data");
  const{ bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  // console.log(bookName, bookPrice);
await books.create({
  bookName,
  price : bookPrice,
  bookAuthor,
  bookGenre 
  
})
  res.json({
    message : "books added sucessfully"
})
}


exports.deleteBook =  async function(req, res) {

  const id = req.params.id;
  await books.destroy({
    where : {
      id 
    }
  })

  res.json({
    message : "books deleted sucessfully"
})
}


exports.editBook = async function(req, res) {
  const id = req.params.id;
  const { bookName, price, bookAuthor, bookGenre } = req.body;
  await books.update({
    bookName,price ,bookAuthor,bookGenre },
     {
    where : {
      id
    }
  })
  res.json({
    message : "books updated sucessfully"
})
}


exports.singleFetchBook = async function(req, res) {
  const id = req.params.id;
  const datas = await books.findByPk(id);
  res.json({
    message : "books fetched sucessfully",
    datas 
})
}





// module.exports = {
//   fetchBooks,
//   addBook,
//   deleteBook,
//   editBook
// }
// export default  {
//   fetchBooks,
//   addBook,
//   deleteBook,
//   editBook
// }