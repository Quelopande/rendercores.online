# Rendercores 
Developed with tailwind v4 by Quelopande for the game server hosting [rendercores.online](https://www.rendercores.online)

## Development
- Install the lastest version of [node.js](https://nodejs.org/en)
- Use tailwind CLI to developed the app [Tailwind CLI guide](https://tailwindcss.com/docs/installation/tailwind-cli)
- I recommend using [Tailwind VSCODE extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss), this extension will help you with tailwind classes
- The input.css file in `/src/input.css` establish native CSS variables [More info about variables in Tailwind](https://tailwindcss.com/docs/compatibility)
- To run the code in the root code open a command terminal and use the `npx tailwindcss -i ./src/input.css -o ./public/output.css --watch`. This updates the `/public/output.css` (style sheet of the pages).

## How to deploy / put the web into production
You don't need neither node.js nor tailwind CLI to get the websito into production. To put it into production, you must only put the `/public/` folder in your website files.