import React from "react";
import Card from "./Card";

const Results = ({ results }) => {
	console.log(results);
	return (
		<div className="flex flex-wrap max-w-[90rem] gap-8 p-8 justify-around items-center mx-auto">
			{results.map((result) => (
				<Card
					key={result.id}
					id={result.id}
					result={result}
					title={result.title}
					imgUrl={result.poster_path}
				/>
			))}
		</div>
	);
};

export default Results;
