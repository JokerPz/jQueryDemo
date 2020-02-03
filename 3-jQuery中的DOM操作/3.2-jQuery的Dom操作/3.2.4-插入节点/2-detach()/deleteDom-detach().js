$(function(){
    // detach()和remove()一样，也是从DOM中去掉所有匹配的元素。
    // 但需要注意的是，这个方法不会把匹配的元素从jQuery对象中删除，因而可以在将来再使用这些匹配的元素。
    // 与remove()不同的是，所有绑定的事件、附加的数据等都会保留下来。

    $("ul li").click(function() {
        alert($(this).html());
    });
    // detach()方式删除元素
    var $li1 = $("ul li:eq(1)").detach();
    // remove()方式删除元素
    var $li2 = $("ul li:eq(1)").remove();
    
    // 重新追加此元素，发现它之前绑定的事件还在，如果使用remove()方法删除元素的话，那么它之前绑定的事件将失效
    $li1.appendTo("ul");
    $li2.appendTo("ul");
})