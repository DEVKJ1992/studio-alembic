import {defineField, defineType} from 'sanity'
import titleWithText from './objects/titleWithText'
import list from './objects/list'

export const privacyPage = defineType({
  name: 'privacyPage',
  title: 'Privacy Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'code',
        },
      ],
    }),
    defineField({
      name: 'list',
      title: 'TOC List',
      type: 'array',
      of: [list],
    }),
    defineField({
      name: 'content',
      title: 'TOC Content',
      type: 'array',
      of: [titleWithText],
    }),
  ],
})
