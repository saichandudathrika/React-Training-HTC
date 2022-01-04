import React ,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';
import DemoReact from './components/DemoReact';
import Book from './components/Book';
import StudentList from './components/StudentList';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     employee:{"name":"chandu sai","department":"HR"}
  //   }
  // }
  state = {
    employee:{"name":"chandu sai","department":"HR"}
  }

  render(){
    return (
      <div className="App">
      <h1> Employee List..</h1>
      {/* <Employee employee = {this.state.employee}/> 
      <DemoReact/> */}
      {/* <Book/> */}
      <StudentList/>
      <Book/>
      <DemoReact/>
      </div>
    );
  }
}

export default App;
