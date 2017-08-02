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
    // console.log(values) -> {title: 'asdf', categories: 'asdf', content: 'asdf'}
    const errors = {};

    // validate the inputs from 'values'
    // if(!values.title || values.title.length < 3) {
    //     errors.title = 'Enter a title that is at least 3 characters!';
    // }

    // if(!values.title.length < 3) {
    //     errors.title = 'Title must be at least 3 characters!';
    // }
    if(!values.title) {
        errors.title = 'Enter some a title!';
    }
    if(!values.categories) {
        errors.categories = 'Enter some a categories!';
    }
    if(!values.content) {
        errors.content = 'Enter some a content!';
    }

    // if errors is empty, the form is fine to submit
    // if errrors has *any* properties, redux form assumes form is invalid
    return errors;
}



export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);