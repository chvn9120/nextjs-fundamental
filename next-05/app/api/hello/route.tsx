/*
 ? Route Handlers are not cached by default. You can, however, opt into caching for GET methods.
 ? To do so, use a route config option such as
 * export const dynamic = "force-static";
*/

export const GET = () => Response.json({ message: "Hello, NextJS" });
