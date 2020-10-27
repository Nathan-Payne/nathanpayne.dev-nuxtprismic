export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'home') {
    return '/'
  }

  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  if (doc.type === 'projects_home') {
    return `/portfolio`
  }
  if (doc.type === 'project') {
    return `/portfolio/${doc.uid}`
  }

  return '/not-found'
}
