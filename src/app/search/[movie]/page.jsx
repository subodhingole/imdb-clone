import Results from "@/components/Results";
import React from "react";
const API_KEY = process.env.API_KEY;

const page = async ({ params }) => {
	const { movie } = params;
	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`
	);
	const data = await res.json();
	const results = data.results;
	return (
		<div>
			{results && results.length == 0 ? (
				<h1>No results found</h1>
			) : (
				<Results results={results} />
			)}
		</div>
	);
};

export default page;
