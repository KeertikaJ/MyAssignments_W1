const browserName = "chrome";

function getBrowserName() {
    if(browserName==="chrome") {
        var browserName;
        console.log("Inside block"+browserName);
    }
    console.log(browserName);
    console.log(typeof browserName);
}

getBrowserName()