import {defineField, defineType} from 'sanity'
import iconWithText from './objects/iconWithText'
import logos from './objects/logos'

export const companyPage = defineType({
  name: 'companyPage',
  title: 'Company Page',
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
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'valuesTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'valuesBody',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'values',
      type: 'array',
      of: [iconWithText],
    }),
    defineField({
      name: 'ctaTitle',
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
  ],
})
