<<<<<<< HEAD
export default function Notes({ notes, onNoteClick }) {
=======
export default function Notes({ notes }) {
>>>>>>> 95751c4d118b925ac0eb9b9d99a56868854c1fb6
	// Display Notes
	// Have a minimzize , edit, delete button
	// Have three pre sets
	return (
		<div className="notes-grid">
			{notes.map((note, index) => (
<<<<<<< HEAD
				<div className="note-container" key={index}>
					<h2 onClick={() => onNoteClick(index)}>
						{note}
						<div className="note-separater-container">
							<div className="note-grid"></div>
							<div className="note-grid"></div>
							<div className="note-grid"></div>
						</div>
					</h2>
				</div>
=======
				<h2 key={index}>{note}</h2>
>>>>>>> 95751c4d118b925ac0eb9b9d99a56868854c1fb6
			))}
		</div>
	);
}
