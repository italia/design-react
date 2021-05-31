module.exports = {
  "extends": [
    "react-app",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  "overrides": [
      {
        "files": ['*.mdx'],
        "extends": 'plugin:mdx/recommended',
        "settings": {
          "mdx/code-blocks": false,
      }
    }
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}