import { select, selectAll, append } from 'd3-selection';
import { arc, pie, line, curveLinear } from 'd3-shape';
import { scaleOrdinal, scaleLinear, scaleUtc } from 'd3-scale';
import { axisBottom, axisLeft, ticks, tickSizeOuter } from 'd3-axis';
import { min, mean, max, extent, group, InternSet, range } from 'd3-array';
import { transition } from 'd3-transition';
import {LitElement, html} from 'lit';
import {MDCRipple} from '@material/ripple';

class Dashboard extends LitElement {
	static properties = {};
	constructor() {
		super();
	}
	render() {
		return html`
			<link
					rel="stylesheet"
					href="bundle.css">
			<div id="count" class="app-card app-counter-card mdc-card">
				<div id="count" class="app-card-content mdc-card__content">
					<h6
							class="mdc-typography--headline6">
						Counters
					</h6>
					<svg
							class="mdc-card__media"
							viewBox="0,0,420,250">
					</svg>
				</div>
			</div>
		`;
	}

	firstUpdated() {
		document.querySelector('lit-app').shadowRoot.getElementById('app-dashboard')._healthChart();
	}

	_healthChart() {
		var ocsDash = document.querySelector('lit-app').shadowRoot.getElementById('app-dashboard');
		var root = ocsDash.shadowRoot;
		var svgCount = select(root).select("#count .app-card-content svg");
		var dashCounter1 = "107153947";
		var dashStatus1 = "200 Ok";
		var dashCounter2 = "603145";
		var dashStatus2 = "201 Created";
		var dashCounter3 = "3820";
		var dashStatus3 = "204 No Content";
		var dashCounter4 = "2054";
		var dashStatus4 = "400 Bad Request";
		var dashCounter5 = "127";
		var dashStatus5 = "404 Not Found";
		var dashCounter6 = "42";
		var dashStatus6 = "405 Method Not Allowed";
		var dashCounter7 = "1";
		var dashStatus7 = "500 Internal Server Error";
		ocsDash.draw_Count(svgCount, dashCounter1, dashStatus1, dashCounter2, dashStatus2, dashCounter3, dashStatus3, dashCounter4, dashStatus4, dashCounter5, dashStatus5, dashCounter6, dashStatus6, dashCounter7, dashStatus7);
	}

	draw_Count(svg, dashCounter1, dashStatus1, dashCounter2, dashStatus2, dashCounter3, dashStatus3, dashCounter4, dashStatus4, dashCounter5, dashStatus5, dashCounter6, dashStatus6, dashCounter7, dashStatus7) {
		var g1 = svg.append('g');
		var g2 = svg.append('g');
		var g3 = svg.append('g');
		var g4 = svg.append('g');
		var g5 = svg.append('g');
		var g6 = svg.append('g');
		var g7 = svg.append('g');
		g1.append('rect')
			.attr('width', '150')
			.attr('height', '28')
			.attr('x', 0)
			.attr('y', 0)
			.style('fill', 'rgb(138,192,0)');
		g1.append('text')
			.attr('x', '140')
			.attr('y', '22')
			.attr("text-anchor", "end")
			.text(dashCounter1)
			.style('fill', 'white')
			.attr("font-size", '18')
			.attr("font-family", "Roboto");
		g1.append('rect')
			.attr('width', '250')
			.attr('height', '28')
			.attr('x', 160)
			.attr('y', 0)
			.style('fill', 'rgb(138,192,0)');
		g1.append('text')
			.attr('x', '285')
			.attr('y', '22')
			.attr("text-anchor", "middle")
			.text(dashStatus1)
			.style('fill', 'white')
			.attr("font-size", '18')
			.attr("font-family", "Roboto");
	  g2.append('rect')
			.attr('width', '150')
			.attr('height', '28')
			.attr('x', 0)
			.attr('y', 32)
			.style('fill', 'rgb(138,192,0)');
		g2.append('text')
			.attr('x', '140')
			.attr('y', '54')
			.attr("text-anchor", "end")
			.text(dashCounter2)
			.style('fill', 'white')
			.attr("font-size", '18')
			.attr("font-family", "Roboto");
		g2.append('rect')
			.attr('width', '250')
			.attr('height', '28')
			.attr('x', 160)
			.attr('y', 32)
			.style('fill', 'rgb(138,192,0)');
		g2.append('text')
			.attr('x', '285')
			.attr('y', '54')
			.attr("text-anchor", "middle")
			.text(dashStatus2)
			.style('fill', 'white')
			.attr("font-size", '18')
			.attr("font-family", "Roboto");
		g3.append('rect')
			.attr('width', '150')
			.attr('height', '28')
			.attr('x', 0)
			.attr('y', 64)
			.style('fill', 'rgb(138,192,0)');
		g3.append('text')
			.attr('x', '140')
			.attr('y', '86')
			.attr("text-anchor", "end")
			.text(dashCounter3)
			.style('fill', 'white')
			.attr("font-size", '18')
			.attr("font-family", "Roboto");
		g3.append('rect')
			.attr('width', '250')
			.attr('height', '28')
			.attr('x', 160)
			.attr('y', 64)
			.style('fill', 'rgb(138,192,0)');
		g3.append('text')
			.attr('x', '285')
			.attr('y', '86')
			.attr("text-anchor", "middle")
			.text(dashStatus3)
			.style('fill', 'white')
			.attr("font-size", '18')
			.attr("font-family", "Roboto");
		g4.append('rect')
			.attr('width', '150')
			.attr('height', '28')
			.attr('x', 0)
			.attr('y', 96)
			.style('fill', 'rgb(255,176,76)');
		g4.append('text')
			.attr('x', '140')
			.attr('y', '118')
			.attr("text-anchor", "end")
			.text(dashCounter4)
			.style('fill', 'white')
			.attr("font-size", '18')
			.attr("font-family", "Roboto");
		g4.append('rect')
			.attr('width', '250')
			.attr('height', '28')
			.attr('x', 160)
			.attr('y', 96)
			.style('fill', 'rgb(255,176,76)');
		g4.append('text')
			.attr('x', '285')
			.attr('y', '118')
			.attr("text-anchor", "middle")
			.text(dashStatus4)
			.style('fill', 'white')
			.attr("font-size", '18')
			.attr("font-family", "Roboto");
		g5.append('rect')
			.attr('width', '150')
			.attr('height', '28')
			.attr('x', 0)
			.attr('y', 128)
			.style('fill', 'rgb(255,176,76)');
		g5.append('text')
			.attr('x', '140')
			.attr('y', '150')
			.attr("text-anchor", "end")
			.text(dashCounter5)
			.style('fill', 'white')
			.attr("font-size", '18')
			.attr("font-family", "Roboto");
		g5.append('rect')
			.attr('width', '250')
			.attr('height', '28')
			.attr('x', 160)
			.attr('y', 128)
			.style('fill', 'rgb(255,176,76)');
		g5.append('text')
			.attr('x', '285')
			.attr('y', '150')
			.attr("text-anchor", "middle")
			.text(dashStatus5)
			.style('fill', 'white')
			.attr("font-size", '18')
			.attr("font-family", "Roboto");
		g6.append('rect')
			.attr('width', '150')
			.attr('height', '28')
			.attr('x', 0)
			.attr('y', 160)
			.style('fill', 'rgb(255,176,76)');
		g6.append('text')
			.attr('x', '140')
			.attr('y', '182')
			.attr("text-anchor", "end")
			.text(dashCounter6)
			.style('fill', 'white')
			.attr("font-size", '18')
			.attr("font-family", "Roboto");
		g6.append('rect')
			.attr('width', '250')
			.attr('height', '28')
			.attr('x', 160)
			.attr('y', 160)
			.style('fill', 'rgb(255,176,76)');
		g6.append('text')
			.attr('x', '285')
			.attr('y', '182')
			.attr("text-anchor", "middle")
			.text(dashStatus6)
			.style('fill', 'white')
			.attr("font-size", '18')
			.attr("font-family", "Roboto");
		g7.append('rect')
			.attr('width', '150')
			.attr('height', '28')
			.attr('x', 0)
			.attr('y', 160)
			.style('fill', 'rgb(240,85,69)');
		g7.append('text')
			.attr('x', '140')
			.attr('y', '182')
			.attr("text-anchor", "end")
			.text(dashCounter7)
			.style('fill', 'white')
			.attr("font-size", '18')
			.attr("font-family", "Roboto");
		g7.append('rect')
			.attr('width', '250')
			.attr('height', '28')
			.attr('x', 160)
			.attr('y', 160)
			.style('fill', 'rgb(240,85,69)');
		g7.append('text')
			.attr('x', '285')
			.attr('y', '182')
			.attr("text-anchor", "middle")
			.text(dashStatus6)
			.style('fill', 'white')
			.attr("font-size", '18')
			.attr("font-family", "Roboto");
		return svg.node();
	}
}

customElements.define('app-dashboard', Dashboard);

