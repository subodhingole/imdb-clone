"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<div className="flex flex-col justify-center items-center my-40 gap-y-4">
			<h1 className="text-4xl">Oops! Something went wrong.</h1>
			<button
				onClick={() => {
					reset();
				}}
				className="bg-gray-200 hover:bg-amber-400 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-40"
			>
				Reset
			</button>
		</div>
	);
};

export default Error;
