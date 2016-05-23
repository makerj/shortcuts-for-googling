var anchors = document.querySelectorAll('h3.r a');
var position = -1;
var keyRouter = {};
var searchMenus = document.querySelectorAll('#hdtb-msb a.q.qs');
var searchMenu_All = document.querySelectorAll('#hdtb-msb .hdtb-mitem')[0];

keyRouter[9] = function onTabKey(e) {
    if (position !== -1) anchors[position].classList.toggle('highlight');
    position = e.shiftKey ? position - 1 : position + 1;
    if (position === anchors.length) {
        position = 0;
    } else if (position === -1) {
        position = anchors.length - 1;
    }
    anchors[position].classList.toggle('highlight');
    anchors[position].focus();
};

keyRouter[73] = function onIKey(e) {
    searchMenus[0].click();
};

keyRouter[86] = function onVKey(e) {
    searchMenus[1].click();
};

keyRouter[78] = function onNkey(e) {
    searchMenus[2].click();
};

keyRouter[77] = function onMkey(e) {
    searchMenus[3].click();
};

keyRouter[65] = function (onAKey) {
    searchMenu_All.click();
};

document.addEventListener('keyup', function (e) {
    if (document.activeElement.nodeName === 'input') return;
    keyRouter[e.keyCode](e);
});