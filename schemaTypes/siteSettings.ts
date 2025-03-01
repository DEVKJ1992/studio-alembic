import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Site Title',
      description: 'The name of your site.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Site Description',
      description: 'A brief description of your site.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Site Logo',
      description: 'Upload your site logo.',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'favicon',
      type: 'image',
      title: 'Favicon',
      description: 'Upload your site favicon.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'seo',
      type: 'object',
      title: 'SEO Settings',
      fields: [
        {
          name: 'metaTitle',
          type: 'string',
          title: 'Meta Title',
          description: 'The title used for SEO purposes.',
        },
        {
          name: 'metaDescription',
          type: 'text',
          title: 'Meta Description',
          description: 'The description used for SEO purposes.',
        },
        {
          name: 'metaKeywords',
          type: 'array',
          title: 'Meta Keywords',
          description: 'Keywords used for SEO purposes.',
          of: [{type: 'string'}],
          options: {
            layout: 'tags',
          },
        },
      ],
    }),
  ],
})
