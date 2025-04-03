import { defineType, defineField, defineArrayMember } from 'sanity'

export const projectsType = defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Project Name',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Project Image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
    }),
    defineField({
      name: 'repo',
      type: 'url',
      title: 'Repository URL',
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Live Link',
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      title: 'Technologies Used',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'technology' }, // Ensure 'technology' schema exists
        }),
      ],
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
  ],
})
