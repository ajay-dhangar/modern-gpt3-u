# How to build modern UI/UX and React Js GPT-3 landing page tutorial web app?

**Hi there!**

In this article, we are building a web app website.

![image](https://user-images.githubusercontent.com/99037494/211154946-fe9cc440-4167-40ed-bb7d-a160b7bcf7bf.png)

### Intro of this web app

1. Modern UI/UX and React Js.

2. This is GPT-3 OpenAI landing page tutorial.

3. It is fully responsive.

![image](https://user-images.githubusercontent.com/99037494/211154509-a3a12eb5-0dc0-4102-8399-3c6be9d7e499.png)

**Demo** - [GPT-3](https://modern-gpt3-ui-ajay.vercel.app/)<br>

### We learn:-

- React functional components
- React file & folder structure
- Best CSS practices and flex & Grid
- Fundamentals of CSS BEM Model
- From soft & pleasant animations
- To complex Gradients
- Perfectly placed Media Queries for satisfactory responsiveness (covering almost all devices)
- And in the end we'll learn how to deploy our website to extremely fast servers & give them a custom domain name.

If you want to purchase your own domain, then head over to Hostinger. However, if you're simply looking to learn how to build a web application, you don't need to worry about a domain as I can help you host your website for free.

### let's start

First, you need a code editor like Visual Studio Code (VS Code). I personally recommend VS Code because it is the best code editor, offering a wide range of extensions to help you write better code. VS Code is a powerful and versatile tool that can be used for a variety of programming languages and tasks, making it an ideal choice for developers of all levels. With its intuitive user interface and comprehensive set of features, VS Code is the perfect choice for anyone looking to write better code.

**Now, follow my steps step-by-step for success.**

**Step-1:**  Create a folder named  `gpt-3-ui`. And open the folder in vs code.

![image](https://user-images.githubusercontent.com/99037494/211154818-a8b504d2-52af-49bd-b43f-fc25b0f581cb.png)

**Step 2:** Open the terminal and write the command `npx create-react-app ./` and press enter.

![ajay](https://user-images.githubusercontent.com/99037494/211154702-2a25aba9-4826-4fe7-8662-3943ee904ef8.png)

![Ajay](https://user-images.githubusercontent.com/99037494/211154799-00506b45-3bc6-4615-b931-3708a917f277.png)


**Step-3:** if your app is successfully created then write ``npm start`` on the terminal and press enter and you can view your app on a browser with the help of ``http://localhost:3000``.

![image](https://user-images.githubusercontent.com/99037494/211155032-e49269f9-c11d-4105-bb48-2f7d3d466cdd.png)

![image](https://user-images.githubusercontent.com/99037494/211155042-e3540c2a-913c-4747-b72c-dda1825dd032.png)

![image](https://user-images.githubusercontent.com/99037494/211155062-05dcda85-9f73-45ae-9376-25682cca54ca.png)

Step-4: now, you go to delete the ``src`` folder

![image](https://user-images.githubusercontent.com/99037494/211157172-c6ed0b09-b72d-474e-ab07-6df97511bf56.png)

**Step-5:** create a new ``src`` folder and create some files in the ``src`` folder ``index.Js``, ``App.js``, `App.css`.

![image](https://user-images.githubusercontent.com/99037494/211157258-4f326a24-c938-455a-a52f-66e0f42d4b5e.png)

**Step-6:** write code in the  ``index.Js``, ``App.js`` files.

``index.js``

```Javascript 
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

```

`App.js`

```Javascript 
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

```

**Step-7:** Download Extension `Prettier` for set code in format.

![image](https://user-images.githubusercontent.com/99037494/211157920-6c5dadf0-5b0a-4d2c-bab6-d891a98e3f0a.png)


**Step-8:** Now, save code and run command `npm start`

![image](https://user-images.githubusercontent.com/99037494/211158011-a83c02dd-0dc1-46d9-85f1-116c3b4f81ac.png)

**Step-9:** Now, create another two folder in `src` folder. 
1. `components`

2. `containers`

![image](https://user-images.githubusercontent.com/99037494/211158220-32a5b2af-664b-49e0-877a-7f6263f9c92f.png)

