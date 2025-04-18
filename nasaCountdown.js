function countdown (millisecs) {
    let count = Math.abs(millisecs)

    

    const hour = String(Math.trunc(count / 3600000)).padStart(2, '0')
    const min = String(Math.trunc((count % 3600000) / 60000)).padStart(2, '0')
    const sec = String(Math.trunc((count % 60000) / 1000)).padStart(2, '0')

 
    return (millisecs < 0 ? '-' : '+') + hour  + ':' + min + ':' + sec 
}

console.log(countdown(-155510000));
