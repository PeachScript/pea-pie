document.onclick=document.getElementById("side-avatar").onclick=function(ev){var clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(clientWidth<960){var sideNav=document.getElementById("side-avatar").parentNode,className=sideNav.className.split(" "),classIndex=className.indexOf("unfold"),ev=ev||event,isDoc=document.getElementById("side-avatar")!=this;if(classIndex>-1){className.splice(classIndex,1);sideNav.className=className.join(" ")}else if(!isDoc){sideNav.className+=" unfold"}if(!isDoc){ev.preventDefault();ev.stopPropagation()}}};(function(){var postContent=getElementsByClassName("post-content")[0],hyperLinks=postContent?postContent.getElementsByTagName("a"):[];for(var i=0;i<hyperLinks.length;i++){if(hyperLinks[i].href&&hyperLinks[i].href.match(/(https?)|(ftp)/g).length){hyperLinks[i].target="_blank"}}})();function getElementsByClassName(className){var all=document.getElementsByTagName("*"),results=[];for(var i=0;i<all.length;i++){if(all[i].className.indexOf(className)>-1){results.push(all[i])}}return results}hljs.initHighlightingOnLoad();