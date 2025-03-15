hexo.extend.generator.register('categories', function (locals) {
    return {
        path: 'categories/index.html',
        layout: 'categories',
        data: locals
    };
});