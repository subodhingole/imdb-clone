import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

export const metadata = {
	title: "IMDb Clone",
	description: "This is the IMDB Clone",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<Header />
					<Navbar />
					<SearchBox />
					{children}
				</Providers>
			</body>
		</html>
	);
}
