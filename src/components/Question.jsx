import { useState } from "react";

function Question({
	question,
	index,
	className,
	increaseIndex,
	decreaseIndex,
	correctAnswers,
	setCorrectAnswers,
}) {
	const [selectedIndex, setSelectedIndex] = useState(null);

	let randomNumber = Math.floor(Math.random() * 4);

	if (question.incorrect_answers.length !== 4)
		question.incorrect_answers.splice(randomNumber, 0, question.correct_answer);

	let finalAnswers = question.incorrect_answers;

	const handleSubmit = () => {
		if (selectedIndex !== null) {
			if (finalAnswers[selectedIndex] == finalAnswers[randomNumber]) {
				setCorrectAnswers(correctAnswers + 1);
			}

			increaseIndex();
		}
	};

	return (
		<div className={className} key={index}>
			<header>{index + 1}/10</header>
			<h1>{question.question}</h1>
			<div className="info">
				<div className="type">Type: Multiple Choice</div>
				<div className="difficulty">Difficulty: Medium</div>
			</div>
			<div className="options">
				{finalAnswers.map((answer, index) => (
					<div
						className={selectedIndex === index ? "option selected" : "option"}
						key={index}
						onClick={() => setSelectedIndex(index)}
					>
						{answer}
					</div>
				))}
			</div>
			<div className="btns">
				<button
					className={index === 0 ? "plainBtn d-none" : "plainBtn"}
					onClick={decreaseIndex}
				>
					Go back
				</button>
				<button className="greenBtn" onClick={handleSubmit}>
					Submit
				</button>
			</div>
			<div className="attribution">Powered by Open Trivia API.</div>
		</div>
	);
}

export default Question;
