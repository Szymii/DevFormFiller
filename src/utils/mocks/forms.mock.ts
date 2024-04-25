import type { Form } from '@/app/types/Form';
import { getUId } from '@/utils/getUId';

export const forms: Array<Form> = [
  {
    id: getUId(),
    name: 'Demo with ids',
    fields: [
      {
        identifier: 'test-input-id',
        action: 'fill',
        value: 'test input value'
      },
      {
        identifier: 'test-select-id',
        action: 'select',
        value: 'option 1'
      }
    ]
  },
  {
    id: getUId(),
    name: 'Demo with test ids',
    fields: [
      {
        identifier: 'test-input-test-id',
        action: 'fill',
        value: 'test input value'
      },
      {
        identifier: 'test-select-test-id',
        action: 'select',
        value: 'option 2'
      }
    ]
  },
  {
    id: getUId(),
    name: 'Form with wery long name with wery long name with wery long name',
    fields: []
  }
];
