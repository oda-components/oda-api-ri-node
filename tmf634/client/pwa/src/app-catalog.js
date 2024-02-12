import {LitElement, html} from 'lit';
import {MDCDataTable} from '@material/data-table';
import {MDCRipple} from '@material/ripple';

class Catalog extends LitElement {
	static properties = {};
	constructor() {
		super();
	}
	render() {
		return html`
			<link
					rel="stylesheet"
					href="bundle.css">
			<div
					class="mdc-data-table mdc-data-table--sticky-header"
					id="catalog-table">
				<div
						class="mdc-data-table__table-container">
					<table
							class="mdc-data-table__table"
							aria-label="Resource Catalog">
						<thead>
							<tr
									class="mdc-data-table__header-row">
								<th
										class="mdc-data-table__header-cell"
										role="columnheader" scope="col">
									Name
								</th>
								<th
										class="mdc-data-table__header-cell"
										role="columnheader"
										scope="col">
									Description
								</th>
								<th
										class="mdc-data-table__header-cell"
										role="columnheader"
										scope="col">
									Class
								</th>
								<th
										class="mdc-data-table__header-cell"
										role="columnheader"
										scope="col">
									Status
								</th>
								<th
										class="mdc-data-table__header-cell"
										role="columnheader"
										scope="col">
									Category
								</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		`;
	}
	firstUpdated() {
		const catalogTable = this.shadowRoot.getElementById('catalog-table');
		MDCDataTable.attachTo(catalogTable);
		MDCRipple.attachTo(catalogTable);
	}
}

customElements.define('app-catalog', Catalog);

