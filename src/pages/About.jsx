import { Fragment } from "react"
function About() {
  return (
    <Fragment>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project was maded using React, Tailwind and Github API.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
    </Fragment>
  )
}

export default About
