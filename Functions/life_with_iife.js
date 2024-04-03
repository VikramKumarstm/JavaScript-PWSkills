function downloadScriptFromIdeoneAndPopulateDatabase() {
    console.log("Old function implementation.");
}

downloadScriptFromIdeoneAndPopulateDatabase();

(function() {
    function downloadScriptFromIdeoneAndPopulateDatabase() {
        console.log("New function created");
    }
    
    console.log("calling intern code");
    downloadScriptFromIdeoneAndPopulateDatabase();
})();

