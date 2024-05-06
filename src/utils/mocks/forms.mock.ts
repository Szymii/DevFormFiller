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
        value: ['option 1']
      },
      {
        identifier: 'test-react-select-id',
        action: 'select',
        value: ['option 1', 'option 2']
      },
      {
        identifier: 'test-switch-id',
        action: 'click'
      },
      {
        identifier: 'submit-btn',
        action: 'click'
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
        value: ['option 2']
      },
      {
        identifier: 'test-react-select-test-id',
        action: 'select',
        value: ['option 1', 'option 2']
      },
      {
        identifier: 'test-switch-test-id',
        action: 'click'
      },
      {
        identifier: 'submit-test-btn',
        action: 'click'
      }
    ]
  },
  {
    id: getUId(),
    name: 'Form with wery long name with wery long name with wery long name',
    fields: []
  },
  {
    id: getUId(),
    name: '',
    fields: []
  }
];
