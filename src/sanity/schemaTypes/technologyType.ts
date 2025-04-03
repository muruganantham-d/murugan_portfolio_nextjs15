import { defineType, defineField } from 'sanity'

export const technologyType = defineType({
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Technology Name',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Technology Logo',
      options: { hotspot: true },
    }),
    defineField({
      name: 'color',
      type: 'string',
      title: 'Technology Color',
    }),
  ],
})
