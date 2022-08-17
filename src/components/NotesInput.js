import React from "react";


class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.titleInputFocus = this.titleInputFocus.bind(this);
        this.titleInputFocusOut = this.titleInputFocusOut.bind(this);

    }


    onTitleChange(event) {

        if (event.target.value.length <= 50) {
            this.setState(() => {
                return {
                    title: event.target.value
                }
            });
        }

    }
    onBodyChange(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        });
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.state.title) {
            this.props.addNote(this.state)
        }

        this.setState({
            title: '',
            body: ''
        });
    }

    titleInputFocus(){
        const titleInput = document.querySelector('.title-input');
        titleInput.style.boxShadow = '5px 5px 0px #585F95';
    }
    titleInputFocusOut(){
        const titleInput = document.querySelector('.title-input');
        titleInput.style.boxShadow = 'none';
    }

    render() {

    

        return (
            <form onSubmit={this.onSubmit}>
                <div className="title-input">
                    <input placeholder="Title" onFocus={this.titleInputFocus} onBlur={this.titleInputFocusOut} value={this.state.title} onChange={this.onTitleChange}></input>
                    <span>{50 - this.state.title.length}</span>
                </div>
                <br />
                <textarea placeholder="..." value={this.state.body} onChange={this.onBodyChange}></textarea>
                <br />
                <br />
                <button type="submit">Create</button>
            </form>
        );
    }
}

export default NotesInput;