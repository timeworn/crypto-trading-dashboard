export const config = {
  coinTable: {
    rowHeight   : 50,
    sortType    : 'single',
    limit       : 100,
    footerHeight: 50,
    headerHeight: 50,
    sorts       : [{ prop: 'prop', dir: 'desc' }],
    columnMode  : 'force',
    cap24hrChange: {
      colors: {
        positive: 'green',
        neutral : 'black',
        negative: 'red',
      },
    },
    columns: {
      long         : { prop: 'long', name: 'Nazwa' },
      short        : { prop: 'short', name: 'Symbol' },
      price        : { prop: 'price', name: 'Cena' },
      mktcap       : { prop: 'mktcap', name: 'Kapitalizacja' },
      volume       : { prop: 'volume', name: 'Wolumen (24h)'},
      cap24hrChange: { prop: 'cap24hrChange', name: 'Zmiana (24h)' },
    },
  },
  storeDevTools: {
    maxAge: 25,
  },
};
