export default defineNuxtConfig({
  extends: 'content-wind',

  app: {
    head: {
      script: [
        {
          // injects the config based on the environment
            src: "https://i.current.fyi/static/plebai.js",      
        },
        {
          src: 'https://i.current.fyi/static/constants.js'

        },
      ],
      link: [

          {
            rel:"stylesheet",
            href:"https://i.current.fyi/static/styles.css"

          }

      ]
    },
  }
}


)
