$(document).ready(function () {
    // 属性过滤选择器的过滤规则是通过元素的属性来获取相应的元素
    
    // [attribute]，选取拥有此属性的元素，返回集合元素
    // 改变含有属性title的<div>元素的背景颜色
    // $("div[title]").css("background", "#bbffaa");
    
    // [attribute=value]，选取属性的值为value的元素，返回集合元素
    // 改变属性title值等于"test"的<div>元素的背景色
    // $("div[title=test]").css("background", "#bbffaa");

    // [attribute!=value]，选取属性的值不为value的元素，返回集合元素
    // 注意，没有title属性的值也会被获取到
    // 改变属性title值不等于"test"的<div>元素的背景色
    // $("div[title!=test]").css("background", "#bbffaa");

    // [attribute^=value]，选取属性的值以value开始的元素，返回集合元素
    // 改变属性title以"te"开始的<div>元素的背景色
    // $("div[title^=te").css("background", "#bbffaa");
    // 改变属性title值以"en"开始的<div>元素的背景色
    // $("div[title^=en").css("background", "#bbffaa");

    // [attribute$=value]，选取属性的值以value结尾的元素，返回集合元素
    // 改变属性title值以"est"结束的<div>元素的背景色
    // $("div[title$=est]").css("background", "#bbffaa");

    // [attribute*=value]，选取属性的值包含value的元素，返回集合元素
    // 改变属性title值含有"es"的<div>元素的背景色
    // $("div[title*=es]").css("background", "#bbffaa");
    // 改变属性title值含有"en"的<div>元素的背景色
    // $("div[title*=en]").css("background", "#bbffaa");

    // [attribute|=value]，选取属性值等于给定字符串或以该字符串为前缀（该字符串后跟一个字符串"-"）的元素，返回集合元素
    // 改变属性title等于en或以en为前缀（该字符串后跟一个连字符'-'）的元素的背景色
    // $("div[title|=en").css("background", "#bbffaa");

    // [attribute~=value]，选取属性用空格分隔的值中包含一个给定值的元素，返回集合元素
    // 改变属性title用空格分隔的值中包含uk的元素的背景色
    // $("div[title~=uk]").css("background", "#bbffaa");

    // [attribute1][attribute2][attributeN]，用属性选择器合并成一个复合属性选择器，满足多个条件，没选择一次，缩小一次范围，返回集合元素
    // 改变含有属性id，并且属性title值含有"es"的<div>元素的背景色
    // $("div[id][title*=es]").css("background", "#bbffaa");
});