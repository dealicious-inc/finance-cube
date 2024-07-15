import { useCallback, useState } from 'react';
import { format, subDays } from 'date-fns';
import { ColDef, ColumnApi, FirstDataRenderedEvent, GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { defaultGridOptions } from '@/utils/common/ag-grid/option';
import { autoSizeColumns } from '@/utils/common/ag-grid/presenters';

export const getInitialFilter = () => ({
  startDate: format(subDays(new Date(), 0), 'yyyy-MM-dd'),
  endDate: format(new Date(), 'yyyy-MM-dd'),
});

const useGrid = () => {
  const [gridApi, setGridApi] = useState<GridApi>();

  const [gridColumnApi, setGridColumnApi] = useState<ColumnApi>();

  const autoGroupColumnDef: ColDef = {
    pinned: 'left',
    minWidth: 80,
    width: 175,
  };

  const columnDefs: ColDef[] = [
    {
      headerName: 'ID',
      field: 'id',
    },
    {
      headerName: '날짜',
      field: 'date',
    },
    {
      headerName: '이름',
      field: 'name',
    },
    {
      headerName: '주소',
      field: 'shipTo',
    },
    {
      headerName: '결제수단',
      field: 'paymentMethod',
    },
    {
      headerName: '금액',
      field: 'amount',
    },
  ];
  const gridOptions: GridOptions = {
    ...defaultGridOptions,
    statusBar: {
      statusPanels: [
        {
          statusPanel: 'agTotalAndFilteredRowCountComponent',
          align: 'left',
        },
      ],
    },
    groupHideOpenParents: true,
    groupDisplayType: 'multipleColumns', // option: groupRows, multipleColumns, custom, singleColumn
    groupRemoveLowestSingleChildren: true, // 단독 컬럼 제거(rowGroup 제거)
    autoGroupColumnDef, // rowGroup시 생성되는 group column에 대한 정의
    columnDefs,
  };

  const onGridReady = useCallback((e: GridReadyEvent) => {
    setGridApi(e.api);
    setGridColumnApi(e.columnApi);
  }, []);

  const onFirstDataRendered = useCallback((e: FirstDataRenderedEvent) => {
    autoSizeColumns(e);
    // params.api.sizeColumnsToFit();
  }, []);

  return {
    gridApi,
    gridColumnApi,
    gridOptions,
    onGridReady,
    onFirstDataRendered,
  };
};

export default useGrid;
