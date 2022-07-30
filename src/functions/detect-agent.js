// This function will be used to detect the user agent
// It will return the value of the user agent being used
const detectAgent= () => {
    if (navigator.userAgent.includes("Chrome")) {
        return "chrome";
    }
    if (navigator.userAgent.includes("Firefox")) {
        return "firefox";
    }
    if (navigator.userAgent.includes("Safari")) {
        return "safari";
    }
}

export default detectAgent;