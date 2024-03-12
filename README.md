<!-- [![Website](https://img.shields.io/badge/website-f4511e?style=for-the-badge&logo=About.me&logoColor=white)](https://leogiesen.de/#/) -->
[![Vue](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)](https://v2.vuejs.org/) 
[![Is Website Up?](https://img.shields.io/website-up-down-green-red/http/monip.org.svg)](https://leogiesen.de/#/) 
![GitHub version](https://img.shields.io/github/v/release/lgiesen/title-case?color=green&include_prereleases)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/license/mit) 
<img align="right" height="72px" src="https://raw.githubusercontent.com/lgiesen/portfolio-v2/c907478f950776fef6cbfbfb9dabe628beded429/src/assets/logo/light/logo.svg"/>

# Portfolio - Leo Giesen


This project is deployed at [leogiesen.de](https://leogiesen.de/#/).
The original version of my portfolio can be inspected [here](https://github.com/lgiesen/portfolio-v1), which I created with HTMl5 CSS3 and JavaScript when I was 18.
 <!-- and on [Netlify](https://giesen.netlify.app/): [![Netlify Status](https://api.netlify.com/api/v1/badges/56383890-7eca-4786-9aad-0d4d3cfcc507/deploy-status)](https://app.netlify.com/sites/giesen/deploys) -->

## Project Setup

1. [VS Code](https://code.visualstudio.com "VS Code") is the recommended code editor
2. [Node.js](https://nodejs.org/en/download/ "Node")
3. [Vue.js](https://v3.vuejs.org/guide/installation.html#cli): `npm install -g @vue/cli #Install Command Line Interface`

Check your versions:

```
   node --version              # v16.14.2
   npm --version               # 8.5.0
   vue --version               # @vue/cli 5.0.8
```

### Serve/Start Front-end - Compiles and hot-reloads for development

```
npm run serve
#or start via User Interface with: vue ui
```

### Build for Production - Compiles and minifies for production

```
npm run build
```

Subsequently, the dist directory contents have to be copied into the portfolio-v2-dist directory and pushed to the repository to publish the changes because the hosting is based on the portfolio-v2-dist repository. This has to be performed because the hosting plan is unable to build from production by itself.

## General Advice for Web Projects

### SEO (Search Engine Optimization)

- Keep visitors on your website (dwell time) by providing excellent content (!) (define important keywords, which people search to get to your website)
- Improve loading speed (see Improve Performance)
- Optimize your HTML
  - Use alt attributes in images so that the search engine knows what you display
  - Use aria tags for more complicated displayed content, e.g., sliders
  - Use article tags for Bots to know what main content the site presents
- Increase your Click-Through-Rate (CTR)
- Make use of metadata (located in head), e.g. description tag displayed in google search results
- Responsive Web Design ([Mobile Friendly Test](https://search.google.com/test/mobile-friendly))
- Linked by other sources, e.g. social media and other websites
- Tools & Guidelines:

  - [Google Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)

   <img src="https://moz.imgix.net/learn/guides/Mozlows-01-outline.svg?auto=format&ch=Width&fit=max&q=50&s=e088165a17e355b8186964266ef71ca5" width="500px">

### Improve Performance

- Reduce the image size with a [compressor](http://jpeg-optimizer.com/)
- Avoid CDNs
- Tools & Guidelines:
  - [Check Page Speed](https://developers.google.com/speed/pagespeed/insights/)
