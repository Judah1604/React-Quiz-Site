import { useEffect, useState } from "react";
import "./Styles/App.css";
import Question from "./components/Question";
import Welcome from "./components/Welcome";
import FinishScreen from "./components/FinishScreen";

let apiURL =
	"https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple";

function App() {
	const [isWelcomeActive, setIsWelcomeActive] = useState(true);
	const [activeIndex, setActiveIndex] = useState(-1);
	const [questions, setQuestions] = useState([]);
	const [correctAnswers, setCorrectAnswers] = useState(0);

	const fetchData = () => {
		fetch(apiURL)
			.then((res) => res.json())
			.then((data) => {
				setQuestions(data.results);
			})
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		fetchData();
	}, []);

	const increaseIndex = () => {
		setActiveIndex(activeIndex + 1);
	};

	const decreaseIndex = () => {
		setActiveIndex(activeIndex - 1);
	};

	const makeWelcomeInactive = () => {
		setIsWelcomeActive(false);
		setActiveIndex(0);
	};

	return (
		<>
			<Welcome
				className={isWelcomeActive ? "welcome" : "welcome inactive"}
				makeWelcomeInactive={makeWelcomeInactive}
			/>
			{questions.map((question, index) => (
				<Question
					question={question}
					index={index}
					key={index}
					className={activeIndex === index ? "question active" : "question"}
					increaseIndex={increaseIndex}
					decreaseIndex={decreaseIndex}
					correctAnswers={correctAnswers}
					setCorrectAnswers={setCorrectAnswers}
				/>
			))}
			<FinishScreen
				correctAnswers={correctAnswers}
				className={activeIndex === 10 ? "finish active" : "finish"}
			/>
		</>
	);
}

export default App;
