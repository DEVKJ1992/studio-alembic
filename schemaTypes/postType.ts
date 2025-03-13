import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'string',
      initialValue: () => 'Gregory Kennedy',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'code',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Describe the image for accessibility and SEO.',
            },
            {
              title: 'Align',
              name: 'align',
              type: 'string',
              options: {
                list: [
                  {title: 'Center', value: 'center'},
                  {title: 'Left', value: 'Left'},
                  {title: 'Right', value: 'Right'},
                ],
              },
            },
            {
              name: 'customWidth',
              type: 'number',
              title: 'Width',
              initialValue: 550,
            },
            {
              title: 'Disable Inline?',
              name: 'isInline',
              type: 'boolean',
            },
          ],
        },
        {
          type: 'object',
          name: 'iframe',
          title: 'Iframe Embed',
          fields: [
            {
              name: 'src',
              type: 'url',
              title: 'Iframe Source',
            },
            {
              name: 'height',
              type: 'number',
              title: 'Height',
              initialValue: 315,
            },
            {
              name: 'width',
              type: 'number',
              title: 'Width',
              initialValue: 560,
            },
          ],
          preview: {
            select: {
              title: 'src',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'CTA URL',
      type: 'url',
      initialValue: () => 'https://getalembic.com/book-a-demo/',
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
