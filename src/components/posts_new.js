import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">        
                <label>{field.label}</label>        
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }
    render() {
        return (
            <form>
                <Field
                    label="Title For Post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'Enter some a title!';
    }
    if(!values.categories) {
        errors.categories = 'Enter some a categories!';
    }
    if(!values.content) {
        errors.content = 'Enter some a content!';
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);