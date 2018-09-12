webpackJsonp([93835562911203],{718:function(e,d){e.exports="<h2 id=overview>Overview</h2> <p>The dropdown menu can contain either links or buttons, depending on the expected behavior when clicking the menu item. If you are using the menu item to navigate to another page, then menu item is a link. Otherwise, use a button for the menu item.</p> <h2 id=accessibility>Accessibility</h2> <table> <thead> <tr> <th>Attribute</th> <th>Applied</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>aria-haspopup=&quot;true&quot;</code></td> <td><code>.pf-c-dropdown__toggle</code></td> <td>Indicates the button has a popup menu.</td> </tr> <tr> <td><code>aria-expanded=&quot;false&quot;</code></td> <td><code>.pf-c-dropdown__toggle</code></td> <td>Indicates that the menu is hidden</td> </tr> <tr> <td><code>aria-expanded=&quot;true&quot;</code></td> <td><code>.pf-c-dropdown__toggle</code></td> <td>Indicates that the menu is visible</td> </tr> <tr> <td><code>aria-label=&quot;Actions&quot;</code></td> <td><code>.pf-c-dropdown__toggle</code></td> <td>Provides an accessible name for the dropdown when an icon is used instead of text. <strong>Required when icon is used with no supporting text</strong></td> </tr> <tr> <td><code>aria-hidden=&quot;true&quot;</code></td> <td><code>.pf-c-dropdown__toggle-icon</code></td> <td>Hides the icon from assistive technologies</td> </tr> <tr> <td><code>role=&quot;menu&quot;</code></td> <td><code>.pf-c-dropdown__menu</code></td> <td>Indicates that the menu is a menu</td> </tr> <tr> <td><code>hidden=&quot;hidden&quot;</code></td> <td><code>.pf-c-dropdown__menu</code></td> <td>Indicates that the menu is hidden so that it isn&#39;t visible in the UI and isn&#39;t accessed by assistive technologies</td> </tr> <tr> <td><code>aria-expanded=&quot;true&quot;</code></td> <td><code>.pf-c-dropdown__menu</code></td> <td>Indicates that the menu is visible</td> </tr> <tr> <td><code>role=&quot;menuitem&quot;</code></td> <td><code>.pf-c-dropdown__menu-item</code></td> <td>Indicates that the menu item is a menu item</td> </tr> <tr> <td><code>role=&quot;separator&quot;</code></td> <td><code>.pf-c-dropdown__separator</code></td> <td>Indicates that the separator is a separator</td> </tr> <tr> <td><code>disabled</code></td> <td><code>button.pf-c-dropdown__menu-item</code></td> <td>When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus</td> </tr> <tr> <td><code>aria-disabled=&quot;true&quot;</code></td> <td><code>a.pf-c-dropdown__menu-item</code></td> <td>When the menu item uses a link element, indicates that it is unavailable</td> </tr> <tr> <td><code>tabindex=&quot;-1&quot;</code></td> <td><code>a.pf-c-dropdown__menu-item</code></td> <td>When the menu item uses a link element, removes it from keyboard focus</td> </tr> </tbody> </table> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-dropdown</code></td> <td><code>&lt;div&gt;</code></td> <td>Defines the parent wrapper of the dropdown.</td> </tr> <tr> <td><code>.pf-c-dropdown__toggle</code></td> <td><code>&lt;button&gt;</code></td> <td>Defines the dropdown toggle</td> </tr> <tr> <td><code>.pf-c-dropdown__toggle-icon</code></td> <td><code>&lt;i&gt;</code></td> <td>Defines the dropdown toggle icon</td> </tr> <tr> <td><code>.pf-c-dropdown__menu</code></td> <td><code>&lt;div&gt;</code></td> <td>Defines the parent wrapper of the menu items</td> </tr> <tr> <td><code>.pf-c-dropdown__menu-item</code></td> <td><code>&lt;a&gt;</code></td> <td>Defines a menu item that navigates to another page</td> </tr> <tr> <td><code>.pf-c-dropdown__menu-item</code></td> <td><code>&lt;button&gt;</code></td> <td>Defines a menu item that performs an action on the current page</td> </tr> <tr> <td><code>.pf-c-dropdown__separator</code></td> <td><code>&lt;div&gt;</code></td> <td>Defines a separator within the menu</td> </tr> <tr> <td><code>.pf-m-expanded</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies for the expanded state</td> </tr> <tr> <td><code>.pf-m-plain</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies to display the toggle with no border or background</td> </tr> <tr> <td><code>.pf-m-top</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies to display the menu above the toggle</td> </tr> <tr> <td><code>.pf-m-align-right</code></td> <td><code>.pf-c-dropdown</code></td> <td>Modifies to display the menu aligned to the right edge of the toggle</td> </tr> <tr> <td><code>.pf-m-hover</code></td> <td><code>.pf-c-dropdown__menu-item</code>, <code>.pf-c-dropdown__toggle</code></td> <td>Forces display of the hover state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the <code>:hover</code> pseudo-class.</td> </tr> <tr> <td><code>.pf-m-focus</code></td> <td><code>.pf-c-dropdown__menu-item</code></td> <td>Forces display of the focus state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the <code>:focus</code> pseudo-class.</td> </tr> <tr> <td><code>.pf-m-active</code></td> <td><code>.pf-c-dropdown__toggle</code></td> <td>Forces display of the active state of the element. This state is primarily for demonstration purposes and would not normally be used in lieu of the <code>:active</code> pseudo-class.</td> </tr> <tr> <td><code>.pf-m-disabled</code></td> <td><code>a.pf-c-dropdown__menu-item</code></td> <td>Modifies to display the menu item as disabled. This applies to <code>a.pf-c-dropdown__menu-item</code> and should not be used in lieu of the <code>:disabled</code> attribute on <code>button.pf-c-dropdown__menu-item</code></td> </tr> </tbody> </table> "},581:function(e,d,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,d,t,o,n){return"  Right\n"},compiler:[7,">= 4.0.0"],main:function(e,d,o,n,r){var a;return null!=(a=e.invokePartial(t(33),d,{name:"dropdown",hash:{"pf-c-dropdown--HasToggleIcon":"true","pf-c-dropdown--Modifier":"pf-m-align-right","pf-c-dropdown--IsExpanded":"true",id:"dropdown-example-rightAligned"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:o,partials:n,decorators:e.decorators}))?a:""},usePartial:!0,useData:!0})},940:function(e,d){e.exports='{{#> dropdown id="dropdown-example-rightAligned" pf-c-dropdown--IsExpanded="true" pf-c-dropdown--Modifier="pf-m-align-right" pf-c-dropdown--HasToggleIcon="true"}}\n  Right\n{{/dropdown}}\n'},582:function(e,d,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,d,t,o,n){return"  Collapsed Dropdown\n"},compiler:[7,">= 4.0.0"],main:function(e,d,o,n,r){var a;return null!=(a=e.invokePartial(t(33),d,{name:"dropdown",hash:{"pf-c-dropdown--HasToggleIcon":"true",id:"dropdown-example-collapsed"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:o,partials:n,decorators:e.decorators}))?a:""},usePartial:!0,useData:!0})},941:function(e,d){e.exports='{{#> dropdown id="dropdown-example-collapsed" pf-c-dropdown--HasToggleIcon="true"}}\n  Collapsed Dropdown\n{{/dropdown}}\n'},583:function(e,d,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,d,t,o,n){return"  Expanded Dropdown\n"},compiler:[7,">= 4.0.0"],main:function(e,d,o,n,r){var a;return null!=(a=e.invokePartial(t(33),d,{name:"dropdown",hash:{"pf-c-dropdown--HasToggleIcon":"true","pf-c-dropdown--IsExpanded":"true",id:"dropdown-example-expanded"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:o,partials:n,decorators:e.decorators}))?a:""},usePartial:!0,useData:!0})},942:function(e,d){e.exports='{{#> dropdown id="dropdown-example-expanded" pf-c-dropdown--IsExpanded="true" pf-c-dropdown--HasToggleIcon="true"}}\n  Expanded Dropdown\n{{/dropdown}}\n'},584:function(e,d,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,d,t,o,n){return""},compiler:[7,">= 4.0.0"],main:function(e,d,o,n,r){var a;return null!=(a=e.invokePartial(t(33),d,{name:"dropdown",hash:{"aria-label":"Actions","pf-c-dropdown__kebab-icon":"true","pf-c-dropdown--Modifier":"pf-m-plain pf-m-align-right","pf-c-dropdown--IsExpanded":"true",id:"dropdown-example-kebab"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:o,partials:n,decorators:e.decorators}))?a:""},usePartial:!0,useData:!0})},943:function(e,d){e.exports='{{#> dropdown id="dropdown-example-kebab" pf-c-dropdown--IsExpanded="true" pf-c-dropdown--Modifier="pf-m-plain pf-m-align-right" pf-c-dropdown__kebab-icon="true" aria-label="Actions"}}\n{{/dropdown}}\n'},585:function(e,d,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,d,t,o,n){return""},compiler:[7,">= 4.0.0"],main:function(e,d,o,n,r){var a;return null!=(a=e.invokePartial(t(33),d,{name:"dropdown",hash:{"aria-label":"Actions","pf-c-dropdown__kebab-icon":"true","pf-c-dropdown--Modifier":"pf-m-plain","pf-c-dropdown--IsExpanded":"true",id:"dropdown-example-kebab"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:o,partials:n,decorators:e.decorators}))?a:""},usePartial:!0,useData:!0})},944:function(e,d){e.exports='{{#> dropdown id="dropdown-example-kebab" pf-c-dropdown--IsExpanded="true" pf-c-dropdown--Modifier="pf-m-plain" pf-c-dropdown__kebab-icon="true" aria-label="Actions"}}{{/dropdown}}'},945:function(e,d){e.exports='{{#> dropdown id="dropdown-example-top-collapsed" pf-c-dropdown--Modifier="pf-m-top" pf-c-dropdown--HasToggleIcon="true"}}\n  Top\n{{/dropdown}}\n{{#> dropdown id="dropdown-example-top-expanded" pf-c-dropdown--IsExpanded="true" pf-c-dropdown--HasToggleIcon="true" pf-c-dropdown--Modifier="pf-m-top"}}\n  Top\n{{/dropdown}}\n'},586:function(e,d,t){var o=t(1);e.exports=(o.default||o).template({1:function(e,d,t,o,n){return"  Top\n"},compiler:[7,">= 4.0.0"],main:function(e,d,o,n,r){var a;return(null!=(a=e.invokePartial(t(33),d,{name:"dropdown",hash:{"pf-c-dropdown--HasToggleIcon":"true","pf-c-dropdown--Modifier":"pf-m-top",id:"dropdown-example-top-collapsed"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:o,partials:n,decorators:e.decorators}))?a:"")+(null!=(a=e.invokePartial(t(33),d,{name:"dropdown",hash:{"pf-c-dropdown--Modifier":"pf-m-top","pf-c-dropdown--HasToggleIcon":"true","pf-c-dropdown--IsExpanded":"true",id:"dropdown-example-top-expanded"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:o,partials:n,decorators:e.decorators}))?a:"")},usePartial:!0,useData:!0})},254:function(e,d,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}d.__esModule=!0,d.Docs=void 0;var n=t(3),r=o(n),a=t(11),p=o(a),i=t(12),c=o(i),s=t(942),l=o(s),u=t(941),f=o(u),m=t(944),h=o(m),w=t(943),g=o(w),b=t(940),_=o(b),x=t(945),v=o(x),I=t(583),q=o(I),k=t(582),y=o(k),D=t(585),E=o(D),T=t(584),M=o(T),P=t(581),A=o(P),H=t(586),N=o(H),R=t(718),C=o(R);t(877);var O=d.Docs=C.default;d.default=function(){var e=(0,q.default)(),d=(0,y.default)(),t=(0,E.default)(),o=(0,M.default)(),n=(0,A.default)(),a=(0,N.default)(),i="Dropdown",s={height:"13em"};return r.default.createElement(p.default,{style:s,docs:O,heading:i},r.default.createElement(c.default,{className:"is-expanded-dropdown",heading:"Dropdown Expanded",handlebars:l.default},e),r.default.createElement(c.default,{heading:"Dropdown Collapsed",handlebars:f.default},d),r.default.createElement(c.default,{className:"is-expanded-dropdown",heading:"Kebab",handlebars:h.default},t),r.default.createElement(c.default,{className:"is-expanded-dropdown is-align-right",heading:"Kebab Align Right",handlebars:g.default},o),r.default.createElement(c.default,{className:"is-expanded-dropdown is-align-right",heading:"Align Right",handlebars:_.default},n),r.default.createElement(c.default,{className:"is-expanded-top",heading:"Top",handlebars:v.default},a))}},877:function(e,d){}});
//# sourceMappingURL=component---src-patternfly-components-dropdown-examples-index-js-68db8448a8c1ff5de07d.js.map