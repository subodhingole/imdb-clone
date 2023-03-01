import React from "react";
import { FiHome } from "react-icons/fi";
import { GrInfo } from "react-icons/gr";
import MenuItem from "./MenuItem";

const Header = () => {
	return (
		<div className="flex py-4 bg-slate-600 justify-between items-center lg:px-16 md:px-8 sm:px-4 px-2">
			<div className="flex text-white">
				<MenuItem title="Home" address="/" Icon={FiHome} />
				<MenuItem title="About" address="/about" Icon={GrInfo} />
			</div>
			<div className="">
				<h2 className="text-2xl">
					<span className="bg-amber-500 px-2 py-1 rounded-md">
						IMDb
					</span>
					<span className="text-white font-bold ml-1">Clone</span>
				</h2>
			</div>
		</div>
	);
};

export default Header;
