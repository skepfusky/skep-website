import Head from "next/head"
import { useRouter } from "next/router"
import styles from "@/styles/Layout.module.scss"

export default function Container({
  title,
  description,
  image,
  children,
  wrap
}: IContainerProps) {
  const router = useRouter()

  if (router.pathname === "/") {
    title = "official skepfusky website"
    image = "/static/banners/github-showcase.png"
    description =
      "A 20-year-old fox-husky hobbyist as a full-stack web developer, filmmaker, video editor, designer, and music producer from the Philippines!"
  }

  let url = `https://skepfusky.xyz${router.pathname}`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="portfoilo, skepfusky, Kokoro Husky, projects, UI, stats"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@skepfuskyjs" />
        <meta name="twitter:creator" content="@skepfuskyjs" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={url} />
        <link rel="canonical" href={url} />
      </Head>
      {wrap ? (
        <main className={styles.wrapper} role="main">
          {children}
        </main>
      ) : (
        <main role="main">{children}</main>
      )}
    </>
  )
}
