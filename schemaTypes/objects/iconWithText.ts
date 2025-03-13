import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'iconWithText',
  title: 'Icon With Text',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      type: 'image',
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'text',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})
