import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from "../actions/index";

class PostNew extends React.Component{
    renderField(field){
        const {meta: {touched, error}} = field;
        return (
            <div className='form-group'>
                <label>{field.label}</label>
                <input {...field.input} className='form-control' type='text' />
                <div className='text-danger'>
                {touched? error : ''}
                </div>
            </div>
        );
    }

    onSubmit(values){
        this.props.createPost(values, () => this.props.history.push('/'));
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
                <Field label='Title' name='title' component={this.renderField} />
                <Field label='Categories' name='categories' component={this.renderField} />
                <Field label='Post Content' name='content' component={this.renderField} />
                <button type='submit' className='btn btn-outline-dark'>submit</button>
                <Link to='/' className='btn btn-outline-dark'>cancel</Link>
            </form>
        );
    }
}

function validate(values){
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a title';
    }
    if (!values.categories) {
        errors.categories = 'Enter some categories';
    }
    if (!values.content) {
        errors.content = 'Enter some content please';
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm',
})(
    connect(null, { createPost })(PostNew)
);