import { FirstDataRenderedEvent, ValueGetterFunc } from 'ag-grid-community';

const addCommas = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const removeNonNumeric = (num: number) => num.toString().replace(/[^0-9]/g, '');

export const numberFormatGetter: ValueGetterFunc = (params) => {
  if (!params.data) return null;

  return addCommas(Number(removeNonNumeric(params.data.price)));
};

export const autoSizeColumns = (params: FirstDataRenderedEvent) => {
  const colIds = params.columnApi
    .getAllDisplayedColumns()
    .filter((col) => col.getColId() !== 'action')
    .map((col) => col.getColId());
  params.columnApi.autoSizeColumns(colIds);
};

export const multiTextFilterParams = {
  filters: [
    {
      showTooltips: true,
      filter: 'agTextColumnFilter',
    },
    {
      filter: 'agSetColumnFilter',
      filterParams: {
        convertValuesToStrings: true,
        applyMiniFilterWhileTyping: true, // 필터검색어 즉시반영
        caseSensitive: false, // 대소문자 구분여부 (true: 같은 검색어로 인식, false: 대소문자 구분해서 인식)
        textFormatter: (value: string) => {
          return value
            .replace(/\s/g, '')
            .replace(/[àáâãäå]/g, 'a')
            .replace(/æ/g, 'ae')
            .replace(/ç/g, 'c')
            .replace(/[èéêë]/g, 'e')
            .replace(/[ìíîï]/g, 'i')
            .replace(/ñ/g, 'n')
            .replace(/[òóôõö]/g, 'o')
            .replace(/œ/g, 'oe')
            .replace(/[ùúûü]/g, 'u')
            .replace(/[ýÿ]/g, 'y')
            .replace(/\W/g, '');
        },
      },
    },
  ],
};
