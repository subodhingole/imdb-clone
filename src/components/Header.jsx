import Link from "next/link";
import React from "react";
import { FiHome } from "react-icons/fi";
import { GrInfo } from "react-icons/gr";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import DarkModeSwitch from "./DarkModeSwitch";
import MenuItem from "./MenuItem";

const Header = () => {
	return (
		<div className="flex py-4 justify-between items-center lg:px-16 md:px-8 sm:px-4 px-2">
			<div className="flex">
				<MenuItem title="Home" address="/" Icon={FiHome} />
				<MenuItem title="About" address="/about" Icon={GrInfo} />
			</div>
			<div className="flex gap-x-2 items-center">
				<DarkModeSwitch />
				<Link href={"/"}>
					<h2 className="text-2xl">
						<span className="text-xl sm:text-2xl bg-amber-500 px-2 py-1 rounded-md">
							IMDb
						</span>
						<span className=" text-xl sm:text-2xl font-bold ml-1">
							Clone
						</span>
					</h2>
				</Link>
			</div>
		</div>
	);
};

export default Header;
