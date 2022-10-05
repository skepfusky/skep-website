import { useState } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePen, faGlasses } from "@fortawesome/free-solid-svg-icons"
import socials from "./Socials"
import styles from "./Navbar.module.scss"
import { DropdownContext } from "@/utils/Context"
import { NavLink } from "./NavLink"

export default function Navbar() {
  const [expand, setExpand] = useState(true)

  return (
    <DropdownContext.Provider value={{ expand, isExpanded: setExpand }}>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/">
            <a className={styles.logo}>skepfusky</a>
          </Link>
          <button
            onClick={() => setExpand(!expand)}
            id={styles["menu-btn"]}
            className={styles[!expand ? "open" : "closed"]}
          ></button>
          <div
            className={styles[!expand ? "dd-container" : "dd-container-closed"]}
          >
            <nav className={styles["dd-wrapper"]}>
              <section className={styles["dd-col"]}>
                <h2 className={styles["nav-heading"]}>
                  <span id={styles["hot-garbage"]}>Hot Garbage</span>{" "}
                  <span id={styles["gradient-heading"]}>Portfolio</span>
                </h2>
                <div role="list" id={styles["dd-col-list"]}>
                  <NavLink name="Projects I've Contributed" link="#" />
                  <NavLink name="Personal Dev Projects" link="#" />
                  <NavLink name="Discography" link="#" />
                  <NavLink name="Filmography" link="#" />
                  <NavLink name="Archived Works" link="#" />
                </div>
              </section>
              <section className={styles["dd-col"]}>
                <h2 className={styles["nav-heading"]}>
                  <span id={styles["gradient-heading"]}>
                    More about this idiot
                  </span>
                </h2>
                <div role="list" id={styles["dd-col-list"]}>
                  <NavLink name="Fursona" link="#" />
                  <NavLink name="Milestones" link="#" />
                  <NavLink name="Artworks" link="#" />
                  <NavLink name="codefusky" link="#" />
                </div>
              </section>
              <section className={styles["dd-col-grid"]}>
                <div id={styles["dd-col-item"]} className={styles["blog-item"]}>
                  <FontAwesomeIcon icon={faFilePen} id={styles["dd-fa-icon"]} />
                  Blog
                </div>
                <div
                  id={styles["dd-col-item"]}
                  className={styles["about-item"]}
                >
                  <FontAwesomeIcon icon={faGlasses} id={styles["dd-fa-icon"]} />
                  About
                </div>
                <div className={styles["lower-third"]}>
                  <div role="list" className={styles["lt-socials"]}>
                    {socials.map((item, i) => (
                      <Link key={i} href={item.link}>
                        <a
                          role="listitem"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={item.icon} size="lg" />
                        </a>
                      </Link>
                    ))}
                  </div>
                  <span>
                    Site written in{" "}
                    <NavLink name="Next.js" link="https://nextjs.org" />!
                  </span>
                </div>
              </section>
            </nav>
          </div>
        </div>
      </header>
    </DropdownContext.Provider>
  )
}