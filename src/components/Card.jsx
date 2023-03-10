import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }) => {
	return (
		<div className="w-60 h-80 bg-gray-300 dark:bg-gray-500 rounded-lg p-4 cursor-pointer sm:hover:shadow-slate-400 sm:hover:shadow-sm hover:-translate-y-2 transition-transform duration-75">
			<Link href={`${result.media_type || "movie"}/${result.id}`}>
				<Image
					src={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
					width={500}
					height={300}
					className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
					style={{
						maxWidth: "100%",
						height: "auto",
					}}
					placeholder="blur"
					blurDataURL="/spinner.svg"
					alt="image is not available"
				></Image>
				<div className="p-2">
					<p className="line-clamp-3 text-md">
						{result.overview || "N/A"}
					</p>
					<h2 className="truncate text-lg font-bold mt-8">
						{result.title || result.name}
					</h2>
					<p className="flex items-center">
						{result.release_date || result.first_air_date || "N/A"}
						<FiThumbsUp className="h-5 mr-1 ml-3" />{" "}
						{result.vote_count || "N/A"}
					</p>
				</div>
			</Link>
		</div>
	);
};

export default Card;
