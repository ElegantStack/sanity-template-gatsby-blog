export default {
	name: 'category',
	title: 'Category',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'customSlug',
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
		},
		{
			title: 'Color',
			name: 'color',
			type: 'string',
			description: 'HEX Color Code',
		},
		{
			title: 'Icon',
			name: 'icon',
			type: 'file',
			options: {
				accept: '.svg,image/svg+xml',
			},
			description: 'SVG icon',
		},
	],
}
