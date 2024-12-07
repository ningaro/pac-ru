const PROXY =
  "SOCKS5 127.0.0.1:1086;"

const DIRECT = "DIRECT;"

function FindProxyForURL(url: string, host: string) {
  if (url.includes("2ip.ru")) {
    return PROXY
  }
  return DIRECT
}
