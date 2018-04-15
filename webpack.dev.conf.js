
const merge = require('webpack-merge');
const path = require('path');
const base = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const express = require('express');

const app = express();

const router = express.Router();

const apiRouter = express.Router();

app.use(router);
app.use('/api', apiRouter);



module.exports = merge(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html', filename: 'index.html' }),
    ],
    devServer: {
        contentBase: './views',
        before(app) {
            const bodyParser = require('body-parser');
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(bodyParser.json());
            app.post('/api/Admin/Login', function (req, res) {
                let user = req.body;
                if (user.username == 'admin' && user.password == '123456') {
                    res.json({
                        code: '001',
                        msg: 'bingo'
                    })
                } else {
                    res.json({
                        code: '002',
                        msg: 'go out'
                    })
                }
            })
        }
    }
})