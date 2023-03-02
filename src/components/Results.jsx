import React from "react";

const Results = ({ results }) => {
	return (
		<div>
			{results.map((result) => (
				<p> {result.original_title} </p>
			))}
		</div>
	);
};

export default Results;
