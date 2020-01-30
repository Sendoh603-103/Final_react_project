import React, { Component } from 'react';
import './App.css';
import PostForm from './components/postForm';
import Post from './components/post';
import NavBar from './components/navBar'

//Actually there are three components in my final assigment they are PostForm, Post, and NavBar. 
//However, if you do not fire the function posts that creates the post in the website , maybe 
//just two components
//The every basic component is App, each component is unber that one
//First I set up the parent state, that means the component App is the parent, then
//I set up a object called posts, which is used to post the static website - the webstie is loaded 
//first time
//There are 7 functions I made that used to achieve some function, and the funciton is like each name of 
//the function, I set up them all in the parent component, that means in the App component
//I pass throught reset the object display in the state to achieve all the function of website

class App extends Component {

  constructor() {
    super();
    this.createPost = this.createPost.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.doFilter = this.doFilter.bind(this);
    this.doSort = this.doSort.bind(this);
    this.doCollapse = this.doCollapse.bind(this);
    this.doComment = this.doComment.bind(this);
    this.doLike = this.doLike.bind(this);
  }

  componentDidMount () {
    this.setState({
      currentUser: this.state.users[0],
      displayPosts: this.state.posts
    });
  };
  state = {
    posts: [
      {
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        author: { id: 0, username: "User1", avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y" },
        createdAt: new Date().getTime() + 1,
        like: [],
        tags: [],
        collapse: true,
        comments: [
          {
            content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            createdAt: new Date().getTime() + 100,
            author: {
              id: 1,
              username: "User2",
              avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y"
            }
          },
          {
            content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            createdAt: new Date().getTime() + 100,
            author: {
              id: 2,
              username: "User3",
              avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y"
            }
          },
          {
            content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
            createdAt: new Date().getTime() + 100,
            author: {
              id: 1,
              username: "User2",
              avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y"
            }
          }]
      }, {
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        author: { id: 1, username: "User2", avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y" },
        createdAt: new Date().getTime() + 2,
        like: [],
        tags: [],
        collapse: false,
        comments: [{
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          createdAt: new Date().getTime() + 100,
          author: {
            id: 1,
            username: "User2",
            avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y"
          }
        },
        {
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          createdAt: new Date().getTime() + 100,
          author: {
            id: 2,
            username: "User3",
            avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y"
          }
        },
        {
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          createdAt: new Date().getTime() + 100,
          author: {
            id: 1,
            username: "User2",
            avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y"
          }
        }]
      }, {
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        author: { id: 0, username: "User1", avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y" },
        createdAt: new Date().getTime() + 3,
        like: [],
        tags: [],
        collapse: false,
        comments: [{
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          createdAt: new Date().getTime() + 100,
          author: {
            id: 1,
            username: "User2",
            avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y"
          }
        },
        {
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          createdAt: new Date().getTime() + 100,
          author: {
            id: 2,
            username: "User3",
            avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y"
          }
        },
        {
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          createdAt: new Date().getTime() + 100,
          author: {
            id: 1,
            username: "User2",
            avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y"
          }
        }]
      }, {
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        author: { id: 2, username: "User3", avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y" },
        createdAt: new Date().getTime() + 4,
        collapse: false,
        like: [],
        tags: [],
        comments: [{
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          createdAt: new Date().getTime() + 100,
          author: {
            id: 1,
            username: "User2",
            avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y"
          }
        },
        {
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          createdAt: new Date().getTime() + 100,
          author: {
            id: 2,
            username: "User3",
            avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y"
          }
        },
        {
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          createdAt: new Date().getTime() + 100,
          author: {
            id: 1,
            username: "User2",
            avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y"
          }
        }]
      }, {
        content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        author: { id: 3, username: "User4", avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar&f=y" },
        createdAt: new Date().getTime() + 5,
        like: [],
        tags: [],
        collapse: false,
        comments: [{
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          createdAt: new Date().getTime() + 100,
          author: {
            id: 1,
            username: "User2",
            avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y"
          }
        },
        {
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          createdAt: new Date().getTime() + 100,
          author: {
            id: 2,
            username: "User3",
            avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y"
          }
        },
        {
          content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          createdAt: new Date().getTime() + 100,
          author: {
            id: 1,
            username: "User2",
            avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y"
          }
        }]
      }
    ],
    users: [
      { id: 0, username: "User1", avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y" },
      { id: 1, username: "User2", avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y" },
      { id: 2, username: "User3", avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y" },
      { id: 3, username: "User4", avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar&f=y" }],
    currentUser: { id: 0, username: "User1", avatar: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash&f=y" },
    displayPosts: []
  }

  doFilter (key, type) {

    if (key === '' && type === 0)
      return;
    let newPosts = [];
    if (type === 1) {
      newPosts = this.state.posts.filter((post) => {
        return post.author.username.indexOf(key) > -1;
      })
    } else if (type === 2) {
      newPosts = this.state.posts.filter((post) => {
        return post.like.indexOf(this.state.currentUser) === -1;
      })
    } else if (type === 3) {
      newPosts = this.state.posts.filter((post) => {
        return post.like.indexOf(this.state.currentUser) > -1;
      })
    } else if (type === 4) {
      newPosts = this.state.posts;
    }

    this.setState({
      displayPosts: newPosts
    })

  }

  doSort (key) {
    let newPosts = this.state.displayPosts;
    if (key === 0)
      newPosts.sort((a, b) => {
        return a.createdAt - b.createdAt;
      })
    else if (key === 1) {
      newPosts.sort((a, b) => {
        return b.createdAt - a.createdAt;
      })
    } else if (key === 2) {
      newPosts.sort((a, b) => {
        return b.like.length - a.like.length;
      })
    }
    console.log(newPosts);
    this.setState({ displayPosts: newPosts });
  }

  doCollapse (post) {
    const Post = this.state.displayPosts.find((p) => {
      return p === post
    });
    // console.log("collpse: ", Post)

    Post.collapse = !Post.collapse;
    this.setState({ displayPosts: this.state.displayPosts });
    // console.log(this.state.displayPosts);
  }

  doComment (post, content) {
    const Post = this.state.displayPosts.find((p) => {
      return p === post
    });
    Post.comments.push(
      {
        content,
        createdAt: new Date().getTime(),
        author: this.state.currentUser
      }
    )
    this.setState({ posts: this.state.displayPosts, displayPosts: this.state.displayPosts });
  }

  doLike (post, emoji) {
    const Post = this.state.displayPosts.find((p) => {
      return p === post
    });

    const user = Post.like.find((e) => {
      return e === this.state.currentUser;
    })
    if (typeof user !== 'undefined') {
      alert("You already liked this post!!")
      return;
    }
    if (emoji !== 0 && Post.tags.indexOf(emoji) === -1) {
      Post.tags.push(emoji);
    }
    Post.like.push(this.state.currentUser);
    this.setState({ posts: this.state.displayPosts, displayPosts: this.state.displayPosts });
  }

  createPost (content) {
    const newPosts = [...this.state.posts,
    {
      content,
      author: this.state.currentUser,
      createdAt: new Date().getTime(),
      comments: [],
      like: [],
      tags: [],
      collapse: false,
    }];
    this.setState({
      posts: newPosts,
      displayPosts: newPosts
    });

    console.log(this.state.posts)
  }

  selectUser (user) {
    this.setState({
      currentUser: user
    })
  }


//This part is for combining all the components, if there is a Posts function fired, the Post component will be displayed and 
//The Post component is actually a commemt for that post in the website

  render () {
    const Posts = () => {
      return (
        <div>
          {
            this.state.displayPosts.map((post, index) => {
              return (
                <Post key={index}
                  post={post}
                  doCollapse={this.doCollapse}
                  doComment={this.doComment}
                  doLike={this.doLike}>

                </Post>
              )
            })
          }
        </div>
      )
    }
    return (<div className="App">
      <NavBar
        users={this.state.users}
        user={this.state.currentUser}
        selectUser={this.selectUser}
        doFilter={this.doFilter}
        doSort={this.doSort} />
      <PostForm
        createPost={this.createPost}
        user={this.state.currentUser} />
      <Posts />
    </div>);
  }
}

export default App;
