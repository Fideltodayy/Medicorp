const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/digi-dairy-apis/v1',
            createProxyMiddleware({
            target: 'http://localhost', // <--- config the url based on your backend server
            changeOrigin: true,
            secure: false, // If you're dealing with an HTTPS target, but do not want to verify the SSL Cert.
            onProxyReq: (proxyReq, req, res) => {
                // If you have authorization headers, set them in the proxy request
                if (req.headers.authorization) {
                    proxyReq.setHeader('Authorization', req.headers.authorization);
                }
            },
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
        })
    )
}