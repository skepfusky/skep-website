import { ParallaxProvider } from "react-scroll-parallax"
import DefaultLayout from "@/layouts/Default"
import SEOHead from "@/components/SEOHead"
import HeroHeader from "@/components/layouts/HeroHeader"
import ProjectsSection from "@/components/layouts/ProjectsSection"
import MusicSection from "@/components/layouts/MusicSection"
import VideoSection from "@/components/layouts/VideoSection"
import SectionSeparator from "@/components/SectionSeparator"

export default function Home() {
	return (
		<ParallaxProvider>
			<SEOHead image="/static/avatars/07.png" />
			<HeroHeader />
			<SectionSeparator />
			<ProjectsSection />
			<SectionSeparator clipPath="polygon(0 0, 100% 86%, 100% 100%, 0 100%)" />
			<MusicSection />
			<SectionSeparator />
			<VideoSection />
		</ParallaxProvider>
	)
}

Home.PageLayout = DefaultLayout
