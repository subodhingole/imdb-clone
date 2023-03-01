import Link from "next/link";
import React from "react";

const MenuItem = ({ title, address, Icon }) => {
	return (
		<div>
			<Link href={address} className="mr-4 lg:mr-6 hover:text-amber-200">
				<Icon className="text-2xl sm:hidden" />
				<p className="hidden sm:inline font-semibold">{title}</p>
			</Link>
		</div>
	);
};

export default MenuItem;
