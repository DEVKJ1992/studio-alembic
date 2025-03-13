import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'logos',
  title: 'Logos',
  type: 'object',
  fields: [
    defineField({
      name: 'logo',
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
      ],
    }),
  ],
})
