import React from "react";

const page = () => {
	return (
		<div className="max-w-6xl mx-auto space-x-4 mt-32 space-y-4">
			<h1 className="text-2xl font-medium text-amber-500">About Page</h1>
			<p>
				An IMDb clone made with Next.js 13's new app directory and
				Tailwind CSS, using the IMDb API. Clone is developed by Subodh
				Ingole, a third-year Computer Engineering student, is a web
				application that provides users with access to a vast database
				of movies, TV shows, and other video content.
			</p>
			<p>
				The app's user interface is designed to be sleek and modern,
				with a focus on providing users with an intuitive browsing
				experience. Users can search for movies, TV shows, and other
				content by title, genre, actor, or director, and browse by
				popular titles or new releases.
			</p>
			<p>
				Each title's page includes detailed information such as the cast
				and crew, plot summary, ratings, and reviews. The app's backend
				is powered by the IMDb API developed by Subodh Ingole, which
				provides the necessary data for the frontend to display. The
				app's frontend is built using Next.js 13's new app directory,
				which provides a streamlined development experience and improved
				performance. Tailwind CSS is used to style the app, providing a
				consistent look and feel across all pages.
			</p>
		</div>
	);
};

export default page;
