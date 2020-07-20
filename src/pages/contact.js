import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Set up with Netlify forms on deployment
// https://www.gatsbyjs.org/docs/building-a-contact-form/

function ContactPage() {
  const inputStyle =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  const labelStyle = "block text-gray-700 text-sm font-bold mb-2"

  return (
    <Layout>
      <SEO
        keywords={[`Aron`, `Naylor`, `web developer`, `frontend`]}
        title="Contact"
      />
      <section className="flex flex-row justify-center w-full h-auto">
        <form className="w-auto xl:w-1/2 lg:w-1/3 bg-white shadow-md rounded border-2 border-gray-200 px-8 pt-6 pb-8 mb-4">
          <label id="nameLabel" for="name" className={labelStyle}>
            Name
            <input className={inputStyle} type="text" name="name" id="name" />
          </label>
          <label id="emailLabel" for="email" className={labelStyle}>
            Email
            <input
              className={inputStyle}
              type="email"
              name="email"
              id="email"
            />
          </label>
          <label id="subjectLabel" for="subject" className={labelStyle}>
            Subject
            <input
              className={inputStyle}
              type="text"
              name="subject"
              id="subject"
            />
          </label>
          <label id="messageLabel" for="message" className={labelStyle}>
            Message
            <textarea
              className={inputStyle}
              name="message"
              id="message"
              rows="5"
            />
          </label>
          <div class="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
            <input
              className="inline-block align-baseline font-bold text-md bg-white text-red-500 hover:text-red-800"
              type="reset"
              value="Clear"
            />
          </div>
        </form>
      </section>
    </Layout>
  )
}

export default ContactPage
