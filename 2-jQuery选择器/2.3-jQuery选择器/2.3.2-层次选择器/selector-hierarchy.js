$(document).ready(function () {
    // $("ancestor descendant") 选取ancestor元素里的所有descendant（后代）元素，返回集合元素
    // 改变<body>内所有<div>的背景色
    // $("body div").css("background", "#bbffaa");

    // $("parent > child") 选取parent元素下的child（子）元素，与$("ancestor descendant")有区别，$("ancestor descendant")选择的是后代元素，返回集合元素
    // 改变<body>内子元素<div>的背景色
    // $("body > div").css("background","#bbffaa");

    // $("prev + next") 选取紧接在prev元素后的next元素
    // 改变class为one的下一个<div>同辈元素背景
    // $(".one + div").css("background", "#bbffaa");
    // 上面方法比较少用,因为.next()方法可以进行替代
    // $(".one").next().css("background", "#bbffaa");

    // $("prev + sublings") 选取prev元素之后的所有siblings元素
    // 改变id为two的元素后面的所有<div>同辈元素的背景色
    // $("#two ~ div").css("background","#bbffaa");
    // 上面方法比较少用,因为.nextAll()方法可以进行替代
    $("#two").nextAll("div").css("background", "#bbffaa");
});