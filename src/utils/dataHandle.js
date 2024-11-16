
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

export function timeFormat(time) {
    const seconds = Number(Math.ceil(time / 1000));
    const mod_seconds = seconds % 60;
    const minus = Number(Math.floor(seconds / 60));

    let mLevel, sLevel;
    sLevel = mod_seconds < 10 ? `0${mod_seconds}` : `${mod_seconds}`;
    mLevel = minus < 10 ? `0${minus}` : `${minus}`

    return mLevel + ":" + sLevel;

}