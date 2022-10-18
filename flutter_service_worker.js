'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f1b1254558b51d84ce3d9fe7af72792d",
".git/config": "68e1ffe5aba3f8bf287a68572d8d3f32",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "b540191cfff483227fd916df101706ce",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5ba5e43296ece47d174558cc3f0b10b3",
".git/logs/refs/heads/main": "842d6221d6b533c75489e6ab4779657c",
".git/logs/refs/remotes/origin/main": "28ff4428ea4f3464a7fec58b97c04116",
".git/objects/03/95259a7d6b89bb6eac091f396ac12c0708c6d9": "fe583c4b0de9f8746af3461618c5e64d",
".git/objects/07/a82519509506b8f336da22f28a0f4168e38c72": "9c650b01b244b41d43bcba2e834938d1",
".git/objects/13/dbd1aa7af0af1df22ca6eea6954bc48e1f2f3d": "a8b486c1602aa19f33e81e4a671c8f99",
".git/objects/14/59e65619a734e4cdcc82e747199cc7c0b0942c": "b4a1c5d678811641431dbc42b926040f",
".git/objects/16/5ee24ee09652eda9449dca263b1ddcae02c41a": "735234f941052ef5ac01ed42ca17d399",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/c5e05b07632ac3d133b71ce35f9189125c3e9c": "90bf7a9788ab694b93f0a5e0ca4b55dd",
".git/objects/22/9c9587672cb2321c688cac0aac0eb2f0ee3770": "b047a828d3b92247a17d7eb50680e42d",
".git/objects/23/bde321ecee3aa590c187bd3286d1a2bba80e15": "cc76fd777fd433898755d36a406b9ce5",
".git/objects/29/31e3311b2d7c3dc2824d22eea1f752aaaa6683": "bcab0c7f30f273193e66f2e5011b84a9",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/30/5c99c6d7728c0f0f41a0c48ce7c85a86b07079": "df70fe7d9029658fe2e6f5f18c27cfa9",
".git/objects/31/1fc7385533a1f15a0c5901cc9d831d866d1be6": "65dcebcd728d7deb6c4c1d1942102627",
".git/objects/3b/3c8c2a1042a30e21a030da495f1ab67ad7fa6d": "df334c9b92e3cb2be3f644b5f02497e1",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/8ac0ab2b6ae4eb0f33026eded09a88fff40674": "49a87b99ace582e150d5d0d944bb84cc",
".git/objects/40/fd3adf1cd388a87b81ecc7652aa5b737a62e3d": "fab861ba7b74d892e2b7eb4814b47f64",
".git/objects/44/d7f9cf8d5bcbeca8a55a941d3d9cdbfda9ef8e": "51aa9626bd45dae0b8885c65d9e2273c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/7980fc7bde8b2a3d89833b576358f6939c2c66": "1939b1667ba75a9377783f49f8bca27a",
".git/objects/48/ad973d9c33fbf588dfbcb6508f7fe1f66c02a8": "4daa65fad5ebe3bfff176cb7cf9c4387",
".git/objects/49/15abd1a1964610be912cce45695d086eb210ff": "bbdbf0a59232cd45f060fd3a4210a0e3",
".git/objects/49/94d5d667c9e571845dbb87b6146ed9184bd35d": "5de82b592ae13efdaba91d68400f23ad",
".git/objects/4a/dbdb22317d997eb9093b94728ae34a960ca979": "4d6598f7692ba400e07019c805bff045",
".git/objects/4c/1801c011a73cbb09792c8fbc56c2788f51913e": "2ae85fce399092f61eff8e12624f85fe",
".git/objects/4c/62accad308b8502e94b10655abdf5bf163effc": "bb1b9a0089fe3dc9b8d0baa068db53a7",
".git/objects/56/5e2698fb87010a9661b06f59864494713fb7db": "a3207597c82a3630b169a22fbc6fab22",
".git/objects/57/8eed6b51f5cce119a89ce629c9c40d02487760": "32bb03c9fa79f8a1cc41a9a47bf43313",
".git/objects/5b/412058fd553ede37e5cd30226617b44944d764": "813f2a0086701f808015f4b8ff7521f2",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/66/c7769a157c56dba604ef6135d72d95e125764e": "97a499edef659b9ec2eed6409a1af2a9",
".git/objects/6a/cbe718cdc3396a1fd692069144ce136085d13c": "c197858b689e10d84c06954e8bf47816",
".git/objects/76/049c0f6929641b781b7931be1620a7ba9851af": "c27c863377f992f457e20fc78f7a2021",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/81/28ee247ed6b5f2e3f46e7c1cfb1847b2de9a31": "edc15e469b8baf1d93414d7dbf648dd2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/9cdbf8e9ae3e55b2d760aa116c7af2437f0bd5": "6438867e415b9ec65750af63481f3962",
".git/objects/8e/94c6f4f05fdf4259411e356b86960a4314304e": "30aec9720681e08395ae1197b1beaf07",
".git/objects/91/3a930b9b660abb4f9b6b7924973a81018c86e1": "27fe0e68fed7462b77b91d6a40f7e192",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/ffe3eb6148b7b68b409adf557c562229a78ae2": "3c5b3fb2b73f61a45f2a2868b83cf535",
".git/objects/9c/11ad02540220f808dd361a06546f296145986c": "d55056615964c34857df059e7cdbee2d",
".git/objects/9d/d9380248344ae12f828c0fc221366a250b99a2": "c151000d53df5b68e32d14efdcd13d93",
".git/objects/9e/9acb59bf0a5e6d4e95aa71b61149e2e760337a": "dc32d253aae1592743b2a814938a8b30",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/3c50c27562f54e100883a19b2c1ca297966961": "54b7eb2ffd80bf3bf206a94644b47c4e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/73c2bb5fe385d2b74caf2a63e3edb94633de6d": "7fccca4fb08f0871698f457339426194",
".git/objects/ae/f1cefe00275a4c23a3dc673695f2a16a5e0677": "11cbf59d9dfa6109973189b6ebb30a01",
".git/objects/b3/ed4dcfb4f7fa923d969aa8fad98fef31887d05": "94da2905f08f4161db749af694bb1e11",
".git/objects/b5/d24fdc90207a7836191c0d17c7bbceb0ab092a": "00d2397c4dfc94e542bbb9a3e4435ed5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/e5187ae009efd9236835061dbef5e5e5ffc98d": "c344e4f3632c49581a87c4f642bf5046",
".git/objects/ca/2414d4ed1a53d486b44dfdc7b40d2b49868bf6": "0e91f477eb7a20837012b5fe27551fd5",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/778162b88e04c512090ca759f8a6b2ebeb7ae2": "c3fac3abed2e6034fd3d2412b12727ce",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/93b1d5d7c9605f1e58713e17bf2914848cf397": "084c7841fbd6a067533b26f42aee8841",
".git/objects/ce/78081f5b13460507ffcd5eb77f5f4d7fcfe6e5": "24ff53795f0b1e213d6dcd0496aa8dbe",
".git/objects/cf/d7b1d279342688cac25b6f5b3ff62200432c4c": "365bb2f9c7a92754aa6a660961a6910f",
".git/objects/d0/befeee36efad952947c1f30db2d125c97b04a3": "20f270bb8138c33799d3d82fe2b20b12",
".git/objects/d4/442bacde02dbb981e8a2bba7fe3a899c5f04fe": "115aa898ce161fbb2110c8e163bedaa9",
".git/objects/d5/cf2eea2ef0fe6ce493d97e6f2960130a6e7fa8": "8db8f0027e130c65cbad8ed10e60679c",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/9e70a7585fbf4d2e72c4ca6606f2ac5fc96c86": "4447c5202171e8e8632927e720254422",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/93701e30776cee04c5736ab5c617e843432356": "2def59dca34c38f010cbac45f354b40a",
".git/objects/ea/f92518708d445b64bcf7a2f462c0f1114817c3": "6541e3ec910b6fc0606cc94d131bab06",
".git/objects/eb/24f2cf6e7b8774dea22f4ce0b2f8bd7a8cfb6c": "07c48decaff2de5e3f1fc12a1a894ed4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/560f19c90346097dee09ea67986aab080428de": "78326ef254ba4b4486fd54d68d7a91fb",
".git/objects/f9/f1864bd4cea59efe60ac05d694cb1dd8870db2": "a7ff27dd799f98d850bd62d88bbb621b",
".git/refs/heads/main": "1b728e8e12e04ffedd20d739d3592bd2",
".git/refs/remotes/origin/main": "1b728e8e12e04ffedd20d739d3592bd2",
"assets/AssetManifest.json": "46f323a614953a0db1275f10170000c1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/calligraphy_1.jpg": "942cdae6140e01d0a056f789bea22ea1",
"assets/images/calligraphy_2.jpg": "e8bfdaf728288b56aad2884ac9c44b5d",
"assets/images/calligraphy_4.jpg": "b7e5468defc52d8b3e0bb080885fc477",
"assets/images/calligraphy_5.jpg": "757afbb520ef4c4e7501b2a895ad3aef",
"assets/images/calligraphy_6.jpg": "48cfc2e8bbcfa4cf5d56514e7331fe16",
"assets/images/cover.jpg": "09faa9f51934670bcb487710ef188796",
"assets/images/digital_art_1.jfif": "f9f551f21c701498b069621a4cf217e6",
"assets/images/digital_art_1.jpg": "1752ae08b73a6709e95ca8a542accc93",
"assets/images/digital_art_2.jpg": "804553920c71f1361a1a5e3cdf289f38",
"assets/images/gmail_logo.png": "b4c1a54e2533756b0227413389d53981",
"assets/images/linkedin_logo.png": "519678f2d257d16fba3f6ebf1a09de66",
"assets/images/logo_1.jpg": "a832b789ca9f9eaa943cd33156b11806",
"assets/images/logo_2.jpg": "296dd71ad22904c11ed87e66f7544966",
"assets/images/logo_3.jpg": "a69f0b498cbbd074f33460fe83a48379",
"assets/images/logo_4.jfif": "e6bbe7af01e086aeed1225b455aa2831",
"assets/images/logo_4.jpg": "ed7522e27f014fc8bbc9c3ba5611fbd0",
"assets/images/logo_5.jfif": "93cb5282f3f483baf2862f5ac262c2b8",
"assets/images/logo_5.jpg": "22e5f29ee0cd1cc558b76f2f613852ce",
"assets/images/logo_6.jfif": "41ee6715cde8a984873c680749d200b4",
"assets/images/logo_6.jpg": "a1fca8860f47b8f3d17a4af3a4dcfccd",
"assets/images/logo_7.jfif": "4055589c32e7f20042ac7e0176939e25",
"assets/images/logo_7.jpg": "5466e18e6fd2b7ba50b453d481852eed",
"assets/images/logo_8.jfif": "c57cb5dd21d24257b705c09b330452a1",
"assets/images/logo_8.jpg": "e9d96f2055d2f5cd52fab2f8154d1bd8",
"assets/images/logo_9.jpg": "ab968641ae6df01fd38cff56fb1811a4",
"assets/images/painting1.jpg": "0b0a98de91df3fee77a65c9f7c550303",
"assets/images/painting2.jpg": "ccc2c4119092e32358a03c00af962451",
"assets/images/painting3.jpg": "66066493551e73986ae65ec81c4848f1",
"assets/images/painting4.jpg": "6cbda094396334d9b23dc5f15224172c",
"assets/images/umra_logo.jpg": "66bcb5a5678619a08b1ccab148522953",
"assets/images/umra_logo_noBg.png": "92b1f858efe17d84836a25b2556cc172",
"assets/NOTICES": "a6603f7997a5996c85a09cee2fc2e2c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "47fc5ad9f23a4d501b5b9aa8eb6cd92f",
"/": "47fc5ad9f23a4d501b5b9aa8eb6cd92f",
"main.dart.js": "46c48eed3d82c6d61f440856265f2397",
"manifest.json": "b19796d7a570edcf526fa66b3e8435f7",
"README.md": "dbe82fdc6e28996601e13d790dada03f",
"version.json": "3b11dbdcb9832896e6e1324395ac1c03"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
