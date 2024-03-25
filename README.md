# Web Performance Practice #10

## Requirements

- An installed version of Node.js
- pm2 installed globally (`npm install -g pm2`). May require using `sudo` depending on your system.

## How to run

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

To generate a production build, run:

```bash
npm run build
```

To run the production server, run:

```bash
npm run start
```

## Tasks

All the requirements are implemented. You can see the _express_ server configuration in the `./server/app.js` file. The server is configured to serve the static files from the `dist` directory and to listen on port 3000. Also, the data from the reservation form is being stored in a SQLite database that will be automatically created in `./db/sqlite.db`.

## pm2 commands

Once you have installed pm2, you can use the following commands to manage the server:

- Start the server: `npm run pm2-start`
- Reload the server: `npm run pm2-reload`
- Stop the server: `npm run pm2-stop`
- Delete the server: `npm run pm2-delete`
