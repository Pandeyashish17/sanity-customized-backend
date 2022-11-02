export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),

      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "imageTitle",
      title: "ImageTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "hoverTitle",
      title: "HoverTitle",
      type: "string",
    },
   
    {
      name: "searchQueries",
      title: "SearchQueries",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "string" }],
      options: {
        layout: "categories",
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (Rule) => Rule.required(),

      initialValue: new Date().toISOString(),
    },
    {
      title: "file",
      name: "file",
      type: "file",
    },
    {
      name: "body",
      title: "Body",
      validation: (Rule) => Rule.required(),

      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
