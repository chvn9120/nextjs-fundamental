export default async function getWikiResults(searchTerm: string) {
	const searchParams = new URLSearchParams({
        // ? This is the required params for the Wikipedia API
		action: "query",
		generator: "search",
		gsrsearch: searchTerm,
		gsrlimit: "20",
		prop: "pageimages|extracts",
		exchars: "100",
		exintro: "true",
		explaintext: "true",
		exlimit: "max",
		format: "json",
		origin: "*",
	});

	const response = await fetch(`https://en.wikipedia.org/w/api.php?${searchParams}`);

	return response.json();
}
