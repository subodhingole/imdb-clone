"use client";
import React, { useState } from "react";
const SearchBox = () => {
	const [search, setSearch] = useState("");
	return (
		<form className="flex">
			<input
				value={search}
				type="text"
				placeholder="Search for a movie"
				className="w-full active:outline-none active:border-transparent focus:outline-none   focus:border-transparent dark:border-gray-500 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 block appearance-none leading-normal"
				onChange={(e) => setSearch(e.target.value)}
			/>
			<a
				type="submit"
				className="px-2 bg-amber-500 rounded-tl-lg rounded-bl-lg hover:bg-amber-700 text-white font-bold"
				href={`/search/${search}`}
			>
				Search
			</a>
		</form>
	);
};

export default SearchBox;
