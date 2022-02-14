document.addEventListener("click", (e) => {
    browser.tabs.executeScript({
        file: "borToBarEngine.js"
    });
    if (e.target.id == 'bor') {
        browser.tabs.executeScript({
            file: "borToBar.js"
        });
    }
    else if (e.target.id == 'bar') {
        browser.tabs.executeScript({
            file: "barToBor.js"
        });
    }
});