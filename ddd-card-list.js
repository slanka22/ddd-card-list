/**
 * Copyright 2025 p0tater
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


/**
 * `ddd-card-list`
 * 
 * @demo index.html
 * @element ddd-card-list
 */
export class DddCardList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card-list";
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if(changedProperties.has("dddaccent")){
      this.colorChange();
      console.log(this.dddaccent);
    }
  }

  colorChange() {
    //change number of accent color to inside of var(--ddd-theme-${this.dddaccent})
    
    
  }


  constructor() {
    super();
    this.title = "";
    this.dddaccent = "";
    this.dddprimary = "";
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/ddd-card-list.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String, reflect: true },
      dddaccent: { type: String, reflect: true, attribute: "ddd-accent" },
      dddprimary: { type: String, reflect: true, attribute: "ddd-primary" },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        //display: inline-block;
        display: inline-flex;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: var(--ddd-spacing-2); 
        padding: var(--ddd-spacing-4);
        
      }
      h3 span {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
      }
      div ::slotted(*){
        display: inline-block;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper" style="background-color: var(--ddd-primary-${this.dddaccent});" >
  <slot>
  </slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
}

globalThis.customElements.define(DddCardList.tag, DddCardList);