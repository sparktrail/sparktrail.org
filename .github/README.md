# sparktrail.org
The Sparktrail site is built with [Hugo](https://github.com/gohugoio/hugo).

Site content is written in Markdown and can be found in the ```content``` folder.

### Development
```
$ npm install 
$ npm start # dev server with live reload at http://localhost:1313
```

### Deployment
The site is deployed with [Netlify](https://www.netlify.com/). 

A build process is triggered when new changes are pushed to the GitHub repository. Therefore, you'll need write access to deploy your code.

Netlify is set up to automatically handle deployments according to the settings below.
- Production - ```master``` branch
- Deploy preview - any open pull requests

### Other Info
