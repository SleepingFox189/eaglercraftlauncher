(function () {
    var url = "http://147.185.221.211:30625/";

    // Open a new about:blank window
    var win = window.open();

    if (!win) {
        alert("Popup blocked. Please allow popups and reload.");
        return;
    }

    // Set the icon and title
    win.document.head.innerHTML += '<link rel="icon" href="favicon.png" type="image/png">';
    win.document.head.innerHTML += '<title>Sleeping\'s Server</title>';

    // Create and style the iframe
    var iframe = win.document.createElement('iframe');
    iframe.style = "position:fixed;width:100vw;height:100vh;top:0;left:0;border:none;z-index:9999;background-color:black;";
    iframe.src = url;

    // Append the iframe
    win.document.body.style.margin = "0";
    win.document.body.appendChild(iframe);

    // Optional: redirect current tab to a neutral page
    window.location.href = "https://google.com";
})();
