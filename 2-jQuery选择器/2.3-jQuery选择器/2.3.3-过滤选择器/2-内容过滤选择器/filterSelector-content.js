$(document).ready(function () {
    // 内容过滤选择器的过滤规则主要体现在它所包含的子元素或文本内容上

    // :contains(text) 获取含有文本内容为“text”的元素，返回集合元素
    // 改变含有文本“di”的<div>元素的背景色
    // $("div:contains(di)").css("background", "#bbffaa");

    // :empty 选取不包含子元素或者文本的空元素，返回集合元素
    // 改变不包含子元素（包括文本元素）的<div>空元素的背景色
    // $("div:empty").css("background","#bbffaa");

    // :has(selector) 选取含有选择器所匹配的元素的元素，返回集合元素
    // 改变含有class为mini元素的<div>元素的背景色
    // $("div:has(.mini)").css("background", "#bbffaa");

    // :parent 选取含有子元素或者含有文本的元素，返回集合元素
    // 改变含有子元素（包括文本元素）的<div>元素的背景颜色
    $("div:parent").css("background","#bbffaa");
});