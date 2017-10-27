import React from 'react'
import Main from './main';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom'

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({match}) => {    
    console.log('match', match);
    return (
        <div className="topic">
            <h2>Topics</h2>
            <ul>
                <li>
                    <NavLink activeClassName="activeV2" to={`${match.url}/rendering`}>
                        Rendering with React
                </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeV2" to={`${match.url}/components`}>
                        Components
                </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="activeV2" to={`${match.url}/props-v-state`}>
                        Props v. State
                </NavLink>
                </li>
            </ul>

            <Route path={`${match.url}/:topicId`} component={Topic} />
            <Route exact path={match.url} render={() => (
                <h3>Please select a topic.</h3>
            )} />
        </div>
    )
}

const P404 = () => <div><h1>404 Page Not Found! Try again</h1> </div>;

const BasicExample = () => (
    <Router>
        <div>
            <ul className="header">
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/topics">Topics</NavLink></li>
                <li><NavLink to="/Main">Main</NavLink></li>
            </ul>

            <hr />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
                <Route path="/main" component={Main} />
                <Route component={P404} />
            </Switch>
        </div>
    </Router>
)
export default BasicExample;