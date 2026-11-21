// src/server/proxy.mjs
import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';
import cors from 'cors';

const app = express();
app.use(cors());

function rewriteUrl(url, baseUrl) {
    if (!url) return url;
    if (!url.startsWith('http') && !url.startsWith('//')) {
        try {
            const resolved = new URL(url, baseUrl);
            return `/proxy?url=${encodeURIComponent(resolved.href)}`;
        } catch (e) {
            return url;
        }
    }
    return `/proxy?url=${encodeURIComponent(url)}`;
}

app.get('/proxy', async (req, res) => {
    const targetUrl = req.query.url;
    if (!targetUrl) return res.status(400).send('No URL provided');

    try {
        const { data: html } = await axios.get(targetUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
            responseType: 'text'
        });

        const $ = cheerio.load(html);

        $('a[href]').each((i, elem) => {
            const href = $(elem).attr('href');
            $(elem).attr('href', rewriteUrl(href, targetUrl));
        });

        $('img[src]').each((i, elem) => {
            const src = $(elem).attr('src');
            $(elem).attr('src', rewriteUrl(src, targetUrl));
        });

        $('script[src]').each((i, elem) => {
            const src = $(elem).attr('src');
            $(elem).attr('src', rewriteUrl(src, targetUrl));
        });

        $('link[rel="stylesheet"]').each((i, elem) => {
            const href = $(elem).attr('href');
            $(elem).attr('href', rewriteUrl(href, targetUrl));
        });

        // Inject a base tag to handle relative assets properly
        $('head').prepend(`<base href="${targetUrl}" />`);

        res.send($.html());
    } catch (error) {
        res.status(500).send(`Error fetching ${targetUrl}: ${error.message}`);
    }
});

export default app;