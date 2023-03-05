import Image from "next/image";
import React from "react";
const API_KEY = process.env.API_KEY;

const page = async ({ params }) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=en-US`
	);
	const data = await res.json();
	console.log(data.homepage);

	return (
		<div className="flex md:flex-row flex-col m-8 items-center md:items-start">
			<div className="flex flex-col md:flex-row items-center flex-shrink w-full md:w-auto bg-gray-300 p-4 rounded-lg">
				<Image
					src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
					height={300}
					width={300}
					className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
				/>
				{/* make below component not render on desktop */}
				<div className="flex-grow flex-col items-center justify-center p-8 md:hidden">
					<h1 className="text-3xl font-bold underline underline-offset-2 mb-8">
						{" "}
						{data.title}{" "}
					</h1>
					<p> 🕐Runtime: {data.runtime}min</p>
					<p> 🎙️Studio: {data.production_companies[0].name}</p>
					<p> 📅Release Date: {data.release_date}</p>
					<p> 📈Revenue: {data.revenue}</p>
					<p> 📽️Status: {data.status}</p>
					<p> 🎯Ratings: 4.23⭐</p>
					<a
						className=" md:hidden bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mt-8 self-start"
						href={`${data.homepage}`}
					>
						Watch Now
					</a>
				</div>
			</div>
			<div className="flex-1 md:mx-8 flex flex-col h-full">
				<div className="flex-grow">
					<h1 className="text-4xl underline underline-offset-4 font-bold">
						Description
					</h1>
					<p className="mt-4 text-justify">{data.overview}</p>
				</div>
				<div className="flex-grow hidden flex-col items-center justify-center md:block mt-8">
					<p> 🕐Runtime: {data.runtime}min</p>
					<p> 🎙️Studio: {data.production_companies[0].name}</p>
					<p> 📅Release Date: {data.release_date}</p>
					<p> 📈Revenue: {data.revenue}</p>
					<p> 📽️Status: {data.status}</p>
					<p> 🎯Ratings: 4.23⭐</p>
				</div>
				<button className="hidden md:block bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mt-8 self-start ">
					Watch Now
				</button>
			</div>
		</div>
	);
};

export default page;
