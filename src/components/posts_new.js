import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderTitleField(field) {
        return (
            <div>
                <
                    {/* onchange={field.input.onchange}
                    onFocus={field.input.onFocus}
                    onBlur={field.input.onBlur} */}
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
                    name="title"
                    component={this.renderTitleField}
                />
            </form>
        )
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);