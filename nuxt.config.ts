export default defineNuxtConfig({
  extends: 'content-wind',

  app: {
    head: {
      script: [
        {
          // injects the config based on the environment
            src: "https:/i.current.fyi/static/plebai.js",      
        },
        {
          src: 'https://starbackr-images.s3.amazonaws.com/static/constants.js'

        },
      ],
      link: [

          {
            rel:"stylesheet",
            href:"https:/i.current.fyi/static/styles.css"

          }

      ]
    },
  }
}


)
