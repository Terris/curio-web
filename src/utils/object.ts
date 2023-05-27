type DataItem = Record<string, any> | null | undefined;

export const removeItemsFromObject = ({
  record,
  removeItems,
}: {
  record: DataItem;
  removeItems: string[];
}) => {
  if (!record) return null;
  const keys = Object.keys(record);
  return keys.reduce((newRecord, key) => {
    if (removeItems.includes(key)) {
      return newRecord;
    } else {
      return { ...newRecord, [key]: record[key] };
    }
  }, {});
};
