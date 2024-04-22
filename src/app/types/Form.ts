type Field =
  | {
      identifier: string;
      action: 'click';
    }
  | {
      identifier: string;
      action: 'fill';
      value: string;
    };

export interface Form {
  id: string;
  name: string;
  fields: Array<Field>;
}
