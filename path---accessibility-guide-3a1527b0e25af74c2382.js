webpackJsonp([0xf25c34515ec1],{959:function(e,t){e.exports={data:{markdownRemark:{html:'<h1 id="accessibility-guide"><a href="#accessibility-guide" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Accessibility Guide</h1>\n<p><em>Please note, this guide is a work in progress and will be updated regularly. We welcome your comments and feedback.</em></p>\n<p>The goal of software accessibility is to remove barriers and create inclusive product experiences that work for everyone, regardless of physical ability.</p>\n<p>Since accessibility is best achieved when considered early in the design and development process, we ask everyone who contributes to or consumes PatternFly to understand accessibility needs and how they can be met. The following guide provides techniques and suggestions to help you design, develop, and test UIs to ensure that everyone has a good user experience.</p>\n<ul>\n<li><a href="#understanding-users-needs">Understanding Users’ Needs</a></li>\n<li><a href="#designing-and-developing-for-accessibility">Designing and Developing for Accessibility</a></li>\n<li>\n<p><a href="#checklists">Checklists</a></p>\n<ul>\n<li><a href="#what-patternfly-should-address">What PatternFly Should Address</a></li>\n<li><a href="#what-products-should-address">What Products Should Address</a></li>\n</ul>\n</li>\n<li><a href="#guidelines-and-references">Guidelines and References</a></li>\n<li><a href="#techniques">Techniques</a></li>\n<li><a href="#testing">Testing</a></li>\n</ul>\n<h2 id="understanding-users-needs"><a href="#understanding-users-needs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Understanding Users’ Needs</h2>\n<p>Great user experiences don’t just happen; they’re designed, tested, and refined with the user in mind. To develop inclusive products, it’s important to understand the varying needs of a wide range of users and consider the assistive tools and methods they use. This section provides information to help you better understand and address the needs of these <a href="https://a11yproject.com/posts/myth-accessibility-m-blind-people/">different user groups</a>.</p>\n<p>Note: It’s possible for a user to fall into more than one group, or to use tools and devices designed for a different user group. One of the greatest benefits of an inclusive design practice is that methods designed for a specific user group will often provide benefits to everyone.</p>\n<h3 id="no-vision"><a href="#no-vision" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>No Vision</h3>\n<p>Users with no vision rely on screen readers to access web sites and applications. Often, screen reader users will navigate a page by browsing specific elements, like headers, links, or form elements. Use semantic elements and check that labels are meaningful when pulled out of context.</p>\n<h3 id="low-vision"><a href="#low-vision" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Low Vision</h3>\n<p>Users with low vision can have different needs depending on the nature of their visual impairment. Users may have difficulty with color differentiation, blurriness, or lack of vision in central or peripheral areas. These needs mean that interfaces should not rely on color to communicate information, palettes need to have sufficient contrast, and layouts should be responsive when font sizes are increased.</p>\n<h3 id="motor"><a href="#motor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Motor</h3>\n<p>Users with poor motor control can use a range of devices to access contents. Users who rely on a keyboard need elements that are keyboard accessible and highly visible when in focus. Users who rely on a mouse or touch need target areas that are large enough to be hit easily.</p>\n<h3 id="cognitive"><a href="#cognitive" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Cognitive</h3>\n<p>Users who have difficulty processing information benefit from well-written content. Information should clear, concise, and easy to scan. Consider visual hierarchy, chunk content into short, related sections, and avoid long paragraphs.</p>\n<h2 id="designing-and-developing-for-accessibility"><a href="#designing-and-developing-for-accessibility" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Designing and Developing for Accessibility</h2>\n<p>Our goal is to meet <a href="https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&#x26;levels=aaa">level AA in the Web Content Accessibility Guidelines 2.1</a>. To help you get started, the following sections break some of these down by area of focus.</p>\n<h2 id="checklists"><a href="#checklists" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Checklists</h2>\n<h3 id="what-patternfly-should-address"><a href="#what-patternfly-should-address" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What PatternFly Should Address</h3>\n<p>If you use PatternFly, or contribute to PatternFly as a designer or developer, these are the items that are expected to be covered in PatternFly:</p>\n<table>\n<thead>\n<tr>\n<th>Guideline</th>\n<th>Link</th>\n<th></th>\n<th></th>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Semantic html structures are used to accurately communicate purpose and relationship of UI elements</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships">WCAG 1.3.1</a></td>\n<td><code>design</code></td>\n<td><code>html</code></td>\n<td><code>css</code></td>\n<td></td>\n</tr>\n<tr>\n<td>Color is not the only method of communication. Providing meaning through color is supplementary to providing meaning with text</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#use-of-color">WCAG 1.4.1</a></td>\n<td><code>design</code></td>\n<td><code>html</code></td>\n<td><code>css</code></td>\n<td></td>\n</tr>\n<tr>\n<td>Colors used provide sufficient contrast</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum">WCAG 1.4.3</a>\n and \n<a href="https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast">1.4.11</a></td>\n<td></td>\n<td></td>\n<td><code>css</code></td>\n<td></td>\n</tr>\n<tr>\n<td>Font sizes can scale up to 200% without loss of content or functionality, and up to 400% without needing to scroll in more than one direction.</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#resize-text">WCAG 1.4.4</a>\n and \n<a href="https://www.w3.org/WAI/WCAG21/quickref/#reflow">1.4.10</a></td>\n<td></td>\n<td></td>\n<td><code>css</code></td>\n<td></td>\n</tr>\n<tr>\n<td>Styles that affect text spacing (line height, space between paragraphs, letter spacing, and word spacing) can be increased without loss of content or functionality</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#text-spacing">WCAG 1.4.12</a></td>\n<td></td>\n<td></td>\n<td><code>css</code></td>\n<td></td>\n</tr>\n<tr>\n<td>Contents that appear on hover and focus are dismissable, hoverable, and persistent</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#content-on-hover-or-focus">WCAG 1.4.13</a></td>\n<td></td>\n<td><code>html</code></td>\n<td><code>css</code></td>\n<td><code>js</code></td>\n</tr>\n<tr>\n<td>All functionality is keyboard accessible</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#keyboard">WCAG 2.1.1</a>\n and \n<a href="https://www.w3.org/WAI/WCAG21/quickref/#no-keyboard-trap">2.1.2</a></td>\n<td></td>\n<td><code>html</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Order of elements in the HTML and in the layout follow a logical order</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#meaningful-sequence">WCAG 1.3.2</a>\n and \n<a href="https://www.w3.org/WAI/WCAG21/quickref/#focus-order">2.4.3</a></td>\n<td><code>design</code></td>\n<td><code>html</code></td>\n<td><code>css</code></td>\n<td></td>\n</tr>\n<tr>\n<td>Elements with focus are clearly visible</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#focus-visible">WCAG 2.4.7</a></td>\n<td></td>\n<td></td>\n<td><code>css</code></td>\n<td></td>\n</tr>\n<tr>\n<td>Flashing content</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=231#three-flashes-or-below-threshold">WCAG 2.3.1</a></td>\n<td></td>\n<td></td>\n<td><code>css</code></td>\n<td></td>\n</tr>\n<tr>\n<td>Functionality that uses complex gestures can also be operated with a single pointer without a path based gesture</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#pointer-gestures">WCAG 2.5.1</a></td>\n<td><code>design</code></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Pointer events can be cancelled</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#pointer-cancellation">WCAG 2.5.2</a></td>\n<td></td>\n<td></td>\n<td></td>\n<td><code>js</code></td>\n</tr>\n<tr>\n<td>Visible labels of UI components are either the same as the accessible name or used in the beginning of the accessible name</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#label-in-name">WCAG 2.5.3</a></td>\n<td></td>\n<td><code>html</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>The target area for clickable elements is at least 44 by 44 \n<a href="https://www.w3.org/TR/WCAG21/#dfn-css-pixels">CSS pixels</a></td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#target-size">WCAG 2.5.5 (AAA)</a>\n*</td>\n<td></td>\n<td></td>\n<td><code>css</code></td>\n<td></td>\n</tr>\n<tr>\n<td>An accessible name is provided for all elements</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#name-role-value">WCAG 4.1.2</a></td>\n<td><code>design</code></td>\n<td><code>html</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>Status messages can be programmatically determined through role or properties</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#status-messages">WCAG 4.1.3</a></td>\n<td></td>\n<td><code>html</code></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p>*WCAG 2.5.5 is included for reference only. This guideline suggests a size that is larger than what PatternFly requires.</p>\n<h3 id="what-products-should-address"><a href="#what-products-should-address" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What Products Should Address</h3>\n<p>If you consume PatternFly in your product, these are the items that are outside the scope of PatternFly, and should be addressed by the product developers and designers:</p>\n<table>\n<thead>\n<tr>\n<th>Guideline</th>\n<th>Link</th>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Skip to Main links</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks">WCAG 2.4.1</a></td>\n<td></td>\n<td><code>development</code></td>\n</tr>\n<tr>\n<td>Page Titles</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#page-titled">WCAG 2.4.2</a></td>\n<td></td>\n<td><code>development</code></td>\n</tr>\n<tr>\n<td>Links — If more than one link has the same label, it should also have the same url. Screen reader users can access the list of links that are on a page, which pulls the links out of context. If you have links with different URLs but the same label, then add additional text to provide context to the screen reader user.</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context">WCAG 2.4.4</a></td>\n<td><code>design</code></td>\n<td><code>development</code></td>\n</tr>\n<tr>\n<td>Landmarks — Use landmark roles to clearly identify regions that communicate page structure. If more than one landmark role occurs in the page, use aria-label to differentiate the landmark elements</td>\n<td><a href="https://www.w3.org/TR/WCAG20-TECHS/ARIA11.html">ARIA11</a></td>\n<td><code>design</code></td>\n<td><code>development</code></td>\n</tr>\n<tr>\n<td>Headings — Heading text should be descriptive. Correct heading levels should be used to communicate the outline of the page.</td>\n<td><a href="https://www.w3.org/WAI/WCAG21/quickref/#section-headings">WCAG 2.4.10</a>\n and \n<a href="https://www.w3.org/TR/WCAG20-TECHS/H42.html">H42</a></td>\n<td><code>design</code></td>\n<td><code>development</code></td>\n</tr>\n<tr>\n<td>Contents — Should be meaningful, clear, and concise</td>\n<td></td>\n<td><code>design</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h2 id="guidelines-and-references"><a href="#guidelines-and-references" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Guidelines and References</h2>\n<ul>\n<li><a href="https://www.w3.org/TR/WCAG21/">Web Content Accessibility Guidelines 2.1</a></li>\n<li><a href="https://webaim.org/standards/wcag/checklist">WebAIM\'s WCAG 2.0 Checklist</a></li>\n<li><a href="https://a11yproject.com/checklist">A11Y Project Checklist</a></li>\n</ul>\n<h3 id="patternfly-guidelines"><a href="#patternfly-guidelines" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>PatternFly Guidelines</h3>\n<p>These are guidelines that we have defined for PatternFly.</p>\n<h4 id="experience-parity"><a href="#experience-parity" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Experience Parity</h4>\n<ul>\n<li>There should be parity between the screen reader contents and visibly rendered contents (refer to the <a href="https://www.w3.org/TR/wai-aria/#aria-hidden">first Note for aria-hidden</a>).</li>\n<li>\n<p>There should be parity among all input types: touch, mouse, and keyboard.</p>\n<ul>\n<li>Don’t optimize the experience for one input type at the expense of another.</li>\n<li>Contents that a user can interact with using a mouse are also accessible using touch or keyboard.</li>\n<li>Don’t show interactive elements on hover. Interactive elements that can display in a popup must display on click/touch/Enter events.</li>\n</ul>\n</li>\n<li>\n<p>There should be parity between hover and focus events.</p>\n<ul>\n<li>Any information that’s available on hover for the mouse user should be available on focus for the keyboard-only user, and also available to the screen reader user using <code>aria-describedby</code> (refer to <a href="https://inclusive-components.design/tooltips-toggletips/">Tooltips &#x26; Toggletips example from Inclusive Components</a>).</li>\n</ul>\n</li>\n</ul>\n<h2 id="techniques"><a href="#techniques" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Techniques</h2>\n<p>The <a href="https://www.w3.org/TR/WCAG20-TECHS/Overview.html#contents">WCAG 2.0 techniques</a> provide examples on how to meet accessibility guidelines. Any techniques that are adopted as standard within PatternFly for handling specific patterns are included below.</p>\n<h3 id="labels-and-accessible-names"><a href="#labels-and-accessible-names" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Labels and Accessible Names</h3>\n<ul>\n<li>\n<h4 id="form-fields"><a href="#form-fields" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Form Fields</h4>\n<ul>\n<li>Use explicit linking between <code>label</code> and form input elements (e.g. <code>input</code>, <code>textarea</code>, or <code>select</code>) when both elements are present. Aside from providing an accessible name to screen readers, this method also increases the clickable area of the form element by making the label clickable, too. (<a href="https://www.w3.org/TR/WCAG20-TECHS/H44.html">H44</a>)</li>\n<li>\n<p>When a <code>label</code> element cannot accompany a form input element:</p>\n<ul>\n<li>Provide the label using <code>aria-label</code> or <code>aria-labelledby</code>. (<a href="https://www.w3.org/TR/WCAG20-TECHS/ARIA16.html">ARIA14</a>)</li>\n<li>In a single-field form, the submit button label can serve as the field label for sighted users (<a href="https://www.w3.org/TR/WCAG20-TECHS/general.html#G167">G167</a>) as well as assistive devices when using <code>aria-labelledby</code></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>\n<h4 id="landmark-roles"><a href="#landmark-roles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Landmark Roles</h4>\n<ul>\n<li>Screen reader users can navigate to sections of a page when <a href="https://www.w3.org/TR/wai-aria-1.1/#landmark_roles">landmark roles</a> are used. Whenever a landmark role is used more than once, provide a name using <code>aria-label</code> or <code>aria-labelledby</code> to provide context for that landmark. (<a href="https://www.w3.org/TR/WCAG20-TECHS/ARIA6.html">ARIA6</a>, <a href="https://www.w3.org/TR/WCAG20-TECHS/ARIA16.html">ARIA16</a>)</li>\n<li>While <a href="https://www.w3.org/TR/wai-aria-1.1/#toolbar"><code>toolbar</code></a> is not a landmark role, the same rule applies to this role.</li>\n</ul>\n</li>\n<li>\n<h4 id="icons"><a href="#icons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Icons</h4>\n<p>Icons can either be decorative or semantic. Icons are <strong>decorative</strong> if you can remove an icon without affecting the information that is presented on the page. Icons are <strong>semantic</strong> when they provide information that otherwise isn\'t present, such as indicating status, indicating type of alert message, or replacing text as button labels. When an icon is semantic, the meaning must be provided in alternative ways to the user. The following guidelines should be followed when using icons within PatternFly components.</p>\n<ul>\n<li>Add <code>aria-hidden="true"</code> for all icons, either to the icon element or a parent element of the icon. This renders the icon as something that assistive devices can ignore.</li>\n<li>\n<p>Additionally, for <strong>semantic</strong> icons:</p>\n<ul>\n<li>Add a label for the icon in tooltip text that displays on hover, and also on focus for focusable elements.</li>\n<li>\n<p>For interactive elements like <code>&#x3C;a></code> and <code>&#x3C;button></code> where an icon is used as the label instead of text, provide the label on the interactive element using <code>aria-label</code>. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-html"><code class="prism-language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Close Dialog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p>For non-interactive icons, include <code>pf-u-sr-only</code> text near the icon. Depending on the component, the <code>pf-u-sr-only</code> text might not be a direct sibling to the icon element. For example, in the Alert component, the icon label text is adjacent to the message. This way, when <code>role="alert"</code> is added to <code>.pf-c-alert__body</code> for dynamically displayed alerts, the type of message is announced along with the message text.</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-html"><code class="prism-language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pf-c-alert pf-m-success<span class="token punctuation">"</span></span> <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Success Notification<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pf-c-alert__icon<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fas fa-check-circle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pf-c-alert__body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pf-c-alert__title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>pf-u-sr-only<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Success: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> Success notification title\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="testing"><a href="#testing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Testing</h2>\n<p>Many accessibility issues can be found by doing a few simple checks:</p>\n<ol>\n<li>Use an accessibility audit tool to check for violations. If you are using PatternFly in your project, we recommend using <a href="https://www.deque.com/axe/">aXe: The Accessibility Engine</a> to check for accessibility violations. If you are contributing to PatternFly, refer to our <a href="https://github.com/patternfly/patternfly-next/blob/master/README.md#testing-for-accessibility">README.md</a> on how to run this tool.</li>\n<li>\n<p>Test keyboard accessibility, and check that these requirements are met:</p>\n<ul>\n<li>All functionality is keyboard accessible</li>\n<li>Order of elements in the HTML and in the layout follow a logical order</li>\n<li>Elements with focus are clearly visible</li>\n</ul>\n</li>\n<li>Disable styles, then test the information architecture and presence of adequate text labels. The <a href="https://wave.webaim.org/extension/">WAVE browser extension from WebAIM</a> provides this feature if it isn\'t available in the browser you are using. </li>\n<li>\n<p>Test with any screen reader available in your operating system. Screen readers that we target for testing PatternFly are:</p>\n<ul>\n<li>JAWS with Chrome, Windows (<a href="https://dequeuniversity.com/screenreaders/jaws-keyboard-shortcuts">keyboard shortcuts</a>)</li>\n<li>Voiceover with Safari, Mac (<a href="https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts">keyboard shortcuts</a>)</li>\n<li>NVDA with Firefox, Windows (<a href="https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts">keyboard shortcuts</a>)</li>\n</ul>\n</li>\n<li>\n<p>Check color contrast for:</p>\n<ul>\n<li>Text color against background color (<a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html">Understanding WCAG 1.4.3</a>)</li>\n<li>Text color against link color (<a href="https://www.w3.org/TR/WCAG20-TECHS/G183.html">Technique G183</a>)</li>\n<li>Visible boundaries of buttons and form elements against adjacent background color (<a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html">Understanding WCAG 1.4.11</a>)</li>\n</ul>\n</li>\n</ol>',
fields:{path:"/accessibility-guide",type:"page",contentType:"page"}}},pathContext:{pagePath:"/accessibility-guide",type:"page",contentType:"page"}}}});
//# sourceMappingURL=path---accessibility-guide-3a1527b0e25af74c2382.js.map