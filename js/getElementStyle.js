function getWH(elem) {
    if (window.getComputedStyle(elem, null).width) {
        return {
            width: window.getComputedStyle(elem, null).width,
            height: window.getComputedStyle(elem, null).height
        }
    } else {
        return {
            width: elem.currentStyle.width,
            heigth: elem.currentStyle.height
        }
    }
}

function getOpacity(elem) {
    if (window.getComputedStyle(elem, null).opacity) {
        return {
            opacity: window.getComputedStyle(elem, null).opacity
        }
    } else {
        return {
            opacity: elem.currentStyle.opacity
        }
    }
}

function getStyleAttr(elem, attr) {
    if (window.getComputedStyle(elem, null)[attr]) {
        return window.getComputedStyle(elem, null)[attr]
    } else {
        return elem.currentStyle[attr]
    }
}