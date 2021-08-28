export default {
	name: 'article',
	title: 'Article',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'customSlug',
		},
		{
			title: 'Link',
			name: 'link',
			type: 'url',
			description:
				'Disable page creation and link the post card to an external Web page.',
		},
		{
			title: 'Published Date',
			name: 'date',
			type: 'datetime',
		},
		{
			title: 'Author',
			name: 'author',
			type: 'reference',
			to: { type: 'author' },
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Category',
			name: 'category',
			type: 'reference',
			to: { type: 'category' },
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Featured',
			name: 'featured',
			type: 'boolean',
			description: 'Place the post in featured spots of homepage.',
		},
		{
			title: 'Private',
			name: 'private',
			type: 'boolean',
			description:
				"Private post will not appear in paginated lists but can be accessed via it's URL.",
		},
		{
			title: 'Hero image',
			name: 'thumbnail',
			type: 'image',
		},
		{
			title: 'Thumbnail Text',
			name: 'thumbnailText',
			type: 'string',
			validation: (Rule) => Rule.max(25),
			description:
				"In the absence of image, this text along with article's category will be used as article thumbnail.",
		},
		{
			title: 'Body',
			name: 'body',
			type: 'blockContent',
		},
		{
			title: 'Keywords',
			name: 'keywords',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				layout: 'tags',
				sortable: false,
			},
			description: 'SEO Keyword Meta',
		},
		{
			title: 'Tags',
			name: 'tags',
			type: 'array',
			options: {
				layout: 'tags',
				sortable: false,
			},
			of: [{ type: 'string' }],
		},
	],

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			category: 'category.name',
			media: 'thumbnail',
		},
		prepare(selection) {
			const { author, category } = selection
			return Object.assign({}, selection, {
				subtitle: `${author && 'by ' + author} ${category && 'in ' + category}`,
			})
		},
	},
}
