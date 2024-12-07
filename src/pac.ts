const PROXY =
  "SOCKS5 __SOCKS5ADDR__:__SOCKS5PORT__; SOCKS __SOCKS5ADDR__:__SOCKS5PORT__; DIRECT;"

const DIRECT = "DIRECT;"

function FindProxyForURL(url: string, host: string) {
  if (url.includes(".ru")) {
    return PROXY
  }
  return DIRECT
}
