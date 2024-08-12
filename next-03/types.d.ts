type Result = {
    // ? individual result has a page id
	pageid: string;
	title: string;
	extract: string;
	thumbnail?: {
		source: string;
		width: number;
		height: number;
	};
};

type SearchResult = {
	query?: {
		pages?: Result[];
	};
};
