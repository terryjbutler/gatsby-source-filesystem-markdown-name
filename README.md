# gatsby-source-filesystem-markdown-name

Adds a new node field called "name" designed to filter on a directory referenced by gatsby-source-filesystem:

## Install

```
npm i gatsby-source-filesystem-markdown-name
```

or

```
yarn add gatsby-source-filesystem-markdown-name
```

## Example gatsby-config.js

```javascript
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/posts/`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/pages/`,
        name: 'pages',
      },
    },
    'gatsby-source-filesystem-markdown-name',
  ]
```

# Example GraphQL Query

```graphql
query MyQuery {
  allMarkdownRemark(filter: {fields: {sourceName: {eq: "posts"}}}) {
    edges {
      node {
        fields {
          slug
          sourceName
        }
      }
    }
  }
}
```