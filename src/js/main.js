/**
 * 绑定头像点击事件用于在手机端点击头像展开侧边栏
 */
document.onclick = document.getElementById('side-avatar').onclick = function (ev) {
  var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // 只有在手机端在处理此事件
  if(clientWidth < 960){
    var sideNav = document.getElementById('side-avatar').parentNode,
        className = sideNav.className.split(' '),
        classIndex = className.indexOf('unfold'),
        ev = ev || event,
        isDoc = document.getElementById('side-avatar') != this;

    // 切换 className
    if(classIndex > -1){
      className.splice(classIndex, 1);
      sideNav.className = className.join(' ');
    }else if(!isDoc){
      sideNav.className += ' unfold';
    }

    // 消除默认事件
    if(!isDoc){
      ev.preventDefault();
      ev.stopPropagation();
    }
  }
}

/**
 * 修改博文正文中的超链接为新窗口打开
 */
;(function () {
  var postContent = getElementsByClassName('post-content')[0],
      hyperLinks = postContent?postContent.getElementsByTagName('a'): [];
  for(var i = 0;i<hyperLinks.length;i++){
    if(hyperLinks[i].href && hyperLinks[i].href.match(/(https?)|(ftp)/g).length){
      hyperLinks[i].target = "_blank";
    }
  }
})();

/**
 * 根据 className 获取元素集
 */
function getElementsByClassName (className) {
  var all = document.getElementsByTagName('*'),
      results = [];
  for(var i = 0;i<all.length;i++){
    if(all[i].className.indexOf(className) > -1){
      results.push(all[i]);
    }
  }
  return results;
}

/**
 * 启用 highlight.js
 */
hljs.initHighlightingOnLoad();