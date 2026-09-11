export default () => {
  const subdomainList = [
    'events',
    'webtest'
  ]
  const developerList = [
    'wendy',
    'tim',
    'ryan',
    'johnny',
    'jackie',
    'hardy',
    'dino',
    'chiaenchung',
    'cherry_2',
    'cherry',
    'miball',
  ]

  const webtestList = subdomainList.reduce((prev, current) => {
    return prev.concat(developerList.map((developer) => `${current}-${developer}`))
  }, [])
  
  const hostname = window.location.hostname
  const isWebtest = webtestList.some(i => hostname.includes(i))
  const isDev = import.meta.env.DEV;

  return {
    isWebtest,
    isDev
  }
}