"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, params }) => {
	const searchParams = useSearchParams();
	const genre = searchParams.get("genre");
	return (
		<div>
			<Link
				className={`hover:text-amber-600 font-semibold ${
					genre === params &&
					"underline underline-offset-8 text-amber-500"
				}`}
				href={`/?genre=${params}`}
			>
				{title}
			</Link>
		</div>
	);
};

export default NavbarItem;
