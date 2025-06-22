const express = require('express');
const { books } = require('./database/connection');
const bookRoute = require('./routes/bookRoute');
const cors = require('cors');

const app = express();
require('./database/connection')
app.use(express.json());

// app.use(cors({
//   origin: 'http://localhost:5173',
// }));



app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174']
}));





// postgresql://postgres.gpedxfqbqvssaijmachg:Fullstack@123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres


// let app = require("express")()

// localhost:4000/api+ /hello = localhost:4000/api/hello
// localhost:4000/api + /books/:id = localhost:4000/api/books/:id
// localhost:4000/api/haha/ + /books = localhost:4000/api/haha//books

app.use("/api/books",bookRoute)



app.listen(4000, function() {
  console.log('Server is hehe aaaa running on port 4000');
})