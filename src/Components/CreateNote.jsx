import { useState } from "react";

export default function CreateNote({ onAddNote }) {
	const [clicked, setClicked] = useState(false);
	const [newNote, setNewNote] = useState("");

	const handleNewNote = () => {
		if (!newNote.trim()) return;
		onAddNote(newNote); // sends note up to the specific section
		setClicked(false);
		setNewNote("");
	};

	return (
		<div>
			{!clicked ? (
				<button onClick={() => setClicked(true)}>Create Note</button>
			) : (
				<div className="createNote-input">
					<label>Title</label>
					<input
						type="text"
						value={newNote}
						onChange={(e) => setNewNote(e.target.value)}
					/>
					<div className="createNotes-buttons">
						<div className="handle-buttons">
							<button onClick={handleNewNote}>Create</button>
							<button onClick={() => setClicked(false)}>Cancel</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
