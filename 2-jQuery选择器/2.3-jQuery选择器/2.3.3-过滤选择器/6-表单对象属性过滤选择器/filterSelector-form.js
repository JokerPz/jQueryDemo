$(document).ready(function() {
    // :enabled，选取所有可用元素，返回集合元素
    // 改变表单内可用<input>元素的值
    // $("#form1 input:enabled").val("这里变化了！").css("background", "#bbffaa");
    // 如果不加input，则返回所有的表单内可用元素，input作为返回元素的选择条件
    // $("#form1 :enabled").val("这里变化了！").css("background", "#bbffaa");

    // :disabled，选取所有不可用元素，集合元素
    // 改变表单内不可以用<input>元素的值
    // $("#form1 input:disabled").val("这里变化了").css("background", "#bbffaa");

    // :checked，选取所有被选中的元素（单选框，复合框），返回集合元素
    // 获取多选框中的个数
    // var len = $("input:checked").length;
    // $("div").text("选中的元素有：" + len + "个");

    // :selected，选取所有被选中的选项元素（下拉列表），返回集合元素
    // 获取下拉列框中的内容
    // var content = $("select :selected").text();
    // $("#testDiv2").text("选中的内容是：【" + content + "】");
});