import React, { Component } from 'react';

import './postForm.css'

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
        return (<div>
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