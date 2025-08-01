class ReadMore extends HTMLElement {
  constructor() {
    super();

    this.originalHTML = this.innerHTML;
    this.originalTextContent = this.textContent;
  }

  static get observedAttributes() {
    return ['limit', 'open'];
  }
  
  get less() {
    return this.getAttribute('less');
  }
  
  get more() {
    return this.getAttribute('more');
  }

  get limit() {
    return this.hasAttribute('limit') ? Number(this.getAttribute('limit')) : 10;
  }

  get isOpen() {
    return this.hasAttribute('open');
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }

  render() {
    if (this.textContent.length > this.limit) {

      if (!this.isOpen) {
        // Closed
        this.innerHTML = `
          <p>
            ${this.originalTextContent.trim().slice(0, this.limit)}&hellip;
            <button type="button">${this.more}</button>
          </p>
        `;
      } else {
        // Open
        this.innerHTML = this.originalHTML;
        this.querySelector('p:last-child').innerHTML = `
          ${this.querySelector('p:last-child').innerHTML}
          <button type="button">${this.less}</button>
        `;
      };

      this.querySelector('button')?.addEventListener('click', this.toggle.bind(this));
    }
  }

  toggle(event) {

    this.toggleAttribute('open');
  }
}

customElements.define('read-more', ReadMore);