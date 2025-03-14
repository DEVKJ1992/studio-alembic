import {defineField, defineType} from 'sanity'

export const whitepaperType = defineType({
  name: 'whitepaper',
  title: 'Whitepapers',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eyebrowTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortTitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'uploadWhitepaper',
      type: 'file',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metaImage',
      type: 'image',
    }),
    defineField({
      name: 'metaTitle',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
    }),
  ],
})
