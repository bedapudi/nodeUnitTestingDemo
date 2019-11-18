function urlFilter(list, url){
    if(!url) throw Error("search url can't be empty")
    if(!list.length) throw Error("list should not be empty")
    const regEx = new RegExp(url, 'i')
    return list.filter((listItem)=>{
        return listItem.url.match(regEx)
    })
}

module.exports = urlFilter