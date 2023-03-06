"use client";
import React from "react";

const WatchNow = ({ link }) => {
	return (
		<a
			className="hidden md:block bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mt-8 self-start "
			onClick={() => {
				window.open(`${link}`);
			}}
		>
			Watch Now
		</a>
	);
};

export default WatchNow;
