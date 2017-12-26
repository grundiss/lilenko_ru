import path from 'path';
import express from 'express';

export default root => {
    const app = express();

    if(process.env.NODE_ENV === 'development') {
        app.use('/static', express.static(path.join(root, 'dist/static')));
    }

    app.get('/', (req, res) => {
        res.send(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>lilenko.ru</title>
                </head>
                <body>
                    <div id="app"></div>
                    <script src="static/js/main.bundle.js"></script>
                </body>
            </html>
        `);
    });

    app.listen(3000, () => {
        console.log('Server is started on a port 3000');
    });
};