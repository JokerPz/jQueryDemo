$(document).ready(function () {
    // 可见性过滤选择器是根据元素的可见和不可见状态来选择相应的元素

    // :hidden 选取所有不可见的元素，返回集合元素
    // 显示隐藏的<div>元素
    // .show() 是显示元素，入参3000是时间，单位毫秒
    $("div:hidden").show(3000);

    // :visible 选取所有可见的元素，返回集合元素
    // 改变所有可见的<div>元素的背景色
    // $("div:visible").css("background","#bbffaa");
});