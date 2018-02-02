/**
* Create an html element
* @param opts {}
* @return {HTMLElement}
**/
export function createElement (
  {
    tagName = 'div',
    innerHTML,
    appendTo,
    cssText,
    style = {},
    attr = {}
  } = {} ) {

    let element = document.createElement(tagName);

    Object.keys(attr).forEach( (key) => {
      element.setAttribute(key, attr[key]);
    });

    Object.keys(style).forEach( (key) => {
      element.style.setProperty(key, style[key]);
    });

    if (cssText && element.style) {
      element.style.cssText += cssText;
    }

    if (innerHTML) {
      element.innerHTML = innerHTML;
    }

    if (appendTo && typeof appendTo.appendChild === 'function') {
      appendTo.appendChild(element);
    }

    return element;

}
