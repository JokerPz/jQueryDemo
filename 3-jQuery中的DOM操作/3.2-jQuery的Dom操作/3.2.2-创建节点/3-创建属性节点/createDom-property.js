$(function () {
    // 创建第1个<li>元素
    var $li_1 = $("<li title='香蕉'>香蕉</li>");
    // 创建第2个<li>元素
    var $li_2 = $("<li title='雪梨'>雪梨</li>");
    // 写法1：添加到<ul>节点中，使之能在网页中显示
    // $("ul").append($li_1);
    // $("ul").append($li_2);
    // 写法2：采用链式写法
    $("ul").append($li_1).append($li_2);
});