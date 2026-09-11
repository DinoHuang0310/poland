import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isDev = command === 'serve'

  const {
    VITE_URL,
  } = loadEnv(mode, process.cwd())

  // GA 對應 domain
  const domains = {
    'www.businesstoday.com.tw': 'G-E8H9YJZQJP',
    'esg.businesstoday.com.tw': 'G-SB7EH4Y2DY',
  }

  const target = Object.keys(domains).find((key) =>
    VITE_URL?.includes(key)
  )

  const gaId = target ? domains[target] : null

  // 目前只有活動頁需要 GTM
  const isEvent = VITE_URL?.includes('events.businesstoday.com.tw')

  return {
    preview: {
      host: '0.0.0.0',
      allowedHosts: ['.ngrok-free.app'],
    },

    base: isDev ? '/' : './',

    plugins: [
      vue(),
      tailwindcss(),
      {
        name: 'inject-ga-gtm',

        transformIndexHtml() {
          // development 不注入 GA / GTM
          if (isDev) {
            return []
          }

          if (!target) {
            console.error('未知 domain name:', VITE_URL)
            return []
          }

          const tags = []

          /**
           * Google Analytics
           */
          if (gaId) {
            tags.push(
              {
                tag: 'script',
                attrs: {
                  async: true,
                  src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
                },
                injectTo: 'head',
              },
              {
                tag: 'script',
                children: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
                injectTo: 'head',
              }
            )
          }

          /**
           * Google Tag Manager
           *
           * 目前只有 events.businesstoday.com.tw 使用 GTM
           */
          if (isEvent) {
            tags.push(
              {
                tag: 'script',
                children: `
                  (function(w,d,s,l,i){
                    w[l]=w[l]||[];
                    w[l].push({
                      'gtm.start': new Date().getTime(),
                      event:'gtm.js'
                    });

                    var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),
                        dl=l!='dataLayer'?'&l='+l:'';

                    j.async=true;
                    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

                    f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-N8FFXWM');
                `,
                injectTo: 'head',
              },
              {
                tag: 'noscript',
                children: `
                  <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-N8FFXWM"
                    height="0"
                    width="0"
                    style="display:none;visibility:hidden"
                  ></iframe>
                `,
                injectTo: 'body-prepend',
              }
            )
          }

          return tags
        },
      },
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})