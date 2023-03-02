import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
	return (
		<div className="bg-gray-200 flex items-center justify-center py-4 gap-x-8 dark:bg-gray-600 lg:text-xl">
			<NavbarItem title="Trending" params="fetchTrending" />
			<NavbarItem title="Top Rated" params="fetchTopRated" />
		</div>
	);
};

export default Navbar;
