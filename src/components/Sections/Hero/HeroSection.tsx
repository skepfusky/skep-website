import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { cloudinary } from "@/utils/ImgProviders"
import { SectionContainer } from "../SectionContainer"
import { RoundedBtn } from "../../Buttons"
import VaporwaveGrid from "../../VaporwaveGrid"
import sectionStyles from "../SectionContainer.module.scss"
import styles from "./HomeHero.module.scss"

export function HeroSection() {
  return (
    <SectionContainer className={sectionStyles.hero} expandContent>
      <div className={styles["wrapper-responsive"]}>
        {/* Image container */}
        <div className={styles["img-wrapper"]}>
          <div className={styles["img-fix"]}>
            <Image
              src={cloudinary({
                rootDir: "fursonas",
                width: 720,
                fileName: "comm_for_davey_g2_i3nmhp.png"
              })}
              alt="Art by catastrophe#6282 on Discord"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
        {/* info */}
        <article className={styles["info-wrapper"]}>
          <h2 className={styles["heading"]}>
            {"Hi, I'm "}
            <span className={styles["name-gradient"]}>Kuroji Fusky</span>
            {"! A fox-husky abomination"}
          </h2>
          <h3>Suffering from emotional damage</h3>
          <div className={styles["grid-button-wrapper"]}>
            <RoundedBtn link="/blog">Recent Blog Posts</RoundedBtn>
            <RoundedBtn link="/character">
              Character ref and artworks
            </RoundedBtn>
          </div>
          <span
            className={styles["artwork-credit"]}
            aria-label="Artwork by catastrophe#6282 on Discord"
          >
            {"Art by "}
            <FontAwesomeIcon icon={faDiscord} />
            <strong>&nbsp;catastrophe#6282</strong>
          </span>
        </article>
      </div>
      {/* Moving grid */}
      <div className={styles["vaporwave-grid"]}>
        <VaporwaveGrid />
      </div>
    </SectionContainer>
  )
}