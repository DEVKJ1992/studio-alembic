import {defineField, defineType} from 'sanity'
import logos from './objects/logos'

export const caseStudiesPage = defineType({
  name: 'caseStudiesPage',
  title: 'Case Studies Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logosTitle',
      type: 'string',
    }),
    defineField({
      name: 'logos',
      type: 'array',
      of: [logos],
    }),
    defineField({
      name: 'csTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
