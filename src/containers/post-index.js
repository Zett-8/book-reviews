import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/index';

class PostsIndex extends React.Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return _.map(this.props.posts, v => {
            return (
                <li className='list-group-item' key={v.id}>
                    <Link to={`/post/${v.id}`}>
                        <p>・{v.title}</p>
                    </Link>
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Book Reviews</h1>
                <div className='text-right'>
                    <Link to='/post/new' className='btn btn-outline-dark'>
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);