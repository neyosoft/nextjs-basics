const express = require('express');
const next = require('next');

const dev = process.env.NODE.ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/p/:id', (req, resp) => {
            const actualPage = '/post';
            const queryParams = { title: req.param.id };
            app.render(req, resp, actualPage, queryParams);
        });

        server.get('/show-movie/:id', (req, resp) => {
            const actualPage = '/show';
            const queryParams = { id: req.param.id };

            console.log('Got here: ', actualPage, queryParams);

            app.render(req, resp, actualPage, queryParams);
        });

        server.get('*', (req, resp) => {
            return handle(req, resp);
        });

        server.listen(3000, (err) => {
            if (err) throw err;

            console.log('> Ready on http://localhost: 3000');
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
