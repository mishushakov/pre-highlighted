class PreHighlighted extends HTMLPreElement {
  constructor() {
    super()
    this.lang = this.getAttribute('lang') || 'html'
    this.theme = this.getAttribute('theme') || 'nord'
    this.code = unescape(this.innerHTML)

    if (!this.firstChild) {
      const placeholder = document.createTextNode('<empty>')
      this.appendChild(placeholder)
    }
  }

  async connectedCallback () {
    if (window.shiki === undefined) {
      console.error('Element could not be rendered. Shiki library is not loaded into DOM')
      return
    } else {
      const highlighter = await window.shiki.getHighlighter({theme: this.theme})
      const shim = document.createElement('div')
      shim.innerHTML = await highlighter.codeToHtml(this.code, this.lang)
      this.setAttribute('style', shim.firstChild.getAttribute('style'))
      this.replaceChild(shim.firstChild.firstChild, this.firstChild)
    }
  }
}

customElements.define('pre-highlighted', PreHighlighted, { extends: 'pre' })
