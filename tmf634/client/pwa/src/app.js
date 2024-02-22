import {LitElement, html} from 'lit';
import {Router} from '@lit-labs/router';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCDrawer} from "@material/drawer/index";
import {MDCRipple} from '@material/ripple/index';
import {MDCList} from '@material/list';
import {MDCDialog} from '@material/dialog';

import './app-help';

import packageJson from '../package.json'
const {name, description, version, license} = packageJson;

var drawer;

class LitApp extends LitElement {

	static properties = {};

	#router = new Router(this, [
		{
				path: '/',
				enter: async (params) => {
				await import('./app-dashboard.js');
				drawer.open = false;
			},
				render: () => html`
				<app-dashboard
					id="app-dashboard">
				</app-dashboard>
			`
		},
		{
				path: '/specification',
				enter: async (params) => {
				await import('./app-specification.js');
				drawer.open = false;
			},
				render: () => html`
				<app-specification
					id="app-specification">
				</app-specification>
			`
		},
		{
				path: '/catalog',
				enter: async (params) => {
				await import('./app-catalog.js');
				drawer.open = false;
			},
				render: () => html`
				<app-catalog
					id="app-catalog">
				</app-catalog>
			`
		},
		{
				path: '/candidate',
				enter: async (params) => {
				await import('./app-candidate.js');
				drawer.open = false;
			},
				render: () => html`
				<app-candidate
					id="app-candidate">
				</app-candidate>
			`
		},
	]);

	constructor() {
		super();
	}
		
	render() {
		return html`
			<link
					rel="stylesheet"
					href="bundle.css">
			<header
					class="mdc-top-app-bar app-bar"
					id="app-bar">
				<div
						class="mdc-top-app-bar__row">
					<section
							class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
						<button
								class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button"
								aria-label="Open navigation menu">
							<svg
									class="mdc-button__icon"
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24"
									aria-hidden="true">
								<path
										d="M86-191v-126h788v126H86Zm0-226v-126h788v126H86Zm0-226v-126h788v126H86Z"/>
							</svg>
						</button>
						<span
								class="mdc-top-app-bar__title">
							${description}
						</span>
					</section>
					<section
							role="toolbar"
							class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
						<button
								class="material-icons mdc-top-app-bar__action-item mdc-icon-button"
								aria-label="refresh"
								@click="${this._refresh}">
							<svg
									class="mdc-button__icon"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24">
								<path
										d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/>
							</svg>
						</button>
						<button
								class="material-icons mdc-top-app-bar__action-item mdc-icon-button"
								aria-label="Options"
								@click="${this._overFlowMenu}">
							<svg
									class="mdc-button__icon"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									height="24"
									viewBox="0 -960 960 960"
									width="24">
								<path
										d="M480.5-114q-39.5 0-67.5-27.906T385-209q0-39.6 27.906-67.8Q440.812-305 480-305q40 0 67.5 28.075t27.5 67.5Q575-170 547.5-142t-67 28Zm0-271q-39.5 0-67.5-27.906T385-480q0-40 27.906-67.5T480-575q40 0 67.5 27.5t27.5 67q0 39.5-27.5 67.5t-67 28Zm0-270q-39.5 0-67.5-28.283t-28-68Q385-791 412.906-818.5T480-846q40 0 67.5 27.5t27.5 67.217q0 39.717-27.5 68T480.5-655Z"/>
							</svg>
						</button>
					</section>
				</div>
			</header>
			<aside
					id="nav-drawer"
					class="mdc-drawer mdc-drawer--dismissible mdc-top-app-bar--fixed-adjust">
				<div
						class="mdc-drawer__content">
					<nav
							class="mdc-list">
						<a
								class="mdc-list-item mdc-list-item--activated"
								href="/"
								aria-current="page">
							<span
									class="mdc-list-item__ripple">
							</span>
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
										d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"/>
							</svg>
							<span
									class="mdc-list-item__text">
								Dashboard
							</span>
						</a>
						<a
								class="mdc-list-item"
								href="/specification">
							<span
									class="mdc-list-item__ripple">
							</span>
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
												d="M5,5h2v3h10V5h2v5h2V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14 c0,1.1,0.9,2,2,2h6v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z"/><polygon points="21,11.5 15.51,17 12.5,14 11,15.5 15.51,20 22.5,13"/>
									</g>
								</g>
							</svg>
							<span
									class="mdc-list-item__text">
								Specification
							</span>
						</a>
						<a
								class="mdc-list-item"
								href="/catalog">
							<span
									class="mdc-list-item__ripple">
							</span>
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
							</svg>
							<span
									class="mdc-list-item__text">
								Catalog
							</span>
						</a>
						<a
								class="mdc-list-item"
								href="/candidate">
							<span
									class="mdc-list-item__ripple">
							</span>
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
							</svg>
							<span
									class="mdc-list-item__text">
								Candidate
							</span>
						</a>
					</nav>
				</div>
			</aside>
			<aside class="mdc-dialog" id="overflowDialog">
				<div class="mdc-dialog__surface"
					id="overflowSurface"
					role="dialog"
					aria-modal="true"
					aria-describedby="my-dialog-content"
					tabindex="-1">
					<div class="mdc-dialog__container">
						<div class="mdc-dialog__content" id="my-dialog-content">
							<ul class="mdc-list mdc-list--avatar-list">
								 <li class="mdc-list-item mdc-dialog--open" @click="${this._handleContactUs}">
									<span class="mdc-list-item__ripple"></span>
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
												d="M0,0h24v24H0V0z" fill="none"/><path d="M12,7V3H2v18h20V7H12z M6,19H4v-2h2V19z M6,15H4v-2h2V15z M6,11H4V9h2V11z M6,7H4V5h2V7z M10,19H8v-2h2V19z M10,15H8v-2h2 V15z M10,11H8V9h2V11z M10,7H8V5h2V7z M20,19h-8v-2h2v-2h-2v-2h2v-2h-2V9h8V19z M18,11h-2v2h2V11z M18,15h-2v2h2V15z"/>
									</svg>
<span class="mdc-list-item__text">Contact Us </span>
									<svg
											id="arowUp"
											class="material-icons mdc-button__icon mdc-list-item__graphic"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											height="24px"
											viewBox="0 0 24 24"
											width="24px"
											fill="#000000"
											display="block">
										<path
												d="M0 0h24v24H0V0z"
												fill="none"/>
										<path
													d="M0 0h24v24H0z" fill="none"/><path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
									</svg>
									<svg
											id="arowDown"
											class="material-icons mdc-button__icon mdc-list-item__graphic"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											height="24px"
											viewBox="0 0 24 24"
											width="24px"
											fill="#000000"
											display="none">
										<path
												d="M0 0h24v24H0V0z"
												fill="none"/>
										<path
												d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
									</svg>
								</li>
								<li class="collapse" id="call">
									<span class="mdc-list-item__ripple"></span>
									<span class="mdc-list-item__tel">
										<a href="tel:+639208370397">+639208370397</a>
									</span>
								</li>
								<li class="mdc-list-item">
									<svg
											class="material-icons mdc-button__icon mdc-list-item__graphic"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											height="24px"
											viewBox="0 0 24 24"
											width="24px"
											fill="#000000">
										<path
												d="M0 0h24v24H0z"
												fill="none"/>
										<path
												d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>
									</svg>
									<span class="mdc-list-item__text">
										<a target="_blank"
											href="https://sigscale.atlassian.net/secure/CreateIssue!default.jspa?pid=10100&issuetype=10000">
												Send Feedback
										</a>
									</span>
								</li>
								<li class="mdc-list-item" tabindex="0">
									<svg
											class="material-icons mdc-button__icon mdc-list-item__graphic"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											height="24px"
											viewBox="0 0 24 24"
											width="24px"
											fill="#000000">
										<path
												d="M0 0h24v24H0z"
												fill="none"/>
										<path
												d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
									</svg>
									<span class="mdc-list-item__text">
										<a target="_blank" href="/doc/index.html">
											API Docs
										</a>
									</span>
								</li>
								<li class="mdc-list-item" @click="${this._handleHelp}">
									<svg
											class="material-icons mdc-button__icon mdc-list-item__graphic"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											height="24px"
											viewBox="0 0 24 24"
											width="24px"
											fill="#000000">
										<path
												d="M0 0h24v24H0z"
												fill="none"/>
										<path
												d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
									</svg>
									<span class="mdc-list-item__text">Help</span>
								</li>
								<li class="mdc-list-item" tabindex="0" @click="${this._about}">
									<svg
											class="material-icons mdc-button__icon mdc-list-item__graphic"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											height="24px"
											viewBox="0 0 24 24"
											width="24px"
											fill="#000000">
										<path
												d="M0 0h24v24H0z"
												fill="none"/>
										<path
												d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
									</svg>
									<span class="mdc-list-item__text">About</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="mdc-dialog__scrim"></div>
			</aside>
			<aside class="mdc-dialog" id="helpabout"
				role="alertdialog" aria-modal="true" aria-labelledby="helpAboutLabel">
				<div class="mdc-dialog__container">
					<div class="mdc-dialog__surface">
						<h2 class="mdc-dialog__title" id="helpAboutLabel">About</h2>
							<div class="mdc-dialog__content">
								<p>${description}<br>
								${name} ${version}<br>
								Copyright 2023 - 2024 SigScale Global Inc.<br>
								${license}<br></p>
								<a target="_blank" href="http://www.sigscale.org">www.sigscale.org</a></p>
								<button
									class="mdc-icon-button material-icons">
									<svg
											@click="${this._closeAbout}">
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
			<div
					class="mdc-drawer-app-content mdc-top-app-bar--fixed-adjust">
				<app-main
						id="main-content"
						class="main-content">
					${this.#router.outlet()}
				</app-main>
			</div>
			<!--Modal Definitions-->
			<app-help id="appHelp"></app-help>
		`;
	}

	_refresh() {
		switch(this.shadowRoot.getElementById('main-content').children[0].id) {
			case 'app-dashboard':
				this.shadowRoot.getElementById('app-dashboard').reload();
				break;
			case 'app-catalog':
				this.shadowRoot.getElementById('app-catalog').reload();
				break;
			case 'app-candidate':
				this.shadowRoot.getElementById('app-candidate').reload();
				break;
			case 'app-specification':
				this.shadowRoot.getElementById('app-specification').reload();
				break;
		}
	}

	_overFlowMenu() {
		const dialogElement = this.shadowRoot.getElementById('overflowDialog');
		const dialog = MDCDialog.attachTo(dialogElement);
		dialog.open();
	}

	_about() {
		var helpAbout = this.shadowRoot.getElementById('helpabout');
		var helpAboDialog = MDCDialog.attachTo(helpAbout);
		helpAbout.classList.remove("visually-hidden");
		helpAboDialog.open();
	}

	_closeAbout() {
		var closeAbout = this.shadowRoot.getElementById('helpabout');
		var closeAboDialog = MDCDialog.attachTo(closeAbout);
		closeAbout.classList.add("visually-hidden");
	}

	_handleHelp(event) {
		var helpMenuObj = document.querySelector('lit-app').shadowRoot.getElementById('appHelp').shadowRoot.getElementById('helpMenu');;
		var helpDialog = MDCDialog.attachTo(helpMenuObj);
		var dialogElement = this.shadowRoot.getElementById('overflowDialog');
		var dialog = MDCDialog.attachTo(dialogElement);
		if(helpDialog.open()) {
			dialog.close();
		} else {
			helpDialog.open();
			helpMenuObj.classList.remove("visually-hidden");
		}
	}

	_handleContactUs(event) {
		var arrowUp = this.shadowRoot.getElementById('arowUp');
		var arrowDown = this.shadowRoot.getElementById('arowDown');
		if (arrowUp.style.display !== 'none') {
			arrowUp.style.display = 'none';
			arrowDown.style.display = 'block'; // Display the second icon
		} else {
			arrowUp.style.display = 'block'; // Display the first icon
			arrowDown.style.display = 'none';
		}
		var element = this.shadowRoot.getElementById('call');
		if(element.style.display == "flex") {
			element.style.display = "none";
		} else {
			element.style.display = "flex";
		}
	}

	firstUpdated() {
		const topAppBarElement = this.shadowRoot.getElementById('app-bar');
		MDCRipple.attachTo(topAppBarElement);
		const topAppBar = MDCTopAppBar.attachTo(topAppBarElement);
		const drawerElement = this.shadowRoot.getElementById('nav-drawer');
		drawer = MDCDrawer.attachTo(drawerElement);
		const mainContentElement = this.shadowRoot.getElementById('main-content');
		topAppBar.setScrollTarget(mainContentElement);
		topAppBar.listen('MDCTopAppBar:nav', () => {
			drawer.open = !drawer.open;
		});
	}
}

customElements.define('lit-app', LitApp);

