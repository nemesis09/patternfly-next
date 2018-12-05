webpackJsonp([0xf12688e99473],{942:function(e,t){e.exports="<h2 id=overview>Overview</h2> <p>Labels can be used in a variety of components and can adjust in font size to match that of the component it lives in. For example, labels can be used in tables. Specifically, the compact table has a modifier that adjusts its font size, so when using a label in this table, it&#39;s important to also add its respective modifier.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-c-label</code></td> <td><code>&lt;span&gt;</code></td> <td>Iniates a label.</td> </tr> <tr> <td><code>.pf-m-hover</code></td> <td><code>.pf-c-label</code></td> <td>Modifies label for a hover state.</td> </tr> <tr> <td><code>.pf-m-compact</code></td> <td><code>.pf-c-label</code></td> <td>Modifies label for a compact table.</td> </tr> </tbody> </table> "},943:function(e,t){e.exports=""},319:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Docs=void 0;var n=a(4),o=l(n),r=a(10),i=l(r),d=a(11),s=l(d),c=a(1245),u=l(c),f=a(747),p=l(f),b=a(943),m=l(b),h=a(942),v=l(h);a(1153);var g=t.Docs=v.default;t.default=function(){var e=(0,p.default)();return o.default.createElement(i.default,{docs:g},o.default.createElement(s.default,{heading:"Label Component",handlebars:u.default,docs:m.default},e))}},747:function(e,t,a){var l=a(1);e.exports=(l.default||l).template({1:function(e,t,a,l,n){return"  Default Label\n"},3:function(e,t,a,l,n){return"  Compact Label\n"},compiler:[7,">= 4.0.0"],main:function(e,t,l,n,o){var r;return(null!=(r=e.invokePartial(a(272),t,{name:"label",fn:e.program(1,o,0),inverse:e.noop,data:o,helpers:l,partials:n,decorators:e.decorators}))?r:"")+(null!=(r=e.invokePartial(a(272),t,{name:"label",hash:{"label--modifier":"pf-m-compact"},fn:e.program(3,o,0),inverse:e.noop,data:o,helpers:l,partials:n,decorators:e.decorators}))?r:"")+"\n"},usePartial:!0,useData:!0})},1245:function(e,t){e.exports='{{#> label}}\n  Default Label\n{{/label}}\n{{#> label label--modifier="pf-m-compact"}}\n  Compact Label\n{{/label}}\n\n'},272:function(e,t,a){var l=a(1);e.exports=(l.default||l).template({1:function(e,t,a,l,n){var o;return" "+e.escapeExpression((o=null!=(o=a["label--modifier"]||(null!=t?t["label--modifier"]:t))?o:a.helperMissing,"function"==typeof o?o.call(null!=t?t:e.nullContext||{},{name:"label--modifier",hash:{},data:n}):o))},3:function(e,t,a,l,n){var o,r;return"    "+(null!=(r=null!=(r=a["label--attribute"]||(null!=t?t["label--attribute"]:t))?r:a.helperMissing,o="function"==typeof r?r.call(null!=t?t:e.nullContext||{},{name:"label--attribute",hash:{},data:n}):r)?o:"")+"\n  "},compiler:[7,">= 4.0.0"],main:function(e,t,a,l,n){var o,r=null!=t?t:e.nullContext||{};return'<span class="pf-c-label'+(null!=(o=a.if.call(r,null!=t?t["label--modifier"]:t,{name:"if",hash:{},fn:e.program(1,n,0),inverse:e.noop,data:n}))?o:"")+'"\n'+(null!=(o=a.if.call(r,null!=t?t["label--attribute"]:t,{name:"if",hash:{},fn:e.program(3,n,0),inverse:e.noop,data:n}))?o:"")+">\n"+(null!=(o=e.invokePartial(l["@partial-block"],t,{name:"@partial-block",data:n,indent:"  ",helpers:a,partials:l,decorators:e.decorators}))?o:"")+"</span>\n"},usePartial:!0,useData:!0})},1153:function(e,t){}});
//# sourceMappingURL=component---src-patternfly-components-label-examples-index-js-7746e02f28f7d7aac3b7.js.map