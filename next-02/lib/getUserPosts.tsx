export default async function getUserPosts(userId: string) {
	// ? By the default, NextJS automatically caches
	// ? the returned values of fetch in the `Data Cache` on the server
	// ? the data can be fetched at build time or request time, cached, and reused on each data request.
	// *`fetch(`url`, { cache: "force-cache" })`
	// ? With ISR enabled we can static-generation on a per-page basis,
	// ? without needing to rebuild the entire site.
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
		// ? Next.js will attempt to re-generate the page:
		// ? - When a request comes in
		// ? - At most once every 60 seconds
		next: { revalidate: 60 },
	});
	// * if (!response.ok) throw Error("Failed to fetch user!");
	return response.json();
}
