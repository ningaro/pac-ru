"use strict";

// src/pac.ts
var PROXY = "SOCKS5 127.0.0.1:1086;", DIRECT = "DIRECT;";
function FindProxyForURL(url, host) {
  return url.includes("2ip.ru") ? PROXY : DIRECT;
}
