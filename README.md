## DeepL Translator

This simple React app will translate given text to any language in the DeepL Translate library.

### Get authorised

In the interest of security, I have not included an API Key in this version. In order to translate text, simply create a config.js file in the src directory, with the following code:

```javascript
export const config = {
    API_KEY: "Your DeepL Free API key goes here",
};
```

### Starting the app

In the project directory, you can run:

### `npm start`

This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
