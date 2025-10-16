(function () {
    const url = "http://147.185.221.211:30625/";

    const win = window.open();
    if (!win) {
        document.body.innerText = "Popup blocked. Please allow popups and reload.";
        return;
    }

    win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Cavans Server</title>
            <link rel="icon" href="favicon.png" type="image/png">
            <style>
                body { margin: 0; height: 100vh; overflow: hidden; background-color: black; }
                iframe { border: none; width: 100vw; height: 100vh; }
            </style>
        </head>
        <body>
            <iframe src="${url}"></iframe>
        </body>
        </html>
    `);
    win.document.close();

    // Optional: redirect current tab to a neutral page
    window.location.href = "https://google.com";
})();
