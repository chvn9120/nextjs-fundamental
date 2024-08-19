// ? More information about Intl.DateTimeFormat
// ? at https://shorturl.at/Qz2BQ
export default function getFormattedDate(dateString: string) {
	return new Intl.DateTimeFormat(["en-GB", "vi"], { dateStyle: "long" }).format(new Date(dateString));
}
