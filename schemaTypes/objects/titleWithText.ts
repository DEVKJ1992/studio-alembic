import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'titleWithText',
  title: 'Title With Text',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      description: 'Use Slug Format. This is used to link Table Of Contents',
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'text',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'code',
        },
      ],
    }),
  ],
})
