import type { Form } from './types/Form';

export const getForms = () => {
  const forms: Array<Form> = [
    {
      id: '123',
      name: 'Form1'
    },
    {
      id: '1234',
      name: 'Form2 with wery long name with wery long name with wery long name'
    },
    {
      id: '1235',
      name: 'Form3 with wery long name'
    }
  ];
  return forms;
};
