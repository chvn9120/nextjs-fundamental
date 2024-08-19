import Link from "next/link";
import { notFound } from "next/navigation";

import { getPostData, getSortedPostsData } from "@/lib/posts";
import getFormattedDate from "@/lib/getFormattedDate";
import ScrollToTopBtn from "@/app/components/ScrollToTopBtn";
import FloatingHomeBtn from "@/app/components/FloatingHomeBtn";

export function generateStaticParams() {
	const posts = getSortedPostsData();

	return posts.map((post) => ({
		postId: post.id,
	}));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
	const posts = getSortedPostsData();
	const { postId } = params;

	const post = posts.find((post) => post.id === postId);

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: post.title,
	};
}

export default async function Post({ params }: { readonly params: { postId: string } }) {
	const posts = getSortedPostsData();

	const { postId } = params;

	if (!posts.find((post) => post.id === postId)) {
		return notFound();
	}

	const { title, date, contentHtml } = await getPostData(postId);

	const pubDate = getFormattedDate(date);

	return (
		<main className="relative px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
			<h1 className="text-3xl mt-4 mb-0">{title}</h1>
			<div className="flex justify-between">
				<p className="mt-0">{pubDate}</p>
				<Link href="/" className="mt-0 no-underline">
					← Home
				</Link>
			</div>
			<article>
				<section dangerouslySetInnerHTML={{ __html: contentHtml }} />

				<div className="sticky bottom-5 flex justify-between">
					{/* <Link
						href="/"
						className="
							no-underline italic						
							backdrop-blur-sm bg-black/60
							inline-flex items-center px-4 py-2
							border border-transparent rounded-md font-semibold text-white"
					>
						Home
					</Link> */}
					<FloatingHomeBtn />
					<ScrollToTopBtn />
				</div>
			</article>
		</main>
	);
}
