import {LitElement, html} from 'lit';
import {MDCRipple} from '@material/ripple';

class Catalog extends LitElement {
	render() {
		return html`
			<link
					rel="stylesheet"
					href="bundle.css">
		`;
	}
}

customElements.define('app-catalog', Catalog);

