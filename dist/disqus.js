/*!
 * DisqusJS | v1.0.6
 * Author: SukkaW
 * Link: https://github.com/SukkaW/DisqusJS
 * License: MIT
 */"use strict";function DisqusJS(s){var i=function(s,e,n){var t=new XMLHttpRequest;t.open("GET",encodeURI(s),!0),t.onload=function(){if(200<=t.status&&t.status<300||304===t.status){var s=JSON.parse(t.responseText);e(s)}else r()},t.timeout=4500,t.ontimeout=function(s){n(s)},t.onerror=function(s){n(s)},t.send()},e=function(s,e){try{localStorage.setItem(s,e)}catch(s){}},d=function(s){s=Date.parse(new Date(s));var e=(s=new Date(s+288e5)).getFullYear(),n=s.getMonth()+1;n=n<10?"0".concat(n):n;var t=s.getDate();t=t<10?"0".concat(t):t;var a=s.getHours();a=a<10?"0".concat(a):a;var o=s.getMinutes();return o=o<10?"0".concat(o):o,"".concat(e,"-").concat(n,"-").concat(t," ").concat(a,":").concat(o)};function n(){var s=document,e=s.createElement("script");s.getElementById("disqus_thread").innerHTML='<div id="dsqjs"><section><div id="dsqjs-msg">评论完整模式加载中...如果长时间无法加载，请针对 disq.us | disquscdn.com | disqus.com 启用代理，或使用 <a id="dsqjs-force-dsqjs" class="dsqjs-msg-btn">评论基础模式</a></div></section><footer><p class="dsqjs-footer">Powered by <a class="dsqjs-disqus-logo" href="https://disqus.com" rel="nofollow noopener noreferrer" target="_blank"></a>&nbsp;&amp;&nbsp;<a href="https://github.com/SukkaW/DisqusJS" target="_blank">DisqusJS</a></p></footer>',s.getElementById("dsqjs-force-dsqjs").addEventListener("click",l),e.src="https://"+u.config.shortname+".disqus.com/embed.js",e.setAttribute("data-timestamp",+new Date),(s.head||s.body).appendChild(e)}function c(){for(var s=["disqus.com","".concat(u.config.shortname,".disqus.com")],t=0,a=0,o=function(){s.length===t&&t===a?m():s.length===t&&l()},e=0;e<s.length;e++){!function(s){var e=new Image,n=setTimeout(function(){e.onerror=e.onload=null,t++,o()},3e3);e.onerror=function(){clearTimeout(n),t++,o()},e.onload=function(){clearTimeout(n),t++,a++,o()},e.src="https://".concat(s,"/favicon.ico?").concat(+new Date)}(s[e])}}function t(){!function(){var s=document;s.getElementById("disqus_thread").innerHTML='<div id="dsqjs"><section><div id="dsqjs-msg"></div></section><header class="dsqjs-header dsqjs-hide" id="dsqjs-header"><nav class="dsqjs-nav dsqjs-clearfix"><ul><li class="dsqjs-nav-tab dsqjs-tab-active"><span><span id="dsqjs-comment-num"></span> Comments</span></li><li class="dsqjs-nav-tab"><span id="dsqjs-site-name"></span></li></ul></nav></header><section class="dsqjs-post-container"><ul class="dsqjs-post-list" id="dsqjs-post-container"></ul><a id="dsqjs-load-more" class="dsqjs-load-more dsqjs-hide">加载更多评论</a></section><footer><p class="dsqjs-footer">Powered by <a class="dsqjs-disqus-logo" href="https://disqus.com" rel="nofollow noopener noreferrer" target="_blank"></a>&nbsp;&amp;&nbsp;<a href="https://github.com/SukkaW/DisqusJS" target="_blank">DisqusJS</a></p></footer></div>',s.getElementById("dsqjs-msg").innerHTML='评论基础模式加载中。如需完整体验请针对 disq.us | disquscdn.com | disqus.com 启用代理并 <a id="dsqjs-reload-disqus" class="dsqjs-msg-btn">尝试完整 Disqus 模式</a> | <a id="dsqjs-force-disqus" class="dsqjs-msg-btn">强制完整 Disqus 模式</a>。',s.getElementById("dsqjs-reload-disqus").addEventListener("click",c),s.getElementById("dsqjs-force-disqus").addEventListener("click",m);var e="".concat(u.config.api,"3.0/threads/list.json?forum=").concat(u.config.shortname,"&thread=ident:").concat(u.config.identifier,"&api_key=").concat(u.config.apikey);i(e,function(s){var e=document;if(0===s.code&&1===s.response.length){var n=s.response[0];u.page={id:n.id,title:n.title,isClosed:n.isClosed,length:n.posts,comment:[]},e.getElementById("dsqjs-comment-num").innerHTML=u.page.length,u.config.siteName&&(e.getElementById("dsqjs-site-name").innerHTML=u.config.siteName),t()}else 0===s.code&&1!==s.response.length?(e.getElementById("dsqjs-msg").innerHTML='该 Thread 并没有初始化，是否 <a id="dsqjs-force-disqus" class="dsqjs-msg-btn">切换到完整 Disqus 模式</a> 进行初始化？',e.getElementById("dsqjs-force-disqus").addEventListener("click",m)):r()},function(s){r()})}();var t=function n(s){var t=document.getElementById("dsqjs-load-more");if(s){s="&cursor=".concat(s);a=function(){t.classList.remove("dsqjs-disabled"),t.innerHTML="加载更多评论失败，点击重试"}}else{s="";var a=function(){r()}}t.classList.add("dsqjs-disabled");var e="".concat(u.config.api,"3.0/posts/list.json?forum=").concat(u.config.shortname,"&thread=").concat(u.page.id).concat(s,"&include=approved&include=deleted&api_key=").concat(u.config.apikey);i(e,function(s){if(0===s.code&&0<s.response.length)t.classList.remove("dsqjs-disabled"),u.page.comment=u.page.comment.concat(s.response),o(u.page.comment),s.cursor.hasNext?(t.innerHTML="加载更多评论",t.classList.remove("dsqjs-hide"),t.addEventListener("click",function(){n(s.cursor.next)})):t.classList.add("dsqjs-hide");else if(0===s.code&&0===s.response.length){var e=document;e.getElementById("dsqjs-msg").innerHTML='你可能无法访问 Disqus，已启用评论基础模式。如需完整体验请针对 disq.us | disquscdn.com | disqus.com 启用代理并 <a id="dsqjs-reload-disqus" class="dsqjs-msg-btn">尝试完整 Disqus 模式</a> | <a id="dsqjs-force-disqus" class="dsqjs-msg-btn">强制完整 Disqus 模式</a>。',e.getElementById("dsqjs-header").classList.remove("dsqjs-hide"),e.getElementById("dsqjs-post-container").innerHTML='<div class="dsqjs-no-comment">这里冷冷清清的，一条评论都没有</div>',e.getElementById("dsqjs-reload-disqus").addEventListener("click",c),e.getElementById("dsqjs-force-disqus").addEventListener("click",m)}else a()},function(s){a()})},a=function(s){var e=[],o=[];return s.forEach(function(s){(s.parent?o:e).push(s)}),e.map(function(s){return{comment:s,author:s.author.name,isPrimary:!!u.config.admin&&s.author.username===u.config.admin,children:function s(e){if(0===o.length)return null;for(var n=[],t=0;t<o.length;t++){var a=o[t];a.parent===e&&n.unshift({comment:a,author:a.author.name,isPrimary:!!u.config.admin&&a.author.username===u.config.admin,children:s(+a.id)})}return n.length?n:null}(+s.id)}})},o=function(s){var o=function(s){return s.comment.author.profileUrl?(s.comment.avatarEl='<a href="'.concat(s.comment.author.profileUrl,'"><img src="').concat(s.comment.author.avatar.cache,'"></a>'),s.comment.authorEl='<span class="dsqjs-post-author"><a href="'.concat(s.comment.author.profileUrl,'" target="_blank" rel="nofollow noopener noreferrer">').concat(s.comment.author.name,"</a></span>")):(s.comment.avatarEl='<img src="'.concat(s.comment.author.avatar.cache,'">'),s.comment.authorEl='<span class="dsqjs-post-author">'.concat(s.comment.author.name,"</span>")),u.config.adminLabel&&s.isPrimary&&(s.comment.authorEl+='<span class="dsqjs-admin-badge">'.concat(u.config.adminLabel,"</span>")),s},i=function(s){if(s.isDeleted)var e="",n="<small>此评论已被删除</small>";else e="".concat(s.authorEl,'<span class="dsqjs-bullet"></span>'),n=s.message;var t,a,o;return'<div class="dsqjs-post-item dsqjs-clearfix"><div class="dsqjs-post-avatar">'.concat(s.avatarEl,'</div><div class="dsqjs-post-body"><div class="dsqjs-post-header">').concat(e,'<span class="dsqjs-meta"><time>').concat(d(s.createdAt),'</time></span></div><div class="dsqjs-post-content">').concat((t=n,a=new RegExp(/<a.+?href=\"https:\/\/disq.us(.+?)\".*>/gi),o=new RegExp(/href=\"(.+?)\"/gi),(t.match(a)||[]).map(function(s){s=s.match(o)[0].replace(/href=\"https:\/\/disq.us\/url\?url=/g,"").replace(/(.*)"/,"$1"),s=decodeURIComponent(s).replace(/(.*):(.*)/,"$1"),t=t.replace(a,'<a href="'.concat(s,'" rel="nofollow noopener noreferrer">').concat(s,"</a>"))}),t.replace(/href=/g,'target="_blank" href=')),"</div></div></div>")},e="";(s=a(s)).map(function(s){s.children&&(s.nesting=1),s=o(s),e+='<li data-id="comment-'.concat(s.comment.id,'">').concat(i(s.comment)).concat(function e(s){var n=s.nesting,t=s.children||[];if(t){var a=n<4?'<ul class="dsqjs-post-list dsqjs-children">':'<ul class="dsqjs-post-list">';return t.map(function(s){(s=o(s)).nesting=n+1,a+='<li data-id="comment-'.concat(s.comment.id,'">').concat(i(s.comment)).concat(e(s),"</li>")}),0!==(a+="</ul>").length?a:void 0}}(s),"</li>")});var n=document;n.getElementById("dsqjs-header").classList.remove("dsqjs-hide"),n.getElementById("dsqjs-msg").innerHTML='你可能无法访问 Disqus，已启用评论基础模式。如需完整体验请针对 disq.us | disquscdn.com | disqus.com 启用代理并 <a id="dsqjs-reload-disqus" class="dsqjs-msg-btn">尝试完整 Disqus 模式</a> | <a id="dsqjs-force-disqus" class="dsqjs-msg-btn">强制完整 Disqus 模式</a>。',n.getElementById("dsqjs-post-container").innerHTML=e,n.getElementById("dsqjs-reload-disqus").addEventListener("click",c),n.getElementById("dsqjs-force-disqus").addEventListener("click",m)}}function r(){var s=document;s.getElementById("dsqjs-msg").innerHTML='评论基础模式加载失败，是否 <a id="dsqjs-reload-dsqjs" class="dsqjs-msg-btn">重载</a> 或 <a id="dsqjs-reload-disqus" class="dsqjs-msg-btn">尝试完整 Disqus 模式</a> ？',s.getElementById("dsqjs-reload-dsqjs").addEventListener("click",t),s.getElementById("dsqjs-reload-disqus").addEventListener("click",c)}function l(){e("dsqjs_mode","dsqjs"),t()}function m(){e("dsqjs_mode","disqus"),n()}var a,u=[];u.config=s,u.config.api=u.config.api||"https://disqus.skk.moe/disqus/",u.config.identifier=u.config.identifier||document.location.origin+document.location.pathname+document.location.search,u.config.url=u.config.url||document.location.origin+document.location.pathname+document.location.search,u.page=[],window.disqus_config=function(){this.page.url=u.config.url,this.page.identifier=u.config.identifier},u.mode=(a="dsqjs_mode",localStorage.getItem(a)),"disqus"===u.mode?n():"dsqjs"===u.mode?t():c()}