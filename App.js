import React, { Component } from 'react';
import Note from './Components/Note';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			noteText: '',
			notes: [],
		};
	}

	updateNoteText(noteText) {
		this.setState({
			noteText: noteText.target.value,
		});
	}

	handleKeyPress = event => {
		if (event.key === 'Enter') {
			this.addNote();
		}
	};
	addNote() {
		// console.log(this.state.noteText);
		if (this.state.noteText === '') {
			return;
		}
		let notesArr = this.state.notes;

		notesArr.push(this.state.noteText);
		console.log(notesArr);
		this.setState({ noteText: '' });
		this.textInput.focus();
	}
	deleteNote(index) {
		let notesArr = this.state.notes;
		notesArr.splice(index, 1);
		this.setState({ notes: notesArr });
	}
	render() {
		let notes = this.state.notes.map((val, key) => {
			console.log(key);
			return <Note key={key} text={val} deleteMethod={() => this.deleteNote(key)} />;
		});

		return (
			<div className="container">
				<div className="header">TodoList</div>
				{notes}
				<div className="btn" onClick={this.addNote.bind(this)}>
					+
				</div>
				<input
					type="text"
					ref={input => {
						this.textInput = input;
					}}
					className="textInput"
					value={this.state.noteText}
					onChange={noteText => this.updateNoteText(noteText)}
					onKeyPress={this.handleKeyPress.bind(this)}
				/>
			</div>
		);
	}
}

export default App;
