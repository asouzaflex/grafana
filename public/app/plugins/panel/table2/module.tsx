import { PanelPlugin } from '@grafana/ui';

import { TablePanelEditor } from './TablePanelEditor';
import { TablePanel } from './TablePanel';
import { Options, defaults } from './types';

export const plugin = new PanelPlugin<Options>(TablePanel).setDefaults(defaults).setEditor(TablePanelEditor);
