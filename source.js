if (document.title.indexOf("Codeforces") != -1) {
  let scripts = document.getElementsByTagName("script")

  let src;
  for (let i in scripts) {
    if (!scripts[i] || !scripts[i].attributes) continue;
    src = scripts[i].attributes.src;
    if (src) {
      src.value = src.value.replace("//codeforces.org", "/codeforces.org")
    }
  }

  let images = document.getElementsByTagName("img")
  for (let i in images) {
    if (!images[i] || !images[i].attributes) continue;
    src = images[i].attributes.src;
    if (src) {
      src.value = src.value.replace("//codeforces.org", "/codeforces.org")
    }
  }

  let links = document.getElementsByTagName("link")
  for (let i in links) {
    if (!links[i] || !links[i].attributes) continue;
    src = links[i].attributes.href;
    if (src) {
      src.value = src.value.replace("//codeforces.org", "/codeforces.org")
    }
  }
}


