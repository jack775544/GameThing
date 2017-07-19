function getPageJson(callback, options) {
    $.get("data.json", function (r) {
        r = JSON.parse(r)
        callback(r, ...options);
    });
}

function updatePage(data, vueObject) {
    Object.keys(data).forEach(function (e) {
        vueObject.$set(vueObject.messages, e, data[e]);
    });
}

var a = new Vue({
    el: '#app',
    data: {
        messages: {}
    }
});
getPageJson(updatePage, [a]);

Array.forEach(document.getElementsByClassName("svgClass"), function (r) {
    r.getSVGDocument().getElementById("svgPath").setAttribute("fill", "orange")
});

setInterval(function () {
    getPageJson(updatePage, [a]);
}, 5000);