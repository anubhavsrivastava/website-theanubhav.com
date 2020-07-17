---
template: BlogPost
path: /2020/02/20/linking-is-not-easy/
date: 2020-02-20T15:14:36.571Z
title: <a>Linking</a> in HTML is not a piece of cake!
subtitle: In-depth information on the anchor tag <a> in HTML
avatar: /img/avatars/avatar-js.png
gist: >-
  Deep dive into attributes and functionalities that are possible in HTML anchor
  tag
categories:
  - HTML
  - JS
tag:
  - HTML
  - Code
  - Web
draft: false
---
Anchor tag is more than just a simple link `<a href="http://theanubhav.com" ></a>`, this article is an attempt to cover various available attributes and make the use of it.

### Table of contents

<!-- toc -->

- [What is an anchor tag (HTML)?](#what-is-an-anchor-tag-html)
- [Styling links in the browsers (CSS)](#styling-links-in-the-browsers-css)
- [Possible links values for "href"](#possible-links-values-for-href)
- [Opening link in new tab - `target="_blank"`](#opening-link-in-new-tab---target_blank)
    + [What are possible values of `target=""`](#what-are-possible-values-of-target)
- [Open links in a dedicated tab for all links on the page](#open-links-in-a-dedicated-tab-for-all-links-on-the-page)
- [Some Security with rel="noopener" and rel="noreferrer"](#some-security-with-relnoopener-and-relnoreferrer)
    + [`noopener`](#noopener)
    + [`noreferrer`](#noreferrer)
      - [`rel="nofollow"` attribute](#relnofollow-attribute)
- [Downloading content via link](#downloading-content-via-link)
- [Other attributes for anchor tag](#other-attributes-for-anchor-tag)
- [General Attributes](#general-attributes)
- [Preventing links from performing default browser behavior](#preventing-links-from-performing-default-browser-behavior)
- [Link to highlight text on page](#link-to-highlight-text-on-page)
- [The window open() Method](#the-window-open-method)
    + [Browser handling](#browser-handling)
    + [Tackling security in `window.open` function.](#tackling-security-in-windowopen-function)
    + [Communication between tabs](#communication-between-tabs)
    + [Open All External Links in a New Tab with JavaScript](#open-all-external-links-in-a-new-tab-with-javascript)
  * [Importance of anchor over window.open](#importance-of-anchor-over-windowopen)
- [References](#references)

<!-- tocstop -->

<br />
But First,

### What is an anchor tag (HTML)?

The <a> tag is used for a link also known as hyperlink, this can be a link to the same site/page or another page/site.
The most important attribute of the <a> element is the href attribute. It indicates the link's destination.

```html
<a href="http://theanubhav.com"></a>
```

---

### Styling links in the browsers (CSS)

By default, <a href="#">links</a> will appear as follows in all browsers:

    - An unvisited link is underlined and blue
    - A visited link is underlined and purple
    - Hovering on link makes it underlined and purple
    - An active link is underlined and red

<details>
<summary>Default display properties</summary>

```css
a:link,
a:visited {
    color: (internal value);
    text-decoration: underline;
    cursor: auto;
}
a:link:active,
a:visited:active {
    color: (internal value);
}
```

</details>

<br/>
You can override/reset them with the help of CSS (which is also done in CSS frameworks like Bootstrap) by changing styles for following,

-   `a:link` - a normal, unvisited link
-   `a:visited` - a link the user has visited
-   `a:hover` - a link when the user mouses over it
-   `a:active` - a link the moment it is clicked

For example, default anchor tag can be made simple via

```css
a {
    color: blue;
    text-decoration: none;
}
```

<br/>

### Possible links values for "href"

The href attribute must have a URL (URI) in its value or javascript:void(0):
The URL may be:

-   Fully Qualified (include a protocol)

    -   <a href="https://devtips.theanubhav.com" target="_blank">https://devtips.theanubhav.com</a> - new domain with "https" pre-defined protocol

-   URL with a relative (unspecified) protocol

    -   <a href="//devtips.theanubhav.com" target="_blank">//devtips.theanubhav.com</a> - new domain with current site protocol

-   Browser-specific protocol or app-specific deep links

    -   <a href="chrome://settings" target="_blank">chrome://settings</a> - Chrome settings page

    -   <a href="slack://open" target="_blank">slack://open</a> - If slack on your machine is installed it will open

-   Relative to the current page

    -   <a href="sample" target="_blank">/sample</a> - sample page to demo relative URL
    -   <a href="../linking-is-not-easy-sample/" target="_blank">../linking-is-not-easy-sample/</a> - Relative path "../" is relative parent path

-   Link on the same page via `id`

    -   <a href="#opening-link-in-new-tab---target_blank" >#opening-link-in-new-tab---target_blank</a> - links to next section which has an id attribute "#opening-link-in-new-tab---target_blank"

-   Relative to the current domain

    -   <a href="/" target="_blank">/</a> - Home Page
    -   <a href="/blogs/" target="_blank"> /blogs/</a> - Blog pages

-   Anchor with no links but generic event

    -   <a href="javascript:void(0);" onmouseover="document.getElementById('mouseover').innerText='Hovering';return " onmouseout="document.getElementById('mouseover').innerText='Hover Me';return " >
        <p id="mouseover" >Hover me</p>
        </a>

        <details>
        <summary>Show code</summary>

        ```javascript
        <a
            href="javascript:void(0);"
            onmouseover="document.getElementById('mouseover').innerText='Hovering';return "
            onmouseout="document.getElementById('mouseover').innerText='Hover Me';return "
        >
            <p id="mouseover">Hover me</p>
        </a>
        ```

        </details>

-   Text link to highlight
    This is newly introduced way to highlight text on the page
    Refer - [Link to highlight text on page](#link-to-highlight-text-on-page) section

---

Now that we have covered the essential part, let's get into some detailed use cases.

### Opening link in new tab - `target="_blank"`

Anchor links may have a "target" attribute which controls what happens when that link is clicked. `target` specifies in which context (of the browser) the linked resource will be opened.

If you want to provide a link that opens in the new tab of the browser, you should use the `target="_blank"` attribute on the anchor tag.

`target="_blank"` should be used with [rel="noopener"](3)

```html
<a href="http://theanubhav.com" target="_blank">Link to open in new tab</a>
```

The above link would look behave like this -
<a href="http://theanubhav.com" target="_blank">Link to open in new tab</a>

You may also be interested in doing so to avoid users going to a page that has no backlink to the current page/site. This will allow users to come visit the linked resource and can come back to the current page. It is done to keep visitors engaged longer to your site and improves your analytics like [bounce rate](https://support.google.com/analytics/answer/1009409?hl=en&ref_topic=6156780).

##### What are possible values of `target=""`

`target` attribute for anchor tags can be any case-insensitive match for one of the following literal strings:

`_blank`, `_self`, `_parent`, `_top` or `<customvalue>`;

-   "\_blank" - opens link in new context (tab/window)
-   "\_self" - opens the linked document in the same frame (context) as it was clicked (this is the default behaviour of the browser)
-   "\_top" - opens the linked document to topmost parent context
-   "\_parent" - opens the linked document to immediate parent context
-   "&lt;custom&gt;" - This can be custom name for a context. If a context (iframe) is not found on current page, browsers open new tab and share the context name for rest of links with same target.

In a very simple way, for now, `_blank` should only be used as the possible value of 'target'.

The frame and frameset tags are [obsolete](https://www.w3.org/TR/html5-diff/#obsolete-elements) in HTML5. Iframes do follow the above "\_top" and "\_parent/" context behavior.

Links opening within the same page is the default behavior for all browsers (as if the link had target="\_self" on it).

### Open links in a dedicated tab for all links on the page

You can provide a custom name to the context and open all links in dedicated context (tab/window).

If the name does not match any iframe name(or context) on the current page, the link will open in the new tab.
Any other link that has the same target name will open its link on that particular tab.
This is applicable across iframes who have links with the same `target` name. You can check the name of the tab, via `window.name` property.

```html
<a href="https://google.com" target="newtabname">Google</a>
<a href="https://bing.com" target="newtabname">Bing</a>
<a href="https://duckduckgo.com" target="newtabname">DuckDuckGo</a>
```

<div style="m-5">
<span>Click on any link below, all will use the same browser tab/window (context)</span>
<br/>
<a href="https://google.com" class="m-5" target="newtabname">Google</a>
<a href="https://bing.com" class="m-5" target="newtabname">Bing</a>
<a href="https://duckduckgo.com" class="m-5" target="newtabname">DuckDuckGo</a>
</div>

You can check the <a href="/experiments/links.html" target="_blank">live demo</a>

### Some Security with rel="noopener" and rel="noreferrer"

##### `noopener`

If the anchor tag has `target="_blank"` attribute, the href link will open in the new tab.

But, the new tab that opens the link can access the current tab's window object via `window.opener`.
This is a security issue and can further be used to exploit security vulnerabilities, which would depend on the web application.

To prevent this, it is recommended to use `rel="noopener"` attribute in links.

##### `noreferrer`

Use of attribute `rel="noreferrer"` prevents leakage of referrer information. It removes the referral info in the HTTP header. The target site (link) does not come to know the previous site from where the user is being redirected.
Use the rel=”noreferrer” attribute on outgoing links when you don’t want other sites to know that you are linking to them.

It is not recommended to use the `rel="noreferrer"` attribute on internal links. Even if you are opening it with `target="_blank"`, it can mess up with your analytics reports (eg, Google analytics).

In short, The `noopener` is needed to enhance the security of your website and prevent other websites from gaining access to your page (through the browser session).

The `noreferrer` is used to protect referral information from being passed to the target website and this also hides referral traffic.

You can check (noopener and noreferrer)[https://mathiasbynens.github.io/rel-noopener/] in action.

> It is always recommended that you use rel="noopener noreferrer" when you use `target="_blank"` attribute

###### `rel="nofollow"` attribute

If a website's performance in search engines is crucial, "nofollow" attribute is important.

`nofollow` instructs some search engines that the hyperlink should not influence the ranking of the link's target in the search engine's index.
It is intended to reduce the effectiveness of certain types of internet advertising because their search algorithm depends heavily on the number of links to a website.
This is because search engines determine which websites should be listed in what order in their search results for any given term.

Google originally introduced the `nofollow` tag in 2005 to combat [comment spam](https://googleblog.blogspot.com/2005/01/preventing-comment-spam.html) and [Spam in blogs](https://en.wikipedia.org/wiki/Spam_in_blogs)..
You can check the interpretation of (nofollow across search engines)[https://en.wikipedia.org/wiki/Nofollow#Interpretation_by_the_individual_search_engines].

### Downloading content via link

The `download` attribute specifies the target link to be downloaded when the user clicks on the link.
The default save dialog would appear and the linked file/resource would be downloaded.

```html
<a download href="https://theanubhav.com/favicon.ico"> Download favicon</a>
```

Using an attribute value for download will change default filename in the Save dialog.

```html
<a download="favicon.ico" href="https://theanubhav.com/favicon.ico">
    Download favicon.ico</a
>
```

### Other attributes for anchor tag

-   `title` : Defines the title of a link, which appears to the user as a tooltip.

```html
<a title="sample tooltip link" href="javascript:void(0)">sample</a>
```

<a class="ml-5" title="sample link" href="javascript:void(0)">sample</a>

-   `hreflang` : Specifies the language of the linked resource. It is purely advisory and is specified using two letter language code [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) code.
    If you have multiple versions of the same page in different languages, you can use the hreflang tag to tell search engines like [Google](https://support.google.com/webmasters/answer/189077?hl=en) about these variations.

```html
<a href="https://es.wikipedia.org/wiki/Anchor_text" hreflang="es">Flamenco</a>
```

-   `media` : The media attribute specifies what media/device the linked document is optimized for.

-   `type` : Gives the [MIME type](https://mimesniff.spec.whatwg.org/#mime-type) of the linked resource. It is purely advisory and the value must be a valid [MIME type string](https://mimesniff.spec.whatwg.org/#valid-mime-type).Some of the most commonly used values are: `text/html`, `text/css`, `application/javascript`, and `multipart/form-data`.

-   `rel` : The relationship, or rel, attribute describes the relationship between the source page and the destination page. Possible values include `nofollow`,`alternate`,`bookmark`,`prev`,`next`,`noopener`,`noreferrer`,`license`,`help`.

### General Attributes

Anchor links allow [global/core attributes](https://w3c.github.io/html-reference/global-attributes.html#common.attrs.core) are applicable to most HTML tags and also [event listeners/handlers](https://w3c.github.io/html-reference/global-attributes.html#common.attrs.event-handler) that may be triggered on various browser/user events.

### Preventing links from performing default browser behavior

You can intercept users' clicks on links via JavaScript.
This can be useful when:

-   Clicking on a "Submit" button, prevent it from submitting a form
-   Clicking on a link, prevent the link from following the URL

1. via `onclick` listener on anchor tag
   `onclick` [event handler](https://w3c.github.io/html-reference/global-attributes.html#common.attrs.event-handler) attribute can intercept user click action. The attribute executes the line within the onclick value (function body) and if onclick function returns false, the default browser behavior is cancelled

```javascript
<a href='http://www.google.com' onclick='return check(event)'>check</a>

<script type='text/javascript'>

function check(event)
{
    //do something with event (mouseEvent)
    return false;
}

</script>
```

2. via 'click' event on DOMElement via JavaScript handler
   One can add a click event handler on DOMElement (anchor in our case) and intercept click action.

```javascript
<a href="http://www.google.com">Check</a>;

document.querySelector("a").addEventListener("click", function (event) {
    //do something
    event.preventDefault();
});
```

The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

Use `document.querySelectorAll("a")` to apply the click handler on all anchor links. Few sites (mostly serving ads/popup) use this technique to open a new tab with an ad when a user clicks on a link for the first time.

### Link to highlight text on page

This is based on [Scroll to text fragment](https://wicg.github.io/scroll-to-text-fragment/) specification.

Currently it is not available in all browsers (as of July 2020). You can check current support on [caniuse](https://caniuse.com/#feat=url-scroll-to-text-fragment). It is available in [latest chrome](https://chromestatus.com/feature/4733392803332096#:~:text=This%20feature%20allows%20a%20user,and%20scrolls%20it%20into%20view.).

URL resource link (to page content) followed by `#:~:text=Word`, will find and highlight that piece of text on page load.

Eg,

```md
https://chromestatus.com/feature/4733392803332096#:~:text=This%20feature%20allows%20a%20user,and%20scrolls%20it%20into%20view.
```

### The window open() Method

You can open any link in a new tab using the `window.open` function.
If the link that is being generated is dynamic, window.open can be used.

```javascript
window.open("https://www.theanubhav.com");
```

Eg,

Dynamically open user page in github.com of the user.

```html
<html>
    <body>
        <input id="username" type="text" name="username" />
        <button onclick="NewTab()">
            Open input
        </button>
        <script>
            function NewTab() {
                let username = document.querySelector("#username").value;
                window.open("https://www.github.com/" + username, "_blank");
            }
        </script>
    </body>
</html>
```

Syntax

> window.open(URL, name, specs, replace)

`window.open` function accepts a second parameter as `name` of the context (same as in target attribute) and accepts `_blank`, `_parent`, `_self`, `_top` or `<customname>`. The only difference being, "\_blank" is the default value for window.open function while '\_self' is default attribute value for anchor tag.

`specs` are options and a comma-separated list of options. This is browser specific and may vary.

`replace` specifies whether the URL creates a new entry or replaces the current entry in the history list. Not all browsers support this feature.

window.open function returns a proxy object, which is basically a thin wrapper for the Window object representing the newly created window, and has all its features available. If the window couldn't be opened, the returned value is instead null.

##### Browser handling

If window.open() is not called directly upon a user action, browsers in general will block the new popup tab. This is to avoid exploitation of the API.

The following code wont open a new window since it is not user triggered.

```javascript
document.querySelector("#username").addEventListener('click', function() {
    setTimeout(function() {
		let username = document.querySelector('#username').value;
        window.open("https://www.github.com/" + username, "_blank");
    }, 2000);
}
```

While it would work if there wasn't a setTimeout block.

There are two simple rules to make it work,

-   User generated event (Even if a trigger is made to fire this event through code, browser may block the new window)
-   Non-nested inner function (For example a function calling another function, which in turn calls another function which finally calls window.open() may result in being blocked)

##### Tackling security in `window.open` function.

Just like normal anchor links, a new site which is opened by the window.open function has a `window.opener` object pointing to the site which opened the new link.

`noreferrer` and `noopener` can be specified in `specs`.

This can also be performed explicitly, via setting the `window.opener` value to `null`.

```javascript
var otherWindow = window.open(url);
otherWindow.opener = null;
```

##### Communication between tabs

-   If the link that is being opened can be trusted (belongs to the same domain or subdomain), `opener` object can be used to call any function or event of the parent tab from child tabs.

The child tab can access the parent tab through its window.opener property and execute code on the parent window.

```javascript
// call function "someParentfunction" that is present in the parent window
window.opener.someParentfunction();
```

Similarly, the parent window can also trigger a function or event in the child window.

```javascript
var handle;

document.querySelector("#open-tab").addEventListener("click", function () {
    let username = document.querySelector("#username").value;

    handle = window.open("https://www.github.com/" + username, "_blank");
    // call function "someChildfunction" that is present in the child window
    handle.someChildfunction();
});
```

-   The parent tab/window can also close previously opened tabs or focus on an already opened tab.

`window.open` returns a proxy object to the newly created window, which can be used to close or focus the child window via `otherWindow.close()` or `otherWindow.focus()` functions. Also `otherWindow.closed` returns false if the window is still open.
To all of this, [`same origin policy`](http://www.mozilla.org/projects/security/components/same-origin.html) is applicable. A script loaded in a window from a distinct origin (domain name) cannot get or set properties of child window or the properties of any of its HTML objects coming from another distinct origin (domain name). Therefore, before executing a script targeting a child window, the browser in the parent window will verify that the child window has the same domain name.

##### Open All External Links in a New Tab with JavaScript

One can open all tabs that do not belong to the current domain (same site) on a new tab via JavaScript. You can check the "href" with the current "domain" and add 'target="\_blank"' attribute if it is an external site.

```javascript
document.querySelectorAll("a").forEach((anchor) => {
    if (anchor.hostname !== location.hostname) {
        let currentTarget = anchor.getAttribute("target");
        if (["_self", "_parent", "_top"].includes(currentTarget)) {
            anchor.setAttribute("target", "_blank");
        }
        anchor.setAttribute("rel", "noopener noreferrer");
    } else {
        //force on the same tab
        anchor.setAttribute("target", "_self_");
    }
});
```

#### Importance of anchor over window.open

Anchor link should always be preferred over `window.open` functionality.

-   ContextMenu - Right clicking on anchor links gives the user the multiple options that are relevant to a link while a button disguised as a link wont show such options to the user.
-   Keyboard Availability - Many users use `Ctrl` or `Command` or even middle mouse click to open links in the new tab. This is only effective for anchor links
-   Accessibility - JavaScript links interfere with assistive technologies (e.g. voice browsers) and several web-aware applications (e.g. PDAs and mobile browsers). Screen reader work best with anchor tag in comparison to `arai-*` supported other tags with `window.open` functionality.
-   Media-Support - Webpage with anchor tag links are preserved when exported in the form of PDFs or any other portable web format.

### References

-   [When to use target=”\_blank”](https://css-tricks.com/use-target_blank/)
-   [whatwg HTML specifications](https://html.spec.whatwg.org/)
-   [whatwg MIME specifications](https://mimesniff.spec.whatwg.org)
-   [Wikipedia](https://en.wikipedia.org)
-   [MDN](https://developer.mozilla.org/)
-   [HTML.com](https://html.com/)
-   [W3C](https://w3c.github.io/html-reference/)

