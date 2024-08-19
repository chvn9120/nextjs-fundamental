export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

    // ? Get any params from requests
	const obj = Object.fromEntries(searchParams.entries());

	return Response.json(obj);

    // ? OR get the specific params
    /*
     * const name = searchParams.get("name");
     * const instrument = searchParams.get("instrument");
     * return Response.json({ name, instrument });
    */

}
