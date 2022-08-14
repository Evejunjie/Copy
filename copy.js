// ==UserScript==
// @name         瑞玲
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  解决复制文本的问题 , match 添加你需要的网址 网址
// @author       Junjie
// @match        *://www.baidu.com/**
// @match        *://www.jy135.com/**
// @match        *://blog.csdn.net/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jy135.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';


  /**
* @date 2022年8月14日22:14:34
* @email junjiefrost@gmail.com
* @naem 瑞玲 , 锋锐玲珑
* @author Junjie
*/

  /**
  * CSS 阻止复制
  */
  function css() {
    let style = document.createElement("style");
    style.setAttribute("id", "junjie");
    style.textContent = 'html *{ user-select: auto !important;}';
    document.head.appendChild(style);
  }
  /**
  * JS 阻止复制, 添加事件  在 开始时 停止事件的传递
  */
  function copy() {
    document.addEventListener("copy", function (evt) {
      evt.stopPropagation();
    }, true);
  }
  /** 加载直接执行 */
  if (document.readyState == "complete") {
    console.log("执行1");
    css();
    copy();
  }
  /**
  * 等待加载完毕
  */
  document.addEventListener('readystatechange', function (event) {
    if (event.target.readyState === 'complete') {
      console.log("执行2");
      css();
      copy();
    }
  });

})();