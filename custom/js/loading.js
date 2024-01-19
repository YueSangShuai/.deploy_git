function loadCSS(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    document.head.appendChild(link);
}

function removeCSS(url) {
    // 获取所有的 link 元素
    var links = document.getElementsByTagName('link');

    for (var i = 0; i < links.length; i++) {
        var link = links[i];

        // 检查 link 元素的 href 属性是否匹配提供的 URL
        if (link.href === url) {
            // 移除匹配的 link 元素
            link.parentNode.removeChild(link);
            break; // 假设只有一个匹配的 URL，找到后即跳出循环
        }
    }
}

// 使用 querySelector 获取第一个匹配的 .pretype 元素
var element = document.querySelector('.pretype');
var id = element.id;
var path='custom/css/loading/' + id + '.css'
loadCSS(path)
setTimeout(function(){loadCSS(path);}, 2000);

var preloader = {
    endLoading: function() {
        document.body.style.overflow = 'auto';
        document.getElementById('loading-box').classList.add("loaded");
    },
    initLoading: function() {
        document.body.style.overflow = '';
        document.getElementById('loading-box').classList.remove("loaded");
    }
};
preloader.initLoading();
window.addEventListener('load', function() {
    preloader.endLoading();
});
setTimeout(function(){preloader.endLoading();}, 5000);