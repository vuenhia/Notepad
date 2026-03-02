export default function Notes({ notes, onNoteClick }) {
	// Display Notes
	// Have a minimzize , edit, delete button
	// Have three pre sets
	return (
		<div className="notes-grid">
			{notes.map((note, index) => (
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
			))}
		</div>
	);
}
