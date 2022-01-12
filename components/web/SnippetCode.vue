<template>
  <pre><code class="language-html"><slot /></code></pre>
</template>

<script>
import Prism from 'prismjs'

export default {
  mounted () {
    Prism.highlightAll()
  }
}
</script>

<style>
/*
Name: Duotone Space
Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-space-dark.css)
Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
*/

code[class*="language-"],
pre[class*="language-"] {
  font-family: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace;
  font-size: 14px;
  line-height: 1.375;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  tab-size: 4;
  hyphens: none;
  border: 0;
  color: var(--gray-300);
  background: var(--gray-1000);
}

pre > code[class*="language-"] {
  font-size: 1em;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
  text-shadow: none;
  background: #6610f2;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
  text-shadow: none;
  background: #6610f2;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1.5em;
  overflow: auto;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: var(--text-muted);
}

.token.punctuation {
  color: var(--gray-500);
}

.token.namespace {
  opacity: .7;
}

.token.tag,
.token.operator,
.token.number {
  color: var(--primary);
}

.token.property,
.token.function {
  color: var(--gray-800);
}

.token.tag-id,
.token.selector,
.token.atrule-id {
  color: var(--gray-100);
}

code.language-javascript,
.token.attr-name {
  color: var(--text-muted);
}

code.language-css,
code.language-scss,
.token.boolean,
.token.string,
.token.entity,
.token.url,
.language-css .token.string,
.language-scss .token.string,
.style .token.string,
.token.attr-value,
.token.keyword,
.token.control,
.token.directive,
.token.unit,
.token.statement,
.token.regex,
.token.atrule {
  color: #ffd10f;
}

.token.placeholder,
.token.variable {
  color: var(--gradient-primary-end);
}

.token.deleted {
  text-decoration: line-through;
}

.token.inserted {
  border-bottom: 1px dotted var(--gray-100);
  text-decoration: none;
}

.token.italic {
  font-style: italic;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.important {
  color: var(--gray-300);
}

.token.entity {
  cursor: help;
}

pre > code.highlight {
  outline: .4em solid #7676f4;
  outline-offset: .4em;
}

/* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
.line-numbers.line-numbers .line-numbers-rows {
  border-right-color: var(--gray-1000);
}

.line-numbers .line-numbers-rows > span:before {
  color: var(--gray-800);
}

/* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/
.line-highlight.line-highlight {
  background: rgba(221, 103, 44, 0.2);
  background: -webkit-linear-gradient(left, rgba(221, 103, 44, 0.2) 70%, rgba(221, 103, 44, 0));
  background: linear-gradient(to right, rgba(221, 103, 44, 0.2) 70%, rgba(221, 103, 44, 0));
}
</style>
