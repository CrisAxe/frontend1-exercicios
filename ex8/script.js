class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <header class="navbar">
                <div class="logo">casa</div>
                <nav>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#products">Produtos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </header>
        `;
  }
}

customElements.define("my-navbar", MyNavbar);
