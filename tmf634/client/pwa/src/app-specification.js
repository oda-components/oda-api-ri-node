import {LitElement, html} from 'lit';
import {MDCRipple} from '@material/ripple';

class Specification extends LitElement {
	render() {
		return html`
			<link
					rel="stylesheet"
					href="bundle.css">
		`;
	}
}

customElements.define('app-specification', Specification);

