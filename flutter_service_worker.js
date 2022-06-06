'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "02b1fbb5eb4793682048f396cc2e67ca",
".git/config": "aae2462f8f10cc092c17a5a4bca67539",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5835db4953901cc903953ad663f4e181",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "491ad8f164d32c0ff3af637aedadeb09",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2503f552a91b4d54e27aed077cc13539",
".git/logs/refs/heads/main": "2503f552a91b4d54e27aed077cc13539",
".git/logs/refs/remotes/origin/main": "512b6af5df406e35c26f1561a0310159",
".git/objects/02/ce53853d6d8015a3d65a75602dbf3b2c5b20ec": "6acb5618db1ea5d4af9bc93050a14aef",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/65bb94d136d7bff9263ba8512413a6e6a9c09a": "65b57c2ab13900fc352ce1a298ccdb77",
".git/objects/0d/759e919b372b3d5da66695811ca1cf21b0441c": "d28a1a87c1956607d9aaeb4daa73315b",
".git/objects/15/dbc3be001bfca03570fa4c4c46ec3ddb0253d7": "341170f1fecc338887e40015f5841bc9",
".git/objects/1b/d867f2208c51dd20abbffadbbda7b8c5d85df5": "5c783b05ce3205c6a2a066282102494f",
".git/objects/1c/24299b39c97a1d284e378478477b9f78c6a1dd": "9e0afd3726109b68f4b167bf30d81bd8",
".git/objects/2a/2d6e576bf974f3f4f227d705382661f3d0cafa": "7202fb70bb80484df3378004adc8742f",
".git/objects/3a/84e8013305ac32cc21164e158fc3028451d3a6": "f3eb2de1856af22ef39c7d2bfaf8e12f",
".git/objects/3f/002899d723c34aed0f13579a69e5ab62bd79e3": "526e713663d6eb5814cd9e4f29b7bae7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/cc74914e2bb230133a5d32bb7ac9eacf8a935d": "1bf9efb211d789cb729ac72871bf5dda",
".git/objects/5a/251fb807656e58b4590d138a714a920cb66a64": "3d572175b47c8e8e522778ce776247da",
".git/objects/5c/29f17a4968a6f0a1861d872feccc25ab05ff64": "67e83b7b298e620a587425e07508e951",
".git/objects/68/5f6f27003e3cdd2e9c31428ecd8a17509c87ae": "f579b4f142d219226cf417d00119427f",
".git/objects/6a/f631669d52834d255e26ca2b7b52ab33159773": "b98871d43f0712a45bab963d81706eaf",
".git/objects/6f/87c6143fbd51a0bb5d15ca3b9cf84211ab0884": "1dc15739f9c76da643f9c34d8ffa7159",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/8b36ba3436c3bd4b20dfcc46950180c9e3ce1c": "781ba80c94c3b2306565ee12e75f171e",
".git/objects/81/3b3a6d42daa6cef17fbec135edae0cc317a742": "427b5446511255a63ab39f350529f443",
".git/objects/82/76622f2cc1b91dd89b4c20de29e755e064f285": "d07d7a662629a661b40ccb2188ba5419",
".git/objects/88/9cd1f5f580133f80c9e52f14e5229cfe321edc": "20ed4cc8eefc7dfd5f1f66ea611aa446",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/03c01bfc9b61efcceecec0f216f80084716796": "c0a28574a0613d99105151820bc54141",
".git/objects/a1/24d0b039b06549da0325d1eeaf292418dddeb1": "47759d2d515989bcfb9bd006ed094209",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f069a3a089c587e4ed2f4e7884ef1f5b728c91": "ad88f0934f95717bb91a32c3f8fd7fde",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cb/a611c8f6fa8b4f83fec7e3310b63b6e620a4ea": "c03f17c37fdb6e2d99e8bbe17b47451f",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/dc73f32b35e24e853d31fabd485039dec6603c": "e45da183f4ea2f4a017c7124ec7cfd01",
".git/objects/d4/3aea9dd9a514a44e416d1855139fe86cf379be": "f4ba8c04e465c3e617141b6cd8721e69",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/d18d531346e38a5acb7d4d0c05732f3e20e1d6": "c2d8cf19d4f412dd3eb82a46e1fef3df",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/dfdc377a4e973b5daa7a1a1ca1ab34ce720b51": "6dcc722ef625eda059f7fe5f6f75fece",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/7babaa38190cafa22c28bd23033f55b2b6a46d": "32b41c2f0e7013a3065dd017bb619d18",
".git/objects/eb/4d63b92eb021556ac708be4bc71867aa16302e": "5558cc71ddf12769153452d7d1026bea",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/212fb964c1981facb75e94e9c1071533337e9a": "5580e12af1854084df303d4567cb3a10",
".git/objects/fa/7524468d71dded371f3524530549cbd1a69d4b": "12ccb58223dd95d63ca7e4391ad5a665",
".git/objects/fd/1dce6aec2a23447b9e91a0c185e3e740c46ec6": "32505da43d55ea9ae644d89c2724af13",
".git/refs/heads/main": "0214041cfc0a391258ca342a87d1a8d4",
".git/refs/remotes/origin/main": "0214041cfc0a391258ca342a87d1a8d4",
"assets/AssetManifest.json": "a6f2f1f4a1d8b143355bff950c240e8e",
"assets/assets/images/78f56463": "7fa3c63971c02583fc523383958f3f1b",
"assets/assets/images/ea5e4268": "d41c60331c3aaa211d42f4e34b7f2ce6",
"assets/assets/images/hotel1.jpg": "6be331014dfed8f8170e80488b1f27f7",
"assets/assets/images/hotel10.jpg": "07d906fa69c709b3f636732762643dfe",
"assets/assets/images/hotel2.jpg": "07222f114c138063f1c435e9a3ad650e",
"assets/assets/images/hotel3.jpg": "bf1f0e9d154f1a3071805a406d8d735a",
"assets/assets/images/hotel4.jpg": "7fa3c63971c02583fc523383958f3f1b",
"assets/assets/images/hotel5.jpg": "bfe73e304d8f47aefb8ddbaa631da43e",
"assets/assets/images/hotel6.jpg": "60eb240782d967d54f3e7cd6b50d719c",
"assets/assets/images/hotel7.jpg": "ccb17651d9ab1ef9af93c63f42dfd4ad",
"assets/assets/images/hotel8.jpg": "d41c60331c3aaa211d42f4e34b7f2ce6",
"assets/assets/images/hotel9.jpg": "5b9d571448246fab6bbc92c1ec891fbc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ccd7f093d65858010cea99907683b5d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "de7b3fcec82cbc60581f12a8429f0673",
"/": "de7b3fcec82cbc60581f12a8429f0673",
"index_old.html": "d134f955869c6db3fb3e33cf7f19f27e",
"main.dart.js": "9213af1e923c027b98703075a64e660a",
"manifest.json": "29cc6ddf67fa3a38e3b03fa0990c4ee6",
"version.json": "994029a9378629a262c96e5a8be9609c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
