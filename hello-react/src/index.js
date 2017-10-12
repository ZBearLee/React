import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const users=[
  {username:'Jerry',age:21,gender:'male'},
  {username:'Tomy',age:22,gender:'female'},
  {username:'Lily',age:23,gender:'female'},
  {username:'Lucy',age:24,gender:'male'},
]

class User extends Component {
  render() {
    //const user=this.props.user  es5写法，等同于下面写法
    const {user}=this.props  //解构
    return (
      <div>
        <div>姓名:{user.username}</div>
        <div>年龄:{user.age} </div>
        <div>性别:{user.gender}</div>
      </div>
    )
  }
}

class Index extends Component {
  render() {
    return (
      <div>
       {users.map((user,i)=><User key={i} user={user}/>)}
      </div>
    )
  }
}
// 挂载组件
ReactDOM.render(<Index />,
  document.getElementById('root'))
