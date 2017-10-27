import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, NavLink, Route } from 'react-router-dom'
import articleStore from './articleStore'



const Header = () => (
    <div>
      <ul className="nav">
          <li><NavLink exact activeClassName="active" to="/images">Images</NavLink></li>
          <li><NavLink activeClassName="active" to="/articles">Articles</NavLink></li>
          <li><NavLink activeClassName="active" to="/about">About us</NavLink></li>
      </ul>
    </div>
  )

const Images = () => {
  let articlesInfo = articleStore.articles.map( (element) => (
      <img src={element.img} href={element.url} style={{height: "100px"}}/>
    ))

  return <div className="images-container">{articlesInfo}</div>;
}
const Articles = () => {

    let articlesInfo = articleStore.articles.map( (element) => (
      <li>
        <p>ID: {element.id}</p>
        <p>Title: {element.title}</p>
        <p>Author: {element.author}</p>
      </li>
    ))

  return <div>{articlesInfo}</div>;
}
const About = () => (<p>Best company in existence</p>)

const Main = () => (
  <main className="main">
    <Switch>
      <Route exact path='/images' component={Images}/>
      <Route path='/articles' component={Articles}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App