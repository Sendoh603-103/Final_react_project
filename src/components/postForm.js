import React, { Component } from 'react';

import './postForm.css'

//This part is for grabbing content from user and put it into commment
//I set up a state here to store the content temporarily and put this content to Post component through funtion createPost
//to create a Post component, that means the comment

class postForm extends Component {
  state = {
    content: ""
  }
  componentDidMount () {

  }
  onChange (value) {
    this.setState({
      content: value
    });
  }
  onClick () {
      this.setState({ content: "" });
      this.props.createPost(this.state.content)
  }
  render () {
      // let { content } = this.state
    return (
    <div>
      <div className="form">
        <div className="title"><label htmlFor="post">Create post</label></div>
          <br />
            <div>
              <img className="avatar" src={this.props.user.avatar} alt="" />
              <textarea id="post" value={this.state.content} onChange={e => this.onChange(e.target.value)} placeholder="what's on your mind?" />
            </div>
          <button className="btn" onClick={() => { this.onClick() }}>Post</button>
      </div>
    </div>);
  }
}

export default postForm;