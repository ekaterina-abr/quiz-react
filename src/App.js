import './App.css';
import QuizList from "./containers/QuizList";
import React, {Component} from 'react'
import MenuToggle from './components/MenuToggle'
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Quiz from "./containers/Quiz";
import QuizCreator from './containers/QuizCreator'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false,
      quizes: [
        [{
            question: 'Территория какой из этих стран - наибольшая?',
            answers: [
              {option: 'Германия'},
              {option: 'Италия'},
              {option: 'Финляндия'},
              {option: 'Япония'}
            ],
            rightAnswerId: 3 
          },
          {
              question: 'В каком итальянском городе была выведена известная порода комнатных собак?',
              answers: [
                {option: 'Сиракузы'},
                {option: 'Болонья'},
                {option: 'Падуя'},
                {option: 'Верона'}
              ],
              rightAnswerId: 1 
          }]
      ]
    }
    this.toggleMenuHandler = this.toggleMenuHandler.bind(this)
    this.onCloseHandler = this.onCloseHandler.bind(this)
  }

  toggleMenuHandler() {
    this.setState({
      menu: !this.state.menu
    })
  }

  onCloseHandler() {
    this.setState({
      menu: false
    })
  }

  render() {
    return (
      <div className="App">
        <MenuToggle isOpen={this.state.menu} onToggle={this.toggleMenuHandler} onClose={this.onCloseHandler}/>
        <Switch>
          <Route path='/quiz/:id' component={Quiz}/>
          <Route path='/quiz-creator' component={QuizCreator}/>
          <Route exact path='/' component={QuizList}/>
          <Redirect to={'/'}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);