$(document).ready(function () {
    // :first 获取第一个元素，返回第一个元素
    // 改变第1个<div>元素的背景颜色
    // $("div:first").css("background", "#bbffaa");

    // :last 选取最后一个元素，返回单个元素
    // 改变最后一个<div>元素的背景颜色
    // $("div:last").css("background","#bbffaa");

    // :not(selector) 去除所有与给定选择器匹配的元素，返回集合元素
    // 改变class不为one的<div>元素的背景色
    // $("div:not(.one)").css("background", "#bbffaa");

    // :even 选取索引是偶数的所有元素，所有从0开始，返回集合元素
    // 改变索引值为偶数的<div>元素的背景色
    // $("div:even").css("background","#bbffaa");

    // :odd 选取索引是奇数的所有元素，所有从0开始，返回集合元素
    // 改变索引值为奇数的<div>元素的背景色
    // $("div:odd").css("background","#bbffaa");

    // :eq(index) 选取索引等于index的元素（index从0开始），返回单个元素
    // 改变索引值等于3的<div>元素的背景色
    // $("div:eq(3)").css("background", "#bbffaa");

    // :gt(index) 选取索引值大于index的元素（index从0开始），返回集合元素
    // 改变索引值大于3的<div>元素的背景颜色
    // $("div:gt(3)").css("background", "#bbffaa");

    // :lt(index) 选取索引值小于index的元素（index从0开始），返回集合元素
    // 改变索引值小于3的<div>元素的背景颜色
    // $("div:lt(3)").css("background", "#bbffaa");

    // :header 选取所有的标题元素，例如h1,h2,h3等等，返回集合元素
    // 改变所有的标题元素，例如<h1>,<h2>,<h3>……这些元素的背景色
    // $(":header").css("background", "#bbffaa");

    // :animated 选取当前正在执行动画的所有元素，返回集合元素
    // 改变当前正在执行动画的元素的背景色
    // 下面是执行动画代码
    // function animateIt() {
    //     $("#mover").slideToggle("slow", animateIt);
    // }
    // animateIt();
    // 绑定动态事件
    // $(":animated").css("background", "#bbffaa");

    // :focus 选取当前获得焦点的元素
    // 改变当前获取焦点的元素的背景色
    // $(":focus").css("background", "#bbffaa");
    // 网上查了一下，input框有焦点事件，a标签如果没有href也没有焦点事件，另外其他标签如果需要焦点事件，可增加tabindex="0"或者contenteditable="true"，来使标签能够获取焦点
    // 链接：https://www.nowcoder.com/questionTerminal/7436e8e98da841f2ba082430ae88549a?orderByHotValue=1&mutiTagIds=574&page=1&onlyReference=false
    // 1.contenteditable：true|false 规定元素文本是否可编辑；
    // 2.tabindex：0 | -1 | x
    // 0：tab键可获取焦点；
    // -1：tab键不可获取焦点；
    // x：x>0，x越小获取焦点优先级越高；
    $("#mover").focus(function(){
        $(":focus").css("background", "#bbffaa");
    });
});