let puppeteer = require("puppeteer")
let gtab

let launchBrowser = puppeteer.launch({
    headless:false
})

launchBrowser.then(function(browserInstance){
    let tabOpened = browserInstance.newPage()
    return tabOpened;
}).then(function(newTab){
    let hackerTab = newTab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login")
    gtab = newTab
    
    return hackerTab;
}).then(function(){
    let enterEmail = gtab.type("#input-1" , "vixovid523@asfalio.com" , {delay : 2000})
    return enterEmail

}).then(function(){
    let enterPassword = gtab.type("#input-2" , "123456789" , {delay : 1000})
    return enterPassword

}).then(function(){
    let LoginClick = gtab.click("button[data-analytics='LoginPassword']", {delay : 1000})
    let NavigationPromise = Promise.all([LoginClick , gtab.waitForNavigation({waitUntil : "networkidle0"})])
    return NavigationPromise;

}).then(function(){
    let kitClick = gtab.click(".card-content h3[title='Interview Preparation Kit']")
    return kitClick
}).then(function(){
    let warmupChallengesClick = gtab.click("#base-card-6-link")
    return warmupChallengesClick
    
}).catch(function(err){
    console.log(err);
})

