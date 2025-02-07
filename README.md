## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Folder structure

```
├── root
│   ├── components
│   ├── app
│   │   ├── [pages]
│   │   │   ├── [components]
│   ├── hooks
│   ├── lib
│   ├── public
│   ├── api
│   ├── store
│   ├── constants
│   ├── utils

```

app: contains all pages to be rendered (explore app routing in nextJS for in depth info on how app based routing works in nextJS)

components: contains all components that can be used in the app

lib: contains all helper functions

hooks: contains all custom hooks

public: contains all static assets

api: contains all api routes

store: contains all api calls

constants: contains all constants

utils: contains all utility functions


/api/index.js : contains all endpoints

/store/[page]/[subpage]/[repo] : contains all api calls that will be used in that particular page
