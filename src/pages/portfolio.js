import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortfolioCard from "../components/portfolioCard"
import { getImage } from "../utils/getImage"

export default function Portfolio() {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "portfolio" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.edges.map(
    image => image.node.childImageSharp.fluid
  )

  const portfolioItems = [
    {
      src: getImage(images, "weatherapp"),
      alt: "weather react native app",
      title: "Native Weather App",
      date: "23/08/2020",
      description: "A native weather app built with React Native.",
      skill: ["React", "CSS3"],
      link: "https://expo.io/@pegasus18/weather",
    },
    {
      src: getImage(images, "caths-blog"),
      alt: "sunshinecray blog site",
      title: "Travel Blog",
      date: "08/08/2020",
      description: "A personal travel blog.",
      skill: ["GatsbyJS", "React", "Bootstrap", "Netlify"],
      link: "http://www.sunshinecray.com",
    },
    {
      src: getImage(images, "portfolio"),
      alt: "Portfolio Image",
      title: "Portfolio",
      date: "20/07/2020",
      description: "Personal portfolio.",
      skill: ["GatsbyJS", "React", "Tailwind", "Netlify"],
      link: "https://aronnaylor.com",
    },
    {
      src: getImage(images, "apple-clone"),
      alt: "apple.com Clone",
      title: "apple.com Clone",
      date: "19/07/2020",
      description: "A clone of Apple.com.",
      skill: ["Bootstrap", "CSS3", "HTML5"],
      link: "https://apple-clone-aron-naylor.bss.design/",
    },
    {
      src: getImage(images, "mlport"),
      alt: "machine learning image",
      title: "Machine Learning - Breast Cancer",
      date: "7/07/2020",
      description: "A neural network machine learning model to predict breast cancer recurrence.",
      skill: ["Python"],
      link: "https://colab.research.google.com/drive/1IjasOM7Wy22LFtBGry6N0Q84AhyT50Uh?usp=sharing",
    },
    {
      src: getImage(images, "placeholder"),
      alt: "Python Hangman",
      title: "Python Hangman Game",
      date: "6/06/2020",
      description: "A simple game of hangman using Python.",
      skill: ["Python"],
      link: "https://repl.it/@AronNaylor/PyHangman",
    },
    {
      src: getImage(images, "choropleth"),
      alt: "D3.js Choropleth Map",
      title: "Choropleth Map",
      date: "25/05/2020",
      description: "An interactive Choropleth data visualization map built with D3.js.",
      skill: ["D3", "Javascript", "CSS3"],
      link: "https://codepen.io/AronNaylor/full/GRpNwBY",
    },
    {
      src: getImage(images, "heat"),
      alt: "D3.js Heat Map",
      title: "Heat Map",
      date: "24/05/2020",
      description: "An interactive heat visualization map built with D3.js.",
      skill: ["D3", "Javascript", "CSS3"],
      link: "https://codepen.io/AronNaylor/full/oNjzLmQ",
    },
    {
      src: getImage(images, "markdown"),
      alt: "Markdown Previewer",
      title: "Markdown Previewer",
      date: "03/04/2020",
      description: "A markdown previewer application built using React.",
      skill: ["React", "Javascript", "CSS3"],
      link: "https://codesandbox.io/s/github/AronNaylor/React-Markdown-Previewer",
    },
    {
      src: getImage(images, "pomodoro"),
      alt: "React Pomodoro Clock",
      title: "React Pomodoro Clock",
      date: "03/04/2020",
      description: "A simple pomdoro timer build using React.",
      skill: ["React", "Bootstrap", "Javascript", "CSS3"],
      link: "https://codesandbox.io/s/github/AronNaylor/FreeCodeCamp_Pomodoro_Timer",
    },
    {
      src: getImage(images, "typing"),
      alt: "React Speed Typing Game",
      title: "React Speed Typing Game",
      date: "30/03/2020",
      description: "A Simple speed typing game.",
      skill: ["React", "Javascript", "CSS3"],
      link: "https://codesandbox.io/s/github/AronNaylor/Speed-typing-game",
    },
  ];

  return (
    <Layout>
      <SEO
        keywords={[`Aron`, `Naylor`, `web developer`, `frontend`]}
        title="Portfolio"
      />
      <div className="flex flex-wrap w-full h-auto md:px-2 lg:-mx-4">
        {portfolioItems.map(item => {
          return (
            <div className="w-full md:px-2 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 my-2">
              <PortfolioCard
                src={item.src}
                alt={item.alt}
                title={item.title}
                date={item.date}
                description={item.description}
                skill={item.skill}
                link={item.link}
              />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
