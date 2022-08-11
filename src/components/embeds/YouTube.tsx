import styles from "@/styles/components/YoutubeEmbed.module.scss"

export default function YouTube({
  id,
  playlist,
  rounded
}: {
  id?: string
  playlist?: string
  rounded?: boolean
}) {
  return (
    <iframe
      title="YouTube Video Player"
      src={
        playlist
          ? `https://www.youtube-nocookie.com/embed/videoseries?list=${playlist}&cc_load_policy=1`
          : `https://www.youtube-nocookie.com/embed/${id}`
      }
      frameBorder="0"
      allow="accelerometer; encrypted-media; autoplay"
      className={rounded !== undefined ? styles["container-rounded"].toString() : styles.container.toString()}
    />
  )
}
