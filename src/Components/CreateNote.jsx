import { useState, useRef, useEffect } from "react";

export default function CreateNote({ onAddNote }) {
	const [clicked, setClicked] = useState(false);
	const [newNote, setNewNote] = useState("");
	const inputRef = useRef(null);
	useEffect(() => {
		if (clicked) {
			inputRef.current.focus();
		}
	}, [clicked]);

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
						ref={inputRef}
						value={newNote}
						onChange={(e) => setNewNote(e.target.value)}
						onKeyDown={(e) => {
							if (e.key == "Enter" && !e.shiftKey) {
								e.preventDefault();
								handleNewNote(e);
							}
						}}
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
