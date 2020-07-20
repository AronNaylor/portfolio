import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Header() {
  return (
    <div className="flex flex-row w-full p-5 border-b border-gray-500">
      <div className="w-2/3 flex justify-start">
        <nav>
          <AniLink
            swipe
            direction={"right"}
            className="px-2"
            activeClassName="font-bold"
            to="/"
          >
            Home
          </AniLink>{" "}
          <AniLink
            swipe
            direction={"right"}
            className="px-2"
            activeClassName="font-bold"
            to="/skills"
          >
            Skills
          </AniLink>{" "}
          <AniLink
            swipe
            direction={"right"}
            className="px-2"
            activeClassName="font-bold"
            to="/portfolio"
          >
            Portfolio
          </AniLink>{" "}
          <AniLink
            swipe
            direction={"right"}
            className="px-2"
            activeClassName="font-bold"
            to="/contact"
          >
            Contact
          </AniLink>{" "}
        </nav>
      </div>
      <div className="w-1/3 flex justify-end">
        <a
          href="https://linkedin.com/in/aron-naylor"
          target="blank"
          className="pr-4"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="lg"
            style={{ color: "#0077B5" }}
          />
        </a>
        <a href="https://github.com/AronNaylor" target="blank" className="pr-4">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
    </div>
  )
}

export default Header
