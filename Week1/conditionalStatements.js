function launchBrowser(browserName) {
    if(browserName === "chrome") {
        console.log("Chrome Browser");
    } else if(browserName === "firefox") {
        console.log("Firefox Browser")
    } else{
        console.log("Unlisted Browser: " +browserName);
    }
}

function runTests(testType) {
    switch(testType) {
        case "smoke":
            console.log("Test Type: SMOKE")
            break
        case "regression":
            console.log("Test Type: REGRESSION")
            break
        case "sanity" :
            console.log("Test Type: SANITY") 
            break
        default:
            console.log("Test Type: SMOKE")
            break
    }
}

launchBrowser("msedge");
runTests("smoke");
