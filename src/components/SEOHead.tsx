import Head from "next/head";
import { useRouter } from "next/router";
interface ISEOHeadProps {
	title: string;
	description: string;
	image?: string;
	keywords?: string[];
}

export default function SEOHead({
	title,
	description,
	image,
	keywords
}: ISEOHeadProps) {
	const router = useRouter();
	const SITE_NAME = "skepfusky";

	return (
		<Head>
			<title>
				{title} • {SITE_NAME}
			</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords?.join(", ")} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#fff" />
			<link rel="icon" href="/favicon.ico" />
			<link rel="apple-touch-icon" href="/favicon.ico" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			{image && <meta property="og:image" content={image} />}
			<meta name="og:url" content={`https://searchpets.xyz${router.asPath}`} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={SITE_NAME} />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:creator" content="@skepfuskyjs" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			{image && <meta name="twitter:image" content={image} />}
			<link rel="canonical" href={`https://searchpets.xyz${router.asPath}`} />
		</Head>
	);
}