var mongoose = require('mongoose');

// Book schema
var bookSchema = mongoose.Schema({
    productid:{
        type: String,
        required: true
    },
    productname:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    quantity:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    
    image_url:{
        type: String,
    },
    buy_url:{
        type: String,
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});
// Export so that it is accessible from anywhere
var Book = module.exports = mongoose.model('Book', bookSchema)

// Get books
module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

// Get one book
module.exports.getBookById = function(id, callback){
    Book.findById(id, callback);
}

// Add Book
module.exports.addBook = function(book, callback){
    Book.create(book, callback);
}

// Update Book
module.exports.updateBook = function(id, book, options, callback){
    var query = {_id: id};
    var update = {
        productid: book.productid,
        productname: book.productname,
        description: book.description,
        quantity: book.quantity,
        price: book.price,
        image_url: book.image_url,
        buy_url: book.buy_url
    }
    Book.findOneAndUpdate(query, update, options, callback);
}

// Delete book
module.exports.removeBook = function(id, callback){
    var query = {_id:id}
    Book.remove(query, callback);
}