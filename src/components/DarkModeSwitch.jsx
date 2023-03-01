"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const currentTheme = theme === "system" ? systemTheme : theme;

	useEffect(() => setMounted(true), []);

	return (
		<>
			{mounted &&
				(currentTheme === "dark" ? (
					<MdDarkMode
						className="text-2xl sm:mr-4 hover:text-amber-500 cursor-pointer"
						onClick={() => setTheme("light")}
					/>
				) : (
					<MdOutlineDarkMode
						className="sm:mr-4 text-2xl hover:text-amber-500 cursor-pointer"
						onClick={() => setTheme("dark")}
					/>
				))}
		</>
	);
};

export default DarkModeSwitch;
