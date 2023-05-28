function Welcome({ className, makeWelcomeInactive }) {
	return (
		<div className={className}>
			<h1>Welcome to this Animals Quiz</h1>
			<p>
				How well do you know your animals?
				<br />
				There are 10 questions to answer.
			</p>
			<button onClick={makeWelcomeInactive} className="greenBtn">
				Start Quiz!
			</button>
			<div className="attribution">Powered by Open Trivia API.</div>
		</div>
	);
}

export default Welcome;
