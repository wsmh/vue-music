
export function numTrans(num) {
    num = Number(num);
    if (num >= 1e4 && num < 1e8) {
        num = (num / 1e4).toFixed(1) + '万'
    } else if (num >= 1e8) {
        num = (num / 1e8).toFixed(1) + '亿'
    } else {
        num = String(num);
    }
    return num;
}

export function getArtistsName(artists, album) {
    const nameArr = artists.map(item => {
        return item.name;
    })
    let str = nameArr.join('/')
    str = str + ' - ' + album.name
    return str;
}