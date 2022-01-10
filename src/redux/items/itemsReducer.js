const itemReducer = (
  items = [
    { name: 'Alice in Wonderland', number: '123123123', id: 'Ck5__gG8xjYJ6IhsuseEx' },
    { name: 'Captain Jack Sparrow', number: '456456456', id: 'LQZ8-3E6hoMhak0xD0jrU' },
    { name: 'Spiderman', number: '789789798', id: 'UGw-6FATbi8eY76BBgy2U' },
    { name: 'Homer Simpson', number: '147147147', id: 'V0-kViE_bWAnhU1TO_jNB' },
    { name: 'Cruella de Vil', number: '258258258', id: 'yuTNAaQhmxeHzbBssRqVS' },
    { name: "Aragorn Aratorn's son", number: '369369369', id: 'FTzAOcYAN6qxTLVq4zSxB' },
  ],
  { type, payload }
) => {
  switch (type) {
    case 'addContact':
      return [...items, payload];

    case 'deleteContact':
      return items.filter(item => item.id !== payload);

    default:
      return items;
  }
};
export default itemReducer;
