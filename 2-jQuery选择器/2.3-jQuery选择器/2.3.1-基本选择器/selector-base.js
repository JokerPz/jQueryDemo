$(document).ready(function () {
    // #id 根据给定id，匹配一个元素，返回单个元素
    // 改变id为one的元素背景颜色
    $("#one").css("background", "#bbffaa");

    // .class 根据给定的类名匹配元素，返回集合元素
    // 改变class为mini的所有元素的背景色
    // $(".mini").css("background","#bbffaa");

    // element 根据给定的元素名匹配元素，返回集合元素
    // 改变class为mini的所有元素的背景色
    // $("div").css("background", "#bbffaa");

    // * 匹配所有元素，返回集合元素
    // 改变所有元素的背景颜色
    // $("*").css("background","#bbffaa");

    // seletor1,selector2…seletorN 将每一个选择器匹配到的元素合并后一起返回，返回集合元素
    // 改变所有的<span>元素和id为two的元素的背景色
    // $("span, #two").css("background", "#bbffaa");
});