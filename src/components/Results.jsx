import React from "react";
import Card from "./Card";

const Results = ({ results }) => {
	return (
		<div className="flex flex-wrap max-w-[90rem] gap-8 p-8 justify-around items-center mx-auto">
			{results.map((result) => (
				<Card key={result.id} result={result} />
			))}
		</div>
	);
};

export default Results;
