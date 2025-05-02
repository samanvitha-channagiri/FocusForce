chrome.storage.sync.get('blockedSites',function(data){
    var blockedSites = data.blockedSites;
    for(var i=0;i<blockedSites.length;i++){
        if(window.location.href.includes(blockedSites[i])){
            document.documentElement.innerHTML="You've blocked this website for a reason, remember it!"
        }
    }
})