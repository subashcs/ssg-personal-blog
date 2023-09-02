---
publishDate: 'May 14 2023'
title: 'The Dialog Element in HTML'
description: 'The Dialog element is a new HTML element to create dialogs such as pop-ups, modals, and more. Though this is no new feature for the Javascript users who could have done this with a simple UI library'
image: '~/assets/images/the-new-html-dialog-element/poster.png'
tags: [frontend, web, html, dom, dialog, element]
---

Dialog boxes have been used by almost all websites for showing confirmation messages, error messages, alerts, and many more; the native support for these features in the browser is really exciting.

The Dialog element is a new HTML5 element to create dialogs such as pop-ups, modals, alerts, and more. This may be no new feature for the Javascript users who could have done this with a simple UI library. But keep in mind that it comes out of the box with Browser native support i.e. no hassle for extra add-ons.

Though the &lt;dialog&gt; element was introduced a long ago, it was not fully supported by major browsers such as Chrome. Recently, In May 2023 Google announced support for the HTML5 dialog element in Chrome-97 including all web platforms. This is a good sign for developers that the browser support is rising for this portent feature.

The HTML5 dialog element provides the following built-in features. They are:

- Focus management for dialog
- Tab tracking
- Keeping stacking context

## Usage

We can define the Dialog element on our HTML simply using the **dialog** keyword. Here is a sample code for defining a dialog element.

```html
<dialog id="mydialog">
  <form method="dialog">
    <p>Hi, This is a dialog box</p>
    <button>Ok</button>
  </form>
</dialog>
```

Once we have defined our dialog element now we can simply trigger the dialog by referencing the dialog **element ID** and using the **showModal** method provided by the dialog element.

```html
<button onclick="mydialog.showModal()">Open Dialog Box</button>
```

We can also close the dialog using the close method of the dialog element.

```html
<button onclick="mydialog.close()">Close</button>
```

We can also define a dialog that opens by default when a page loads using the **open** attribute of the dialog element.

```html
<dialog open>
  <p>Welcome, User!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

The information about different browser support can be found here.

[The Dialog element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#browser_compatibility)

Also, you can try the JSFiddle here.

[HTML dialog element - JSFiddle - Code Playground](https://jsfiddle.net/subashcs/2vn94euo/3/)

If you are excited about developing a color-adaptive, responsive, and accessible mini and mega modals with the &lt;dialog&gt; element. [Check out this blog - Building a dialog component](https://web.dev/building-a-dialog-component/).

## References:

[https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)

[https://www.youtube.com/watch?v=x9rh0Du4Czg](https://www.youtube.com/watch?v=x9rh0Du4Czg)
