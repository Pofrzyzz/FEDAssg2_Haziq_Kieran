var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://fedassg2-5404.restdb.io/rest/login",
  "method": "GET",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "65b3bf7bd6d7327e91daa3cc",
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
