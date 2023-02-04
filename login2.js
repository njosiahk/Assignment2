var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://team7assg2-2b5b.restdb.io/rest/login",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "63d62e7f3bc6b255ed0c43df",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  