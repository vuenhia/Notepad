export default function Notes({ notes }) {
	// Display Notes
	// Have a minimzize , edit, delete button
	// Have three pre sets
	return (
		<div className="notes-grid">
			{notes.map((note, index) => (
				<h2 key={index}>{note}</h2>
			))}
		</div>
	);
}
