export default async function getUser(userId: string) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
	// * if (!response.ok) throw Error("Failed to fetch user!");
	return response.json();
}
