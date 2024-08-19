import fs from "fs";
import path from "path";
import matter from "gray-matter"; // ?https://www.npmjs.com/package/gray-matter
import html from "remark-html";
import { remark } from "remark";

const postsDir = path.join(process.cwd(), "blog_posts");

export function getSortedPostsData() {
	// Get file names under /posts
	const fileNames = fs.readdirSync(postsDir);
	const allPostsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, "");

		// Read markdown file as string
		const fullPath = path.join(postsDir, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		// Combine the data with the id
		const blogPost: BlogPost = {
			id,
			title: matterResult.data.title,
			date: matterResult.data.date,
		};

		return blogPost;
	});

	// Sort posts by date
	return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
	const fullPath = path.join(postsDir, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	const processedContent = await remark().use(html).process(matterResult.content);

	const contentHtml = processedContent.toString();

	// Combine the data with the id
	const blogPostWithHTML: BlogPost & { contentHtml: string } = {
		id,
		title: matterResult.data.title,
		date: matterResult.data.date,
		contentHtml,
	};

	return blogPostWithHTML;
}
