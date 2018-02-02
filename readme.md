## Configuration based createElement function

 ```javascript
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

 ```



## Use Example
```javascript
  import { createElement } from './create-element.js';

  let headerImage = createElement({
    tagName: 'img',
    cssText: 'width:100%; height: 100%',
    attr: {
      src: IMAGE_URL,
      id: 'header'
    }
  });

  let wrapper = createElement({
    tagName: 'div',
    innerHTML: 'This is wrapper'
    appendTo: document.body,
    style: {
      width: '300px',
      height: '300px'
    },
    attr: {
      id: 'wrapper',
      class: 'wrapper fullWidth'
    }
  });

  let imageWrappedWithLink = createElement({
    tagName: 'a',
    innerHTML: '<img src="image.jpg" style="width:100%;height:auto;border:0px" />',
    cssText: 'width:100%;height:100%;',
    appendTo: wrapper,
    attr: {
      target: '_top',
      href: '#'
    }
  })

```
