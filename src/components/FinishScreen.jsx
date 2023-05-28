import React from "react";

function FinishScreen({ correctAnswers, className }) {
	return (
		<div className={className}>
			<h1>
				{correctAnswers > 5 ? "Congratulations" : "Unfortunately"}, you answered{" "}
				<span className={correctAnswers > 5 ? "success" : "failure"}>
					{correctAnswers}
				</span>{" "}
				questions correctly.
			</h1>
		</div>
	);
}

export default FinishScreen;
