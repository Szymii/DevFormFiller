import * as v from 'valibot';

const clickableFieldSchema = v.object(
  {
    identifier: v.string(),
    action: v.literal('click')
  },
  v.never()
);

const fillableFieldSchema = v.object({
  identifier: v.string(),
  action: v.literal('fill'),
  value: v.string()
});

const selectableFieldSchema = v.object({
  identifier: v.string(),
  action: v.literal('select'),
  value: v.array(v.string())
});

const fieldSchema = v.union(
  [clickableFieldSchema, fillableFieldSchema, selectableFieldSchema] as const,
  ({ input }) => {
    if (input && typeof input === 'object')
      return 'identifier' in input ? `Invalid field ${input.identifier}` : 'Invalid field';

    return 'Invalid field';
  }
);

export const FormSchema = v.object({
  name: v.string(),
  fields: v.array(fieldSchema, 'Invalid fields')
});
