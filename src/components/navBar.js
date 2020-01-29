import React, { Component } from 'react';
import './navBar.css'

class NavBar extends Component {

  state = {
      key: "",
  }

  onChange (value) {
      // console.log(value)
      this.setState({ key: value })
  }

  render () {
      const Users = () => {
          if (this.props.users) {
              return (

                  <div>
                      {
                          this.props.users.map((user, index) => {
                              return <a href="#/" key={index} onClick={() => this.props.selectUser(user)} >{user.username}</a>
                          })
                      }
                  </div>
              )

          } else {
              return (<div></div>)
          }
      }

      return (
          <div className="menu">
              <ul>
                  <li><img className="avatar" src={this.props.user.avatar} alt="" /></li>
                  <li>
                      <div className="search">
                          <button onClick={() => { this.props.doFilter(this.state.key, 1) }}>Find</button>
                          <input type="text" placeholder="Username" onChange={(e) => { this.onChange(e.target.value) }} />
                      </div>
                  </li>
                  <li className="dropdown">
                      <a href="#/" className="dropbtn">Sort</a>
                      <div className="dropdown-content">
                          <a href="#/" onClick={() => this.props.doSort(0)} >Oldest</a>
                          <a href="#/" onClick={() => this.props.doSort(1)} >Most recent</a>
                          <a href="#/" onClick={() => this.props.doSort(2)} >Most popular</a>
                      </div>
                  </li>
                  <li className="dropdown">
                      <a href="#/" className="dropbtn">Filter</a>
                      <div className="dropdown-content">
                          <a href="#/" onClick={() => { this.props.doFilter("", 3) }} >Liked</a>
                          <a href="#/" onClick={() => { this.props.doFilter("", 2) }} >Not Liked</a>
                          <a href="#/" onClick={() => { this.props.doFilter("", 4) }} >ALL</a>
                      </div>
                  </li>
                  <li className="dropdown">
                      <a href="#/" className="dropbtn">Users</a>
                      <div className="dropdown-content">
                          <Users />
                      </div>
                  </li>

              </ul>
          </div>);
  }
}

export default NavBar;