---
publishDate: 'May 14 2023'
title: 'The New HTML Dialog Element'
description: 'The Dialog element is a new HTML element to create dialogs such as pop-ups, modals, and more. Though this is no new feature for the Javascript users who could have done this with a simple UI library'
image: '~/assets/images/the-new-html-dialog-element/poster.png'
tags: [frontend, web, html, dom, dialog, element]
---

Google announced support for a new HTML feature i.e. the Dialog HTML element recently in May 2023 Google IO event. It is something that almost all websites have been using for showing confirmation messages, error messages, alerts, and many more; the native support for these features is really exciting.

The Dialog element is a new HTML element to create dialogs such as pop-ups, modals, and more. Though this is no new feature for the Javascript users who could have done this with a simple UI library. But keep in mind that it comes out of the box with Browser native support i.e. no hassle for extra add-ons.

The new dialog element provides the following built-in features.

- Focus management for dialog
- Tab tracking
- Keeping pop-ups stacking context

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
<button onclick="mydialog.showModal()">
        Open Dialog Box
</button>
```

We can also close the dialog using the close method of the dialog element.

```html
<button onclick="mydialog.close()">
            Close
 </button>
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