export default function() {
    let randomHue = Math.floor(Math.random()*359)

    document.documentElement.style.setProperty('--main', `hsl(${randomHue}, 100%, 20%)`)
    document.documentElement.style.setProperty('--nav', `hsl(${randomHue}, 10%, 13%)`)
    document.documentElement.style.setProperty('--icon', `hsl(${randomHue}, 100%, 15%)`)
    document.documentElement.style.setProperty('--sec', `hsl(${randomHue}, 90%, 30%)`)
  }
