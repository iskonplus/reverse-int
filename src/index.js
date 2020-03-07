module.exports = function reverse (n) {
    let res = n.toString().split("").reverse()
    for (let i = 0; i < res.length; i++) {
        res[i] === "-" &&  delete(res[i])  
    }
    res
    return res.join("")
}
