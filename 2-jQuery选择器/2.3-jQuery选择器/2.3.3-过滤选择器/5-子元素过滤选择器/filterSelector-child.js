$(document).ready(function () {
    // :nth-child(index/even/odd/equation)，选取每个父元素下的第index个子元素或者奇偶元素。（index从1算起），返回集合元素
    // :nth-child()选择器是很常用的子元素过滤选择器，详细功能如下：
    // :nth-child(even)能选取每个父元素下的索引值是偶数的元素
    // :nth-child(odd)能选取每个父元素下的索引值是奇数的元素
    // :nth-child(2)能选取每个父元素下的索引值等于2的元素
    // :nth-child(3n)能选取每个父元素下的索引值是3的倍数的元素，（n从1开始）。
    // :nth-child(3n+1)能选取每个父元素下的索引值是(3n+1)的元素。（n从1开始）

    // 例子：
    // 改变每个class为one的<div>父元素下的第2个子元素的背景色
    // $("div.one :nth-child(2)").css("background", "#bbffaa");

    // 改变每个class为one的<div>父元素下的第1个子元素的背景色
    $("div:nth-child(2)").css("background", "#bbffaa");

    // :first-child 选取每个父元素的第一个子元素，返回集合元素
    // 改变每个class为one的<div>父元素下的第一个子元素的背景色
    // $("div.one :first-child").css("background", "#bbffaa");

    // :last-child 选取每个父元素的最后一个子元素，返回集合元素
    // 改变每个class为one的<div>父元素下的最后一个子元素的背景色
    // $("div.one :last-child").css("background", "#bbffaa");

    // :only-child 如果某个元素是他父元素中惟一的子元素，那么将会被匹配。如果父元素中含有其他元素，则不会被匹配
    // 如果class为one的<div>父元素下只有一个子元素，那么改变这个子元素的背景颜色
    // $("div.one :only-child").css("background", "#bbffaa");

    // ***** 注意1，以上的:前需要留空格
    // ***** 因为如果没有空格，如$("div.one:only-child").css("background", "#bbffaa");
    // ***** 会匹配全局的元素，然后先找出含有惟一子元素，然后在根据此子元素能否匹配div.one，如果能匹配上，则返回此子元素，否则不返回。
    // ***** 如果:前没有空格，则:的条件作为子元素的匹配条件，而不是父元素的匹配条件

    // ***** 注意2，:eq(index)只匹配一个元素，而:nth-child将为每一个符合条件的父元素匹配子元素；
    // ***** eq(index)的index从0开始
    // ***** :nth-child(index)的index从1开始
    // ***** :first-child 与 first、:last-child 与 last 也与上类似
});