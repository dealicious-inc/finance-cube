import { ColDef, GridOptions } from 'ag-grid-community';
import { AG_GRID_LOCALE_KO } from '@/constants/common/ag-grid/locale';
import { multiTextFilterParams } from '@/utils/common/ag-grid/presenters';

export const defaultColDef: ColDef = {
  // columnGroupShow: 'closed',
  resizable: true,
  editable: false,
  sortable: true,
  enableRowGroup: true,
  enablePivot: true,
  enableValue: true,
  menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab'],
  floatingFilter: true,
  filter: 'agMultiColumnFilter',
  filterParams: multiTextFilterParams,
  keyCreator: (params) => params.value,
  valueFormatter: (params) => params.value,
};

export const defaultGridOptions: GridOptions = {
  localeText: AG_GRID_LOCALE_KO,
  defaultColDef,
  rowDragManaged: true,
  // rowSelection: 'multiple',
  editType: 'fullRow',
  groupHeaderHeight: 32,
  enableRangeSelection: false,
  headerHeight: 40,
  suppressMenuHide: true,
  floatingFiltersHeight: 32,
  // groupSelectsChildren: true,
  groupSelectsFiltered: true,
  groupDefaultExpanded: -1,
  rowGroupPanelShow: 'always',
  pivotRowTotals: 'before',
  pivotPanelShow: 'always',
  // undoRedoCellEditing: true,
  // undoRedoCellEditingLimit: 10,
  // pagination: true,
  // paginationPageSize: 50,
  rowBuffer: 10,
  groupDisplayType: 'multipleColumns',
  // groupRemoveSingleChildren: true,
  // groupRemoveLowestSingleChildren: true,
  groupHideOpenParents: true,
  sideBar: {
    toolPanels: ['columns', 'filters'],
    // defaultToolPanel: 'columns',
  },
  // tooltipShowDelay: '500',
  onRowEditingStarted: (params) => {
    params.api.refreshCells({
      rowNodes: [params.node],
      force: true,
    });
  },
  onRowEditingStopped: (params) => {
    params.api.refreshCells({
      rowNodes: [params.node],
      force: true,
    });
  },
};
