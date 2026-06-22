export class Browser {
    browserName;
    browserVersion;
    constructor(browserName, browserVersion) {
        this.browserName = browserName;
        this.browserVersion = browserVersion;
    }
    openURL() {
        console.log("open Browser URL");
    }
    closeURL() {
        console.log("close Browser URL");
    }
    navigateBack() {
        console.log("navigate back to Browser URL");
    }
}
