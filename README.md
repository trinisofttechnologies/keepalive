# Trinisoft Technologies's KeepAlive Package
Trinisoft Technologies's package keeps your app alive on meteor or heroku.

```javascript
meteor add trinisofttechnologies:keepalive
```

# Usage on client / server javascript code
```javascript
 KeepAlive.init({
    "website": "https://my.awesome.site", // your website default is your root_url
    "interval": 1000, // ms default is 5 mins
});

KeepAlive.clear(); // stop keep alive
```

