export function getImage(dir: string, name: string, picType = 'jpg' as string) {
    const url = decodeURI(`/assets/${dir}/${name}.${picType}`)
    return new URL(url, import.meta.url).href
}

