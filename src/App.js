import React,{Component} from 'react';

import './App.css';

class App extends Component{
  constructor(prp){
    super(prp);
    this.state= {
      items : ['Pay bills','Hit the gym',"Meet Hari","Read a book","Organize office"],
      txtcont:""
    };

  }
txtChange= (e)=>{
    this.setState({txtcont:e.target.value});
    
}
  addItem=(e)=>{
    let currentText =this.state.txtcont;
    let currentItems = this.state.items;
    currentItems.push(currentText);
    this.setState({items:currentItems});
  }
  rmvItem=(key)=>{
    if(!window.confirm("Are sure?"))
    {return}
    let currentItems = this.state.items;
    currentItems.splice(key,1);
    this.setState({items:currentItems});



  }
   render(){
    return (
      <div> 
        <div id="myDIV" class="header">
        <h2>My To Do List</h2>
        <input type="text" onChange={this.txtChange}id="myInput" placeholder="Title..."/>
        <button onClick={this.addItem} class="addBtn">Add</button>
        </div>
        <ul id="myUL">
          {this.state.items.map((item,key)=>{
            return(
              <li>{item} <button onClick={()=>{this.rmvItem(key)}} class='rmBtn' >Remove</button></li>
            )
          })}
  
</ul>
      </div>
  );}
  
}

export default App;
