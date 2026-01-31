import * as React from 'react';

type SignalElementProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  [key: string]: unknown;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'signal-accessibility-helpers': SignalElementProps;
      'signal-app-shell': SignalElementProps;
      'signal-badge': SignalElementProps;
      'signal-behavioral-primitives': SignalElementProps;
      'signal-breadcrumbs': SignalElementProps;
      'signal-button': SignalElementProps;
      'signal-card': SignalElementProps;
      'signal-checkbox': SignalElementProps;
      'signal-combobox': SignalElementProps;
      'signal-data-table': SignalElementProps;
      'signal-drawer': SignalElementProps;
      'signal-dropdown': SignalElementProps;
      'signal-feature-table': SignalElementProps;
      'signal-file-upload': SignalElementProps;
      'signal-heading': SignalElementProps;
      'signal-input': SignalElementProps;
      'signal-layout': SignalElementProps;
      'signal-list-item': SignalElementProps;
      'signal-modal': SignalElementProps;
      'signal-navbar': SignalElementProps;
      'signal-page': SignalElementProps;
      'signal-popover': SignalElementProps;
      'signal-progress': SignalElementProps;
      'signal-radio-group': SignalElementProps;
      'signal-responsive-config': SignalElementProps;
      'signal-section': SignalElementProps;
      'signal-select': SignalElementProps;
      'signal-sidebar': SignalElementProps;
      'signal-skeleton': SignalElementProps;
      'signal-slider': SignalElementProps;
      'signal-snackbar': SignalElementProps;
      'signal-split-view': SignalElementProps;
      'signal-switch': SignalElementProps;
      'signal-table': SignalElementProps;
      'signal-tabs': SignalElementProps;
      'signal-tag': SignalElementProps;
      'signal-text': SignalElementProps;
      'signal-textarea': SignalElementProps;
      'signal-toast': SignalElementProps;
      'signal-tooltip': SignalElementProps;
    }
  }
}

export {};
