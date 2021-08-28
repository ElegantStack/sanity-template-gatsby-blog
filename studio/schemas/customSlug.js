export default {
	title: 'Slug',
	name: 'customSlug',
	type: 'string',
	validation: (Rule) =>
		Rule.custom((slug) => {
			if (typeof slug === 'undefined') {
				return true // Allow undefined values
			}
			return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)
				? true
				: 'Please Use alphanumeric kebab-case'
		}),
	description: 'Override automatic slug generation. Example: my-custom-slug',
}
