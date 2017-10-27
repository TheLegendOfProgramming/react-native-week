//Create a new file App2.js, and copy all from this file into is

import React from "react"
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Prompt } from "react-router-dom";


//Todo: This component must be completed
class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "book": { title: "", info: "" }, isDirty: false }
  }
  //onSave = () => {}
  //onChange = (e) => {}

  save() {
    const bookStore = this.props.bookStore;
    const book = this.state;
    book.isDirty = false;
    bookStore.addBook(book);
    this.props.onAddBook();
    console.log('book', book);

  }
  render() {
    return (
      <div>
        Title: <input name="title" onChange={event => this.setState({ title: event.target.value, isDirty: true })} />
        Info: <input name="info" onChange={event => this.setState({ info: event.target.value, isDirty: true })} />
        <button onClick={() => this.save()}>Save</button>

        <Prompt
          when={this.state.isDirty}
          message="You have unsaved data that will be lost!"
        />
      </div>
    )
  }
}


//Views start
const Home = () => (
  <div>
    <h2>Home View</h2>
    <p>Info about this site</p>
  </div>
)

const Company = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>Our about page</p>
    </div>
  )
}
class Product extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = { bookStore: props.bookStore }
  }

  onBookWasAdded = () => {
    //Nice and easy way to force a rerender
    this.forceUpdate();
  }
  renderBooks() {
    this.forceUpdate();
  }


  render() {
    const books = this.state.bookStore.books;
    let bookStore = this.state.bookStore;
    const match = this.props.match;
    return (<div>
      <h2>Our Products</h2>
      <h4>All our great books </h4>
      <ul>
        {books.map((book) => <li key={book.id}>
          <NavLink activeClassName="activeV2"
            to={`${match.url}/detail/${book.id}`}>{book.title}</NavLink> <a className="a" href="" onClick={event => { bookStore.removeBook(book.id), event.preventDefault(), this.forceUpdate() }}>  delete </a></li>)}
      </ul>
      <Link to={`${match.url}/add`}>Add book</Link>

      <div style={{ backgroundColor: "lightGray", padding: 5, marginTop: 10 }}>
        <Route path={`${match.url}/add`} render={(props) => <AddBook bookStore={bookStore}
          onAddBook={this.onBookWasAdded} />} />
        <Route path={`${match.url}/detail/:id`} render={(props) => {
          return (<Details {...props} bookStore={bookStore} />)
        }} />
      </div>
    </div>)
  }
}
//Views end

class Details extends React.Component {
  render() {
    let id = this.props.match.params.id;
    let book = this.props.bookStore.books.filter((book) => {
      return book.id === Number(id);
    })[0];
    if (book == undefined) {
      return (
        <div>
          <h1>No books in here anymore</h1>
          <Link to="/products">Products</Link>         
        </div>
      )
    } else {
      return (
        <div style={{ padding: 4 }}>
          <h4 style={{ color: "steelblue" }}>Detailed info for the title: {book.title}</h4>
          <p>Info: {book.info}</p>
          <br />
          <Link to="/products">Products</Link>
        </div>
      );
    }
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <ul className="header">
          <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
          <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
        </ul>
      </div>
    );
  }
}



//Export the instance when placed in a separate file
//End of BookStore

//Replace the render method in index.js with this and import App2.js

export default class App2 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router >
        <div>
          <Header />
          <Switch>
            <Route path="/products" render={(props) => (<Product {...props} bookStore={this.props.bookStore} />)} />
            <Route path="/company" component={Company} />
            <Route component={Home}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}