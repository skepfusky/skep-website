interface YTPlayerProps {
	link?: string
	style?: React.CSSProperties
}

export default function YTPlayer(props: YTPlayerProps) {
	return (
    <iframe
      className="aspect-video overflow-hidden rounded-xl block bg-neutral-700"
      style={props.style}
      // prettier-ignore
      src={`https://www.youtube-nocookie.com/embed/${props.link ?? ""}?cc_load_policy=1`}
      frameBorder="0"
      loading="lazy"
      allow="encrypted-media"
    ></iframe>
  )
}