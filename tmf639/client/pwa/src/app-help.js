import {LitElement, html} from 'lit';
import {MDCList} from '@material/list';
import {MDCDialog} from '@material/dialog';
import {MDCRipple} from '@material/ripple';

import packageJson from '../package.json'
const {name, description, version, license} = packageJson;

class AppHelp extends LitElement {
	static properties = {};
	constructor() {
		super();
	}
	render() {
		return html`
			<link
					rel="stylesheet"
					href="bundle.css">
			<aside class="mdc-dialog" id="helpMenu">
				<div class="mdc-dialog__container">
					<div class="mdc-dialog__surface"
						role="dialog"
						aria-modal="true"
						aria-describedby="my-dialog-content">
						<h2 class="mdc-dialog__title" id="helpMenuLabel">
							Help
						</h2>
						<div class="mdc-dialog__content">
							<ul class="mdc-list">
								<li class="mdc-list-item" id="navigation" @click="${this._navigation}">
									<span class="mdc-list-item__graphic" aria-hidden="true">
									</span>
									<span class="mdc-list-item__text">Navigation</span>
								</li>
								<li class="mdc-list-item" id="specification" @click="${this._specification}">
									<span class="mdc-list-item__graphic" aria-hidden="true">
									</span>
									<span class="mdc-list-item__text">Specification</span>
								</li>
								<li class="mdc-list-item" id="dashboard" @click="${this._dashboard}">
									<span class="mdc-list-item__graphic" aria-hidden="true">
									</span>
									<span class="mdc-list-item__text">Dashboard</span>
								</li>
								<li class="mdc-list-item" id="catalog" @click="${this._catalog}">
									<span class="mdc-list-item__graphic" aria-hidden="true">
									</span>
									<span class="mdc-list-item__text">Catalog</span>
								</li>
								<li class="mdc-list-item" id="candidate" @click="${this._candidate}">
									<span class="mdc-list-item__graphic" aria-hidden="true">
									</span>
									<span class="mdc-list-item__text">Candidate</span>
								</li>
							</ul>
							<button
								class="mdc-icon-button material-icons">
								<svg
										@click="${this._closeHelp}">
										xmlns="http://www.w3.org/2000/svg"
										height="24"
										viewBox="0 -960 960 960"
										width="24"
										aria-hidden="true">
									<path
										d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div class="mdc-dialog__scrim"></div>
			</aside>
         <aside class="mdc-dialog" id="helpNavigation"
            role="alertdialog" aria-modal="true" aria-labelledby="helpNavigationLabel">
            <div class="mdc-dialog__container">
               <div class="mdc-dialog__surface">
                  <h2 class="mdc-dialog__title" id="helpNavigationLabel">Navigation</h2>
                  <div class="mdc-dialog__content">
                     <p>To Navigate firstly click 
							<svg
									class="mdc-button__icon"
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24"
									aria-hidden="true">
								<path
									d="M86-191v-126h788v126H86Zm0-226v-126h788v126H86Zm0-226v-126h788v126H86Z"/>
							</svg> icon it will toggle navigation menu with the contents of other pages</p>
                     <p>Secondly click
							<svg
									class="mdc-button__icon"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24">
								<path
									d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/>
							</svg> icon to refresh the pages</p> 
                     <p>Finally there is
							<svg
									class="mdc-button__icon"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24">
								<path
									d="M480.5-114q-39.5 0-67.5-27.906T385-209q0-39.6 27.906-67.8Q440.812-305 480-305q40 0 67.5 28.075t27.5 67.5Q575-170 547.5-142t-67 28Zm0-271q-39.5 0-67.5-27.906T385-480q0-40 27.906-67.5T480-575q40 0 67.5 27.5t27.5 67q0 39.5-27.5 67.5t-67 28Zm0-270q-39.5 0-67.5-28.283t-28-68Q385-791 412.906-818.5T480-846q40 0 67.5 27.5t27.5 67.217q0 39.717-27.5 68T480.5-655Z"/>
							</svg>icon Use that icon to get to know about and help</P>
                     <button
								class="mdc-icon-button material-icons">
								<svg
										@click="${this._closeNav}">
										xmlns="http://www.w3.org/2000/svg"
										height="24"
										viewBox="0 -960 960 960"
										width="24"
										aria-hidden="true">
									<path
										d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
								</svg>
                     </button>
                  </div>
               </div>
            </div>
            <div class="mdc-dialog__scrim"></div>
         </aside>
         <aside class="mdc-dialog" id="helpSpecification"
            role="alertdialog" aria-modal="true" aria-labelledby="helpSpecificationLabel">
            <div class="mdc-dialog__container">
               <div class="mdc-dialog__surface">
                  <h2 class="mdc-dialog__title" id="helpSpecificationLabel">Specification</h2>
                  <div class="mdc-dialog__content">
                     <p>To access the
							<svg
									class="material-icons mdc-button__icon mdc-list-item__graphic"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#000000">
								<path
										d="M0 0h24v24H0V0z"
										fill="none"/>
								<path
										d="M5,5h2v3h10V5h2v5h2V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14 c0,1.1,0.9,2,2,2h6v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z"/><polygon points="21,11.5 15.51,17 12.5,14 11,15.5 15.51,20 22.5,13"/>
							</svg>view, first open the navigation drawer by selecting its icon</p>
                     <button
								class="mdc-icon-button material-icons">
								<svg
										@click="${this._closeSpec}">
										xmlns="http://www.w3.org/2000/svg"
										height="24"
										viewBox="0 -960 960 960"
										width="24"
										aria-hidden="true">
									<path
										d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
								</svg>
                     </button>
                  </div>
               </div>
            </div>
            <div class="mdc-dialog__scrim"></div>
         </aside>
         <aside class="mdc-dialog" id="helpDash"
            role="alertdialog" aria-modal="true" aria-labelledby="helpDashLabel">
            <div class="mdc-dialog__container">
               <div class="mdc-dialog__surface">
                  <h2 class="mdc-dialog__title" id="helpDashLabel">Dashboard</h2>
                  <div class="mdc-dialog__content">
                     <p>Dashboard page is graphical representation. It has counter graph and uptime graph</p>
                     <button
								class="mdc-icon-button material-icons">
								<svg
										@click="${this._closeDash}">
										xmlns="http://www.w3.org/2000/svg"
										height="24"
										viewBox="0 -960 960 960"
										width="24"
										aria-hidden="true">
									<path
										d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
								</svg>
                     </button>
                  </div>
               </div>
            </div>
            <div class="mdc-dialog__scrim"></div>
         </aside>
         <aside class="mdc-dialog" id="helpCatalog"
            role="alertdialog" aria-modal="true" aria-labelledby="helpCatalogLabel">
            <div class="mdc-dialog__container">
               <div class="mdc-dialog__surface">
                  <h2 class="mdc-dialog__title" id="helpCatalogLabel">Catalog</h2>
                  <div class="mdc-dialog__content">
                     <p>To access the
							<svg
									class="material-icons mdc-button__icon mdc-list-item__graphic"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#000000">
								<path
										d="M0 0h24v24H0V0z"
										fill="none"/>
								<path
										d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"/>
							</svg>view, first open the navigation drawer by selecting its icon</p>
                     <button
								class="mdc-icon-button material-icons">
								<svg
										@click="${this._closeCat}">
										xmlns="http://www.w3.org/2000/svg"
										height="24"
										viewBox="0 -960 960 960"
										width="24"
										aria-hidden="true">
									<path
										d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
								</svg>
                     </button>
                  </div>
               </div>
            </div>
            <div class="mdc-dialog__scrim"></div>
         </aside>
         <aside class="mdc-dialog" id="helpCandidate"
            role="alertdialog" aria-modal="true" aria-labelledby="helpCandidateLabel">
            <div class="mdc-dialog__container">
               <div class="mdc-dialog__surface">
                  <h2 class="mdc-dialog__title" id="helpCandidateLabel">Inventory</h2>
                  <div class="mdc-dialog__content">
                     <p>In navigation menu select
							<svg
									class="material-icons mdc-button__icon mdc-list-item__graphic"
									class="mdc-button__icon"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									enable-background="new 0 0 24 24"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="#000000">
								<g>
										<rect
											fill="none"
											height="24"
											width="24"/>
								</g>
								<g>
									<g>
										<path
												d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"/>
									</g>
								</g>
							</svg>view to get details of inventory</p>
                     <button
								class="mdc-icon-button material-icons">
								<svg
										@click="${this._closeCan}">
										xmlns="http://www.w3.org/2000/svg"
										height="24"
										viewBox="0 -960 960 960"
										width="24"
										aria-hidden="true">
									<path
										d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
								</svg>
                     </button>
                  </div>
               </div>
            </div>
            <div class="mdc-dialog__scrim"></div>
         </aside>
		`;
	}

	firstUpdated() {
	}

   _navigation(event) {
      var helpNavigation = this.shadowRoot.getElementById('helpNavigation');
      var helpNavDialog = MDCDialog.attachTo(helpNavigation);
		helpNavigation.classList.remove("visually-hidden");
      helpNavDialog.open();
   }

   _specification(event) {
      var helpSpecification = this.shadowRoot.getElementById('helpSpecification');
      var helpSpecDialog = MDCDialog.attachTo(helpSpecification);
		helpSpecification.classList.remove("visually-hidden");
      helpSpecDialog.open();
   }

   _dashboard(event) {
      var helpDashboard = this.shadowRoot.getElementById('helpDash');
      var helpDashDialog = MDCDialog.attachTo(helpDashboard);
		helpDashboard.classList.remove("visually-hidden");
      helpDashDialog.open();
   }

   _catalog(event) {
      var helpCatalog = this.shadowRoot.getElementById('helpCatalog');
      var helpCatDialog = MDCDialog.attachTo(helpCatalog);
		helpCatalog.classList.remove("visually-hidden");
      helpCatDialog.open();
   }

   _candidate(event) {
      var helpCandidate = this.shadowRoot.getElementById('helpCandidate');
      var helpCanDialog = MDCDialog.attachTo(helpCandidate);
		helpCandidate.classList.remove("visually-hidden");
      helpCanDialog.open();
   }

   _closeNav(event) {
      var closeNavigation = this.shadowRoot.getElementById('helpNavigation');
      var closeNavDialog = MDCDialog.attachTo(closeNavigation);
		closeNavigation.classList.add("visually-hidden");
   }

   _closeSpec(event) {
      var closeSpecification = this.shadowRoot.getElementById('helpSpecification');
      var closeSpecDialog = MDCDialog.attachTo(closeSpecification);
		closeSpecification.classList.add("visually-hidden");
   }

   _closeDash(event) {
      var closeDashboard = this.shadowRoot.getElementById('helpDash');
      var closeDashDialog = MDCDialog.attachTo(closeDashboard);
		closeDashboard.classList.add("visually-hidden");
   }

   _closeCat(event) {
      var closeCatalog = this.shadowRoot.getElementById('helpCatalog');
      var closeCatDialog = MDCDialog.attachTo(closeCatalog);
		closeCatalog.classList.add("visually-hidden");
   }

   _closeCan(event) {
      var helpCandidate = this.shadowRoot.getElementById('helpCandidate');
      var helpCanDialog = MDCDialog.attachTo(helpCandidate);
		helpCandidate.classList.add("visually-hidden");
   }

   _closeHelp() {
      var closeMenuObj = this.shadowRoot.getElementById('helpMenu');
      var closehelp = MDCDialog.attachTo(closeMenuObj);
		closeMenuObj.classList.add("visually-hidden");
   }
}

customElements.define('app-help', AppHelp);

