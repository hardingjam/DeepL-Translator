## DeepL Translator

This simple React app will translate given text to any language in the DeepL Translate library.

### Get authorised

In the interest of security, I have not included an API Key in this version. You will find a config.js file in the src directory, with the following code:

```javascript
export const config = {
    API_KEY: "Your API key goes here 😊",
};
```

Simply replace the value of API_KEY with your DeepL Free key to start translating.

### Starting the app

First, run:

### `npm install`

This installs dependencies. Then in the project directory, you can run:

### `npm start`

This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
