import {LitElement, html} from 'lit';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCDrawer} from "@material/drawer/index";
import {MDCRipple} from '@material/ripple/index';

import packageJson from '../package.json'
const {name, description, version, license} = packageJson;

var drawer;

class LitApp extends LitElement {

	static properties = {};

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
			<div
					class="mdc-drawer-app-content mdc-top-app-bar--fixed-adjust">
				<app-main
						id="main-content"
						class="main-content">
				</app-main>
			</div>
		`;
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

