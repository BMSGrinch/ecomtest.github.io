'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "741159cc6acfd73e578f7c618c25fb7f",
"assets/AssetManifest.bin.json": "39f1fe706b72c2d8614b2720625ab346",
"assets/AssetManifest.json": "2e27d2720f6d2ef51658b910facc3146",
"assets/assets/img_produit/casquette_blanche.jpg": "458e73dda10979edc65d47a2b4d38911",
"assets/assets/img_produit/casquette_grise.jpg": "5e6057d8d2800e68eb4a98b200f6cf1a",
"assets/assets/img_produit/casquette_noir.jpg": "0b7ef0e3af6e01d745a93b1f00d2e22e",
"assets/assets/img_produit/casquette_noire_jaune.jpg": "8998771217dadf46c9d584a94d948367",
"assets/assets/img_produit/casquette_rose.jpg": "0a086127432c4c059c5a20e98e44ddfe",
"assets/assets/img_produit/chaines_dor%25C3%25A9e.jpg": "4f4fcc87f26fa2a3d33d6e09da52a367",
"assets/assets/img_produit/chaine_argent.jpg": "d984e806addb324012c04252fd41d208",
"assets/assets/img_produit/chaine_argent_poign%25C3%25A9.jpg": "6a81c253a3666b71d9bb3a91baf6bfa5",
"assets/assets/img_produit/chaine_full_or.jpg": "a470adaa555705da2ab21386681a0e4a",
"assets/assets/img_produit/claquette_noir_1.jpg": "81ea068e60638eeb725018252d999f85",
"assets/assets/img_produit/claquette_noir_2.jpg": "145db2732501851fa7b7a861809bfb29",
"assets/assets/img_produit/colier_argent.jpg": "02eac428bc904253db48612c123bbdc2",
"assets/assets/img_produit/colier_or.jpg": "9a2088691c6b4d7a7dd5c6e1ce9f078b",
"assets/assets/img_produit/colier_or_fin.jpg": "17f1d509faf767137901c365f04c8d52",
"assets/assets/img_produit/crocs_camouflage.jpg": "51cdb2d029be673dd3e212fc0c262510",
"assets/assets/img_produit/crocs_feuille_autone.jpg": "41afd54f4970cdb21fe49efccf2cf643",
"assets/assets/img_produit/crocs_feuille_noire.jpg": "e4ca5eb00aa5edb13646fce65d0c5d9d",
"assets/assets/img_produit/crocs_marron.jpg": "4e70629d969e12e391f39fdcb8580229",
"assets/assets/img_produit/crocs_marron_camouflage.jpg": "68fb67410325798c63a21ada92d94b86",
"assets/assets/img_produit/crocs_vert_army.jpg": "3c57c261c955b8b35446f001b9ff53c5",
"assets/assets/img_produit/crocs_vert_canabis.jpg": "4ed6ca1e88743b64b1fcbf6ac9a50c86",
"assets/assets/img_produit/maillot.jpg": "02ad07e2b6e301b0fe0767a7efafd3ac",
"assets/assets/img_produit/maillot_real_blanc.jpg": "a7b48d443080311c1377a0e0a86206f1",
"assets/assets/img_produit/maillot_real_bleu.jpg": "984b6bf830d4cad4edb06c1c6059fa1f",
"assets/assets/img_produit/maillot_real_bleu_claire.jpg": "9a8b5f8e16e73586812064a7bf979c26",
"assets/assets/img_produit/montre_maron.jpg": "b0be34c280bc51db4c0ca0e38c83e762",
"assets/assets/img_produit/montre_noire.jpg": "35941851155fd379d0808bd09c6dbe49",
"assets/assets/img_produit/montre_noire_rouge.jpg": "4b9494cf36697082f0fe67e33bef8092",
"assets/assets/img_produit/montre_rouge.jpg": "e3d1cda30f11a8ac77dbde53dc12a4ae",
"assets/assets/img_produit/nike_blanc_gris.jpg": "f0d3932414c489dcae1e38bc34fc6f29",
"assets/assets/img_produit/nike_blanc_noir.jpg": "39a75bc9dd8b06c7b7df2574e7499c11",
"assets/assets/img_produit/nike_blanc_noir_megalacet.jpg": "e6eaa055c61bca871a3c4b83df4cbcc5",
"assets/assets/img_produit/nike_blanc_rose_megalacet.jpg": "6081c3fc30f31cc5e37f49c0445ab0f6",
"assets/assets/img_produit/nike_bleu_blanc_gris.jpg": "073e6e846851be07019a02a1b200dcd7",
"assets/assets/img_produit/nike_bleu_blanc_jaune.jpg": "117de1e2bdf88f6278036e6ee0a23783",
"assets/assets/img_produit/nike_bleu_marron_claire.jpg": "d788ab02a171c8e2445bbe78595a35a9",
"assets/assets/img_produit/nike_marron_gris.jpg": "8e77392aee5a8ec022d08a75b1b1f36c",
"assets/assets/img_produit/nike_multicolore.jpg": "664b25a646c60dbf34d7c18df2ff489f",
"assets/assets/img_produit/nike_noir_gris.jpg": "84c1c71949cc7673891c94b144815a86",
"assets/assets/img_produit/nike_rose_blanc.jpg": "31a27fe2274b3cc50589da40955d74b5",
"assets/assets/img_produit/polo_blanc.jpg": "ba7fd857631ff76f3ec2d7ece2abdf60",
"assets/assets/img_produit/polo_blanc_marron.jpg": "ba1163a260b8bdc6609ef1d3cb5a8ae8",
"assets/assets/img_produit/polo_maron_blanc.jpg": "a1e77d8db8936e1337130c6e2a7409ef",
"assets/assets/img_produit/polo_noir_blanc_1.jpg": "8ac2f36ebf96175c25e7694a9c663ad9",
"assets/assets/img_produit/polo_noir_rouge.jpg": "147417b48156ea9d6e7ac84aa5a0f33b",
"assets/assets/img_produit/polo_vert.jpg": "51ef8cf4949437ece75830f4aa524ffd",
"assets/assets/img_produit/Sacoche.jpg": "3f9c925bb4017172db4144befb7a3ffa",
"assets/assets/img_produit/sacoche_belge_marron.jpg": "dde822f95bf132aad55211f6c255e442",
"assets/assets/img_produit/sacoche_gris.jpg": "102b5c4b12841ad003f9afcd08f68b72",
"assets/assets/img_produit/sacoche_noire.jpg": "e138d65fc6c1ef893282dcb85d05964e",
"assets/assets/img_produit/Screenshot_2025-07-18-02-59-39-891_com.instagram.android.jpg": "5a7098377411626c36ed0e67153341f8",
"assets/assets/img_produit/T-shirt_belge.jpg": "b31ccd58f206a01bec2de6fbc83cd13f",
"assets/assets/img_produit/T-shirt_blanc.jpg": "ae8b40254b7ab25ed0b8378db5b41a70",
"assets/assets/img_produit/T-shirt_bleu_clair.jpg": "d5d704a53b8f7d96f321b2b13be287a6",
"assets/assets/img_produit/T-shirt_jaune.jpg": "c222b27fe7d5b4007cc3a590e00b0b6a",
"assets/assets/img_produit/T-shirt_marron.jpg": "6d9d834a459af9d95d334613e7c4dd74",
"assets/assets/img_produit/T-shirt_noir.jpg": "2d36d0a887b061b5a3206849ce859795",
"assets/assets/img_produit/T-shirt_orange.jpg": "0c113fd0d54797e2f240009e46a2fad0",
"assets/assets/img_produit/T-shirt_rouge.jpg": "0113b0871d75a239dc8e265ed7d3afc9",
"assets/assets/img_produit/T-shirt_simple.jpg": "981dfe174f28e2f3768ee1cbd1116c47",
"assets/FontManifest.json": "fe1d611642bf4f5879280751c646a70c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e5be4a46857726f56d338e496884696b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "6019ce48b19acf660e72c2cb3d0697a4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "0555dea0e88ed720da7beeb681b38d9d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Screenshot_2025-07-18-02-59-39-891_com.instagram.android.jpg": "5a7098377411626c36ed0e67153341f8",
"index.html": "d26ba8eea91396e153a6df991649e7e3",
"/": "d26ba8eea91396e153a6df991649e7e3",
"main.dart.js": "9ba90a854b4e5a13b86580c9c1d4c28d",
"manifest.json": "3eea95813e37f3575a181df23fa6a6a8",
"version.json": "7181b4480ff41bb8032e28ecf3149dee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
