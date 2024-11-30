export declare namespace NSMapObjectListTo2DArray {
  interface DataObject {
    [key: string]: any;
  }

  export type DataObjectList = Array<DataObject>;

  export type OutputSchema<TData extends DataObject = DataObject> = Array<
    keyof TData | ((item: TData, index: number) => unknown)
  >;
}

export const mapObjectListTo2DArray = <
  TData extends
    NSMapObjectListTo2DArray.DataObject = NSMapObjectListTo2DArray.DataObject,
>(
  list: TData[],
  outputSchema: NSMapObjectListTo2DArray.OutputSchema<TData>,
) => {
  return list.map((item, index) =>
    outputSchema.map((key) => {
      if (typeof key === "function") {
        return key(item, index);
      }
      return item[key];
    }),
  );
};
