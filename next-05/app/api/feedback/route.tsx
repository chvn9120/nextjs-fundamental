type FeedBack = {
	name?: string;
	email?: string;
	message?: string;
};

export async function POST(request: Request) {
	const data: FeedBack = await request.json();
	console.info(`data: ${data}`);

	const { name, email, message } = data;
	return Response.json({ name, email, message });
}
