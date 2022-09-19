'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "84aae902c4f859b8b790144a63bc6b3b",
".git/config": "c69452689e0745f21470b97b8d6bda02",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "46695de663fb44a9f9a051b5493b7bed",
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
".git/index": "479d5aa97d74ff931a8e84134d33bcc3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7fb2fe256bdf927fa08b48f4c2b952b9",
".git/logs/refs/heads/main": "eea13259564ebcb99f7799de82a0da1e",
".git/logs/refs/remotes/origin/main": "2463190cd5f439ddedc6173c7d2c29dc",
".git/objects/42/2a7f2d36a8ecab53aac2f2474d16b5f56ecf7d": "1b3fb710bb5bd92689a96be2e0c335c5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/01/80205a5d00eaf65ec3e11e55e1899db8555229": "466c95d2b82241d44b6ffa0ce832a0cf",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0c/eeddb3603c1b993ea55ab5c31bf6aae25a6ad1": "14655e973999a2b73461267268108f81",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/abbad1c9d2fe7c5abfa8c9edaf4dc96763babb": "537fca8a6ad3083b11f1cbad946c0057",
".git/objects/11/b3085aab020c4548cbe99f7c4b0bbfecfecff1": "051156e6633e49073b59ff547e46b482",
".git/objects/11/cb8f355a96bcaf4489e8709c7dfb81009edf08": "1e56b5abb33e07d19f85429ad987728d",
".git/objects/12/da38e886129466ccc55326e9a1df2bb23009ff": "f5f82b3f986280a58c9c5ca2520af1e4",
".git/objects/13/169c24d9662c1fe6ae2b1bc069a1ac3746ebd1": "8df01800f5e16aca42ff74f7619a1ee2",
".git/objects/1a/2aeb0a3a3589ccaa9bb2a9cb3f0050dacab7f5": "880bc917f442f649c60db7274fc766a6",
".git/objects/1b/cd9505abed01437587dce09e4a49aa433fad38": "2d0bcb66bb5e0d946ddf16394c2b5c2e",
".git/objects/1e/20054ab36cf32113f3d4cc86fbd7c2ae9f75d5": "7618305b0f6b8e0cf68b3ab9247f6605",
".git/objects/1e/736e6b33bb346f0fc4fe72535c75b585d26c17": "c63cab2c3c3522eb76116659caa1c3b9",
".git/objects/1e/a1fc383d560b748ed41d4b806889e5bff966c7": "adbc6541dea110ace7e1556f0d5a33cb",
".git/objects/23/17062a3db3055466fb32df8b50303c0da24ff1": "a2eb1753e880abcb754e30c923c9d8ef",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/1d6082dfb3223819a6793d44d90d2bbc9d6618": "4b2c5ba344dc820c3de54cf1d684073f",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/24e8f029e9060e98a66f352d71d35254868ee1": "9bee0a452c75ab1468598a340432ce43",
".git/objects/2e/9a4008f758e42835c80caccb1f098db10c8a36": "f3b5254e8796abb63becd60715e2fa48",
".git/objects/2f/f865db5e6d16ed62e7b9672ac8423fac88d46d": "b25fe24f63b0dfb79f5ca5179be2df40",
".git/objects/38/a85312825f4f50ba48081f927a807775677fc6": "3f4e1e6ea6dbf3d1f9ebf9e93b999e1c",
".git/objects/39/c2fc23413882c9c376ed2458fd89cce480d427": "cee07661faa2bdcf98483762a685aeef",
".git/objects/3a/f1cad1135df0783215649d33df14bc24ae3cf8": "9194d61228bd017d1bc41ad456d7e005",
".git/objects/3e/b67b56b4bf264021201952108844c2aa5d16e4": "6a62a855fd835a42f63f1532cbd56483",
".git/objects/40/1779389fa7073818fa635d259e58fbe1860fd4": "4ce16fdb8b864517b3e29ce41aa7c846",
".git/objects/a7/579634edf42ec9690a8944ee745f16a894f6ed": "48e74253247230ed91f58786092961fd",
".git/objects/a7/cc4aec788832c027c4f86cc5ad3f05111d74a1": "9a3a00e783d8703ac0c8db84a39c4fb0",
".git/objects/aa/b726b93d431c5a15bb05ddbeaab05592149d75": "4a2efc112e117f93bd47595c933d0987",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/b2e5610a4e70c00e8ecd924bb71074070cd089": "faeec50e92b65bfbb815cb5d44c6a729",
".git/objects/ad/beb6c159f27109885464a07df82ba6661f5934": "a6f4f91602accea96d20e5f2e46da428",
".git/objects/b0/7bc2545de1602fb189501dee24b993ca8cbc1c": "9bec180b3222b2f4408c7b0da06e1ba8",
".git/objects/b0/f33c8fc5370774df4c2c5ce450dc808d1bf3cc": "234af8eb0d056c1e5e16faaf3ae6b74e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/eb256713db429233be606d5b9eaf92e835ed49": "afa57df161b2a33c3f849034adaa9d51",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/a2275c0c3a31223740667b3a4088d08804988b": "f3962a2a26c12c10f0f2df2c3169af02",
".git/objects/bc/563e338c8e7e1a9c0f479a33c816324933fd6c": "125c1926486c7695ad300744ee39e26f",
".git/objects/bf/210dabc26f1ffeb97f103f8fd4eda80fe55e75": "577a3bc0f23adea087389ecc410939cf",
".git/objects/c3/028903d58d112053fe830a09f3d8f700c8ec2e": "835aa4383f09bf645461bdb835c3a7e1",
".git/objects/c5/f9ad347efca44d507a90a5a2e95f4ebfcb11d4": "64605e772e9be950b6a081cd2665ec7e",
".git/objects/c8/a4f0c506b04c1a8843c1b27511006ed510849d": "af9184a39e9dad449d9386ed6be0bae7",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/2ef519d698bf6355815392c2b1de80d2308ad2": "8e37eaf92f9d061b31ca1d6db35a1df6",
".git/objects/cf/4e503a57048025b58a13b1aa1f9d68d1e710ef": "152028cce49fc3b8d16b60a05fa2ee24",
".git/objects/d1/967049eb2398d6815a4eb69b952396eb913633": "e0d763261edaf9cc0cf298c7babd9421",
".git/objects/d1/e5868d6c0534d2567a58763fdafc4b8361c72c": "1491fc1bd91ab3c5036f90b7af170368",
".git/objects/d3/c00f58e518a0f6c0bb90d0134bb33c45ab1385": "5e68aeef664f9448c784c286d4ba940f",
".git/objects/d4/d70aeb016accd000cfe4abe85a18ab89711bb6": "445652ba3788f0e0551430a627b8fe11",
".git/objects/d5/54496023786528151c61e28fbb7349e91b775e": "fdc285962c16d56eb57428ac52370c62",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5064046fb7bc509baf212e6422c66a9b9682bd": "412345d2e3b84ffa0e7eceb46bbef378",
".git/objects/dd/84d906d6130bb5bef8d06ccf5ffa01aec84463": "43bddeaf7e1bd2b21b8ffb1da811eb0e",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/ad796fed7e4383774c61b7cf228d4c638eb289": "280cb224b3ee94ad47602ae11878c34b",
".git/objects/e2/645b4fa20cdd28c5474a9730024e78e51fca60": "246967af333b35285a212e6e431c2667",
".git/objects/e4/e392cc5973646aed7c2c1da313f285cd4e21fb": "a26755616bc77939da9ce1bd27bcd3ab",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/3bb6d3d491d00c882c88faa0f871cbdbe6d7d8": "8eb0d37c08ee493825ae10f640727fd3",
".git/objects/e8/750704a9481270994fb650ea00959887e935cf": "ebe840e9a1c1063b2937806821e08fb2",
".git/objects/e9/54842b3d74d6e7ab02682ee313708921f7a519": "57690ac84ab33d0b00a9da5791458705",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/4b66421e678ae32382a81ae8ed5e14d7f9e455": "4ecd48c7eab153ebd41d5f7c4e69ea27",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/f3f215c37ff7e8423454f7d16e5ecca501882d": "5405b29a712b5aa51c6750deac88c206",
".git/objects/ed/2bf620ff723ef715d7fcfc3eef1f0fe430d07a": "821c72235a981f7e80ceb87cd3ddffee",
".git/objects/f3/788324323a02306fe6e52742a71fdb3407f430": "14dfc6762017c99cc1391621eca4c9cf",
".git/objects/f6/cf69ae37dc540577ec2f549b5b56e7bca371a8": "6356a0950174736e9e4df7af6a4ce183",
".git/objects/f8/bd57ffa954e2771a5c4770aa26fc365968e923": "7597c13269306cee2b04cdabd16854f0",
".git/objects/fb/38ea001e2468774d89f8ee2bc670ccfb4759c7": "334491b6de623e1ae185d04624ea7e46",
".git/objects/fd/5254d95cc310ad5e85b19e04e777589fd791c3": "21b180bf19e233d46ab841b91eff4517",
".git/objects/45/79e432648ee04135fbe890f476351c2c8318e6": "1c8898b4ab4906e6a06bc14574eb11f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/dfd87785737d72f1ac7ba1fdd08217342324c3": "15d31749b56258ea9288128219eccf9a",
".git/objects/49/b65fc326bd0fb837a96c9db4d28b0eb8a0f1ac": "517040e6a03f08d9387c04f387df63f7",
".git/objects/49/d5bcf76db962f94afe5aa4d6231609ebb78862": "62414f1beb390abd2552b799d8e9f712",
".git/objects/4c/903b2bcd7b0dfa39809131d6e7bad3930ff35c": "a7259cb8232d8561a422360e1aaf887a",
".git/objects/4c/d8b66c2449f991046be702687d115456226c50": "4dfcdd45326eecd45b21b4047f8c696e",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/d0719a94509b8690254a64bce4f58a24382a95": "3706b8ea8088aa6faf91e4eddd6c3879",
".git/objects/52/3a301fe1f0d8fe52b37430c830fecece4fc091": "1556a4376aec6c4a1cf7bc03ab14e75b",
".git/objects/5e/501f5bc0b67a4f8982dee6d6c510020bf3becb": "2e78225e5b0d67f2b1544c5b2da076d1",
".git/objects/5e/84ebcaf5ea1ae6c3fee3c736349751f81b6128": "1fe799f8ba77203d4fa1027db1a0e484",
".git/objects/5f/03b5b9f26ecc2ee5fad273c690def6c8c2c83a": "eeb909e6277e9ab551690a0200ff8ada",
".git/objects/62/bb3109c417e46ca584e8c136ea627e78606f99": "2731a149a06fafe27451196d254538a1",
".git/objects/63/707ef56f94911e3500a87d7ee93b07087f642e": "58fe6035d39d9e971c68fe65653a501c",
".git/objects/68/39a7086be663b6b2ab56f26db0509772ac0f67": "8d4eb3d0b0cec04c13830b9708378fe4",
".git/objects/69/61c8111d592a659009e944b82195d5f586fbc8": "16fd336c9a6852d7d87862ae1d2c2f6d",
".git/objects/69/78f36e773e1b471ef0c0b07d0f6d902ff1d173": "cf1c9b72362a6d0d7089105ff0ec0ced",
".git/objects/6c/41b7119b3421e6f0cab43b058853e231bd223a": "9c7f3fbac3231708507093421317f3d7",
".git/objects/6d/3c59ef2d3849678615efcdb239ec47fe3fcc01": "8917ec74c9a643a06de208456c9cce5e",
".git/objects/71/6506c6f590ddc6bddf24314c535493ae57ac04": "693a4298c167e0744faf1b355db87633",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/03e7ee6672235b20033617cde81496a5e279c1": "ad045c498a177ceac91faaa9025d7fb1",
".git/objects/77/a01b50105e898286f1cce8e5e345afde164cbf": "ec5932a4dd5c1a21a083b68473b9f91e",
".git/objects/79/34811023fd92708610c0b4e5c94a417e5a0f9c": "23addd80edb5044b85245bf0aeefca13",
".git/objects/79/496d6d9c9bada7cd4d2e61ae62ede05830abeb": "406e2705557fd5e9f6219e921d105364",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/7de6f00de3733376934bdf9e3b83271c7bdde2": "ac0d491af86a5e76c182751cb49a61e9",
".git/objects/82/b4e2318b5307709a6576d4653b5f701257ecca": "dd31b6a5455f080d15d3bbfa638b42bf",
".git/objects/86/dad227168a688226d394e573f4fac2c671a1f7": "a52e4d96f22b805a1dc1ce382ae5d1cc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/8c358ad2b719ec5812e904f63e1c0809679de5": "c02c394b3c87915b5ae973c30b1ad1b7",
".git/objects/8d/f3a8fa87070313aeff6a06d6bb769e9867a69e": "d7b3b842c8b65bae75375d76863e2065",
".git/objects/8f/3e9784ca4e82a6247f72fff816263717181f6f": "44b1aa34d0ab199cc3c2ccb8369c4d27",
".git/objects/91/5a2a57f2205fc69bb8bdb0507681392e6449dd": "0fde04f3b7c153ff4ebc7b3c8d747ce4",
".git/objects/97/28b6f98e6d89cdf6d32ae18ba4e6b467f57ea3": "36b6a453136e894ac735a07c624e1a04",
".git/ORIG_HEAD": "ae9538df95fd38417cae5ac5374ea97e",
".git/refs/heads/main": "a4b0a7e80437b121d7c8064b7cd28030",
".git/refs/remotes/origin/main": "a4b0a7e80437b121d7c8064b7cd28030",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "edc4261adb109787811fa71a751fd23c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "4c9b04ce7203debbfb6499d2731977ba",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "d84c07599efe7d6422cddf7a05e4665e",
"icons/Icon-512.png": "1a3ec73c74b86aa500db35cc6d8b730a",
"icons/Icon-maskable-192.png": "d84c07599efe7d6422cddf7a05e4665e",
"icons/Icon-maskable-512.png": "1a3ec73c74b86aa500db35cc6d8b730a",
"icons/icon_fb.png": "77f08e287aced91a96ea4496fe63ca39",
"icons/icon_ig.png": "ad8156815e21ae743b78042d249a2b0e",
"icons/icon_tiktok.png": "6d14616e2d05f0caa33d33d6686fbb12",
"icons/icon_twitter.png": "c87eb80dbad241ae2246a9306bbc0a73",
"icons/icon_web.png": "2507d6793712db00370a58454a31d986",
"icons/logowebs.png": "878fcc7cf698871cd355e44512af4bea",
"icons/maskot.png": "65dab904b1c74cce833fe84835b140f1",
"index.html": "663bad027fef132292b9a354f5f57949",
"/": "663bad027fef132292b9a354f5f57949",
"main.dart.js": "ee45c3867f50dd13e767b78cca167550",
"manifest.json": "add2b5d9b43547103e9dc66d1f8024ac",
"music.mp3": "178e6f27ca0a372066d8774abd83624e",
"pengertian.mp3": "962883cbabd35728914b8b599f6b1602",
"version.json": "0ad31aec4bedba88f851da8c0151f429"
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
