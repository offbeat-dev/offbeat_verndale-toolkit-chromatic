import { Component } from '@verndale/core';
import '../../scss/modules/accordion.scss';

class Accordion extends Component {
  setupDefaults() {
    this.dom = {
      triggers: this.el.querySelectorAll('.accordion__item-trigger'),
      panels: this.el.querySelectorAll('.accordion__item-panel')
    };

    this.initAccordion();
  }

  addListeners() {
    (this.dom.triggers as NodeList).forEach(trigger =>
      trigger.addEventListener('click', this.handleClick.bind(this))
    );
  }

  initAccordion() {
    (this.dom.triggers as NodeListOf<HTMLButtonElement>).forEach(trigger => {
      if (trigger.getAttribute('aria-expanded') === 'true') {
        this.openItem(trigger);
      }
    });
  }

  handleClick(e: Event) {
    const trigger = e.currentTarget as HTMLButtonElement;

    if (trigger.getAttribute('aria-expanded') === 'true') {
      this.closeItem(trigger);
    } else {
      this.openItem(trigger);
    }
  }

  openItem(trigger: HTMLButtonElement) {
    trigger.setAttribute('aria-expanded', 'true');

    const panel = document.getElementById(
      trigger.getAttribute('aria-controls') as string
    );

    if (panel) {
      const pannelContent = panel.querySelector<HTMLElement>(
        '.accordion__item-content'
      );

      panel.style.height = `${pannelContent?.offsetHeight}px`;

      setTimeout(() => (panel.style.height = 'auto'), 250);
    }
  }

  closeItem(trigger: HTMLButtonElement) {
    trigger.setAttribute('aria-expanded', 'false');

    const panel = document.getElementById(
      trigger.getAttribute('aria-controls') as string
    );

    if (panel) {
      const pannelContent = panel.querySelector<HTMLElement>(
        '.accordion__item-content'
      );
      panel.style.height = `${pannelContent?.offsetHeight}px`;
      setTimeout(() => (panel.style.height = '0px'));
    }
  }
}

export default Accordion;
