class BookStore {
    
      constructor() {
        this._books = [
          { id: 1,title: "How to Learn JavaScript - Vol 1", info: "Study hard"},
          { id: 2,title: "How to Learn ES6", info: "Complete all exercises :-)"},
          { id: 3,title: "How to Learn React",info: "Complete all your CA's"},
          { id: 4,title: "Learn JavaScript, React and MobX",info: "Don't drink beers, until Friday (after four)"},
          { id: 5,title: "The Jewish-Japanese Sex & Cook Book and How to Raise Wolves",info: "Best book in existence"}
        ]
        this._nextID= 5;
      }
      get books(){
        return this._books;
      }
      addBook(book){
        book.id = this._nextID;
        this._books.push(book);
        this._nextID++;
      }
      removeBook(id){
        const books = this._books;
        const removeIndex = books.map((book =>{
          return book.id
        })).indexOf(id);
        books.splice(removeIndex,1);
      }
    }

let bookStore = new BookStore();
console.log(bookStore);
export default bookStore;
