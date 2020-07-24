const totalLikes = (blogs) => {
    let total = 0

    blogs.forEach(n => {
        total += n.likes
    })

    return total
}

const favoriteBlog = (blogs) => {
    let max = 0
    let favorite = {}

    if (!Array.isArray(blogs)) {
        return {}
    }

    blogs.forEach(n => {
        if (n.likes > max) {
            max = n.likes
            favorite = n
        }
    })

    return favorite
}

module.exports = {
    totalLikes,
    favoriteBlog
}