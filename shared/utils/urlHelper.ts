export const formatUrl = (
  url: string,
  pathParams?: Record<string, string | number>,
) => {
  if (!pathParams || Object.keys(pathParams).length === 0) {
    return url
  }

  let formattedUrl = url

  Object.keys(pathParams).forEach((key) => {
    const pathVariable = `[${key}]`
    if (formattedUrl.includes(pathVariable)) {
      formattedUrl = formattedUrl.replace(pathVariable, String(pathParams[key]))
    }
  })

  return formattedUrl
}
