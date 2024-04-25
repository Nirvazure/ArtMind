export function getImage(dir: string, name: string, picType = 'jpg' as string) {
    // const url = decodeURI(`/assets/${dir}/${name}.${picType}`)
    // return new URL(url, import.meta.url).href
    return `http://yqymons-bank.oss-cn-beijing.aliyuncs.com/artmind/images/${dir}/${name}.${picType}`
}

