'use strict'

hexo.extend.helper.register('createNewArchivePosts', function (posts) {
    const postList = [],
        postYearList = []
    posts.forEach((post) => postYearList.push(post.date.year()))
    Array.from(new Set(postYearList)).forEach((year) => {
        postList.push({
            year: year,
            postList: []
        })
    })
    postList.sort((a, b) => b.year - a.year)
    postList.forEach((item) => {
        posts.forEach((post) => item.year === post.date.year() && item.postList.push(post))
    })
    postList.forEach((item) => item.postList.sort((a, b) => b.date.unix() - a.date.unix()))
    return postList
})