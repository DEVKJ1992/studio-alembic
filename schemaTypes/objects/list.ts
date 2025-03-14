import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'list',
  title: 'List',
  type: 'object',
  fields: [
    defineField({
      name: 'listItem',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'listID',
      type: 'string',
      description: 'Use Slug Format. This is used to link Table Of Contents',
      validation: (rule) => rule.required(),
    }),
  ],
})
