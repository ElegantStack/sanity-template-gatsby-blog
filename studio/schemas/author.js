export default {
	name: 'author',
	title: 'Author',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'Role/Occupation',
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'customSlug',
		},
		{
			title: 'Bio',
			name: 'description',
			type: 'text',
		},
		{
			title: 'Social Media',
			name: 'social',
			type: 'array',
			of: [{ type: 'string' }],
			description: 'Social Media Links, Email, Website Address, etc.',
		},
		{
			title: 'Skills',
			name: 'skills',
			type: 'array',
			of: [{ type: 'string' }],
			options: {
				layout: 'tags',
				sortable: false,
			},
		},
		{
			title: 'Photo',
			name: 'thumbnail',
			type: 'image',
		},
	],
	preview: {
		select: {
			title: 'name',
			media: 'thumbnail',
		},
	},
}
