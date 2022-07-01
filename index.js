const { chromium } = require('playwright');
const path = require('path');

(async () => {
    const pathToExtension = path.join(__dirname, "Ex", '10.16.2_0');
    const userDataDir = path.join(__dirname, "Ex");
    const browserContext = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
        args: [
            `--disable-extensions-except=${pathToExtension}`,
            `--load-extension=${pathToExtension}`
        ]
    });
    let [backgroundPage] = browserContext.backgroundPages();
    if (!backgroundPage)
        backgroundPage = await browserContext.waitForEvent('backgroundpage');

    // Test the background page as you would any other page.

})();