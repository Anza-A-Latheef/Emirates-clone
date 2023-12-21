const CACHE_NAME="Version-1";
const urlsToCache=['index.html','offline.html'];


//Install ServiceWorker
self.addEventListener("install",(event)=>{
    event.waitUntil(
        Caches.open(CACHE_NAME)
        .then((cache)=>{
            console.log('opened cache');
            return cache.addAll(urlsToCache);
        })
    )
});

//Listen for requests
self.addEventListener("fetch",(event)=>{
    event.respondWith(
        Caches.match(event.request)
        .then(()=>{
            return fetch(event.request)
            .catch(()=>Caches.match('offline.html'))
        })
    )
});

//Active Service worker
self.addEventListener("activate",(event)=>{
    const cacheWhiteList=[];
    cacheWhiteList.push(CACHE_NAME)
    event.waitUntil(
        Cache.keys().then((cacheNames)=>
        promises.all(cacheNames.map(cachename)=>
        {if(!cacheWhiteList.includes(cacheNames))
        {
            return caches.delete(cacheName);
        }})
        )))});

