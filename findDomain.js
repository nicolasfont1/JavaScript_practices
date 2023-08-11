function domainName(url){
  const splittedUrl = url.split(".")
  if (splittedUrl[0].includes("http")) {
    if (splittedUrl[0].includes("www")) return splittedUrl[1]
    return splittedUrl[0].split("//")[1]
  }
  if(splittedUrl[0] === "www") return splittedUrl[1]
  return splittedUrl[0]
}

console.log(domainName("http://www.google.com"))//, "google"
console.log(domainName("http://google.co.jp"))//, "google"
console.log(domainName("www.xakep.ru"))//, "xakep"
console.log(domainName("https://youtube.com"))//, "youtube"
console.log(domainName("96u4ve9y2yijpnfvo35ge.co.uk/error"))//, "96u4ve9y2yijpnfvo35ge"
console.log(domainName("r1a3uj-nnk-cznjq.tv/default.html"))//, "r1a3uj-nnk-cznjq"
console.log(domainName("vwsv3ct7x6dfovqtk8xs.name/index.php"))//, "vwsv3ct7x6dfovqtk8xs"
console.log(domainName("z7z0jkpvn9yvki3.edu/index.php"))//, "z7z0jkpvn9yvki3"

// Not mine but I like it
// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };
