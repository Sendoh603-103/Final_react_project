import React, { Component } from 'react';
import './post.css'

//This part is for handling the content of comment, I can get the content of comment from the postForm component
//through parent component
//There are two compoents in this Post component, I need to handle the emoji and collapse, I made it into two functions
//Because we do not need to them everytime, we just want them in certain time, this is why I made the two components as
//functions
//Only if the collapse is ture, the comment will be displayed, the first thing is to make ture if the collapse is ture
//and then execute other instructions

class Post extends Component {
  state = {
    content: ""
  }

  onChange (value) {
    this.setState({
        content: value
    })
  }

  doClick (post) {
    console.log(this.state.content);
    this.props.doComment(post, this.state.content);
  }

  getTime (unixtime) {
    var u = new Date(unixtime);
    return (u.getMonth() + 1) + "-" + u.getDate() + "-" + u.getFullYear() + " "
        + u.getHours() + ":" + u.getMinutes() + ":" + u.getSeconds()
  };

  render () {
    const Comments = (post) => {
      // console.log(post.post)
      if (post.post.collapse) {
        return (
        <div>
          {
            post.post.comments.map((comment) => {
              return (<div className="comment">
                <img className="avatar" src={comment.author.avatar} alt="" />
                  <div className="content"><span className="author"><strong>{comment.author.username}</strong></span>:{comment.content}</div>
                  </div>)
              })
            }
        </div>)
      } else {
        return (<div></div>)
    }
  }
      const Emoji = (post) => {
          if (post.post.tags.length > 0) {
            return (<span>
                  {
                      post.post.tags.map((e, index) => {
                          if (e === 1) {
                              return <span role="img" aria-label="emoji" key={index}>&#128074;</span>
                          } else if (e === 2) {
                              return <span role="img" aria-label="emoji" key={index}>&#128077;</span>
                          } else if (e === 3) {
                              return <span role="img" aria-label="emoji" key={index}>&#128156;</span>
                          } else if (e === 4) {
                              return <span role="img" aria-label="emoji" key={index}>&#128512;</span>
                          } else if (e === 5) {
                              return <span role="img" aria-label="emoji" key={index}>&#128545;</span>
                          } else if (e === 6) {
                              return <span role="img" aria-label="emoji" key={index}>&#128546;</span>
                          }
                          return <span key={index}></span>
                      })
                  }

              </span>)
          } else {
              return ''
          }
      }

      return (<div className="post">
          <div className="header">
              <div className="block">
                  <img className="avatar" src={this.props.post.author.avatar} alt="" />
              </div>
              <div className="block">
                  <div>
                      {this.props.post.author.username}
                      <span>{'   @' + this.getTime(this.props.post.createdAt)}</span>
                  </div>
              </div>
          </div>
          <p className="content">
              {this.props.post.content}
          </p>
          <p>Likes<Emoji post={this.props.post}></Emoji>({this.props.post.like.length})</p>
          <div className="row">
              <div className="col like">
                  <div className="like-coll">
                      <div className="emoji-block" onClick={() => { this.props.doLike(this.props.post, 1) }}><span className="emoji" role="img" aria-label="emoji">&#128074;</span></div>
                      <div className="emoji-block" onClick={() => { this.props.doLike(this.props.post, 2) }}><span className="emoji" role="img" aria-label="emoji">&#128077;</span></div>
                      <div className="emoji-block" onClick={() => { this.props.doLike(this.props.post, 3) }}><span className="emoji" role="img" aria-label="emoji">&#128156;</span></div>
                      <div className="emoji-block" onClick={() => { this.props.doLike(this.props.post, 4) }}><span className="emoji" role="img" aria-label="emoji">&#128512;</span></div>
                      <div className="emoji-block" onClick={() => { this.props.doLike(this.props.post, 5) }}><span className="emoji" role="img" aria-label="emoji">&#128545;</span></div>
                      <div className="emoji-block" onClick={() => { this.props.doLike(this.props.post, 6) }}><span className="emoji" role="img" aria-label="emoji">&#128546;</span></div>
                  </div>
                  <a href="#/" onClick={() => { this.props.doLike(this.props.post) }}>like</a>
              </div>
              <div className="col"><a href="#/" onClick={() => { this.props.doCollapse(this.props.post, 0) }}>comments({this.props.post.comments.length})</a></div>
          </div>
          <div className="comments">
              <Comments post={this.props.post}></Comments>
          </div>
          <div >
              <input type="text" value={this.state.content} onChange={(e) => this.onChange(e.target.value)} placeholder="write comments" />
              <button onClick={() => this.doClick(this.props.post)}> Comment</button>
          </div>
      </div>);
  }
}

export default Post;