export default [
    {
        name: 'Blog Title',
        desc: 'An Ai tool that generates a blog title for a blog post.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
        aiprompt: 'Give me 5 blog posts and a description here on your blog post and topic idea in bullet wise only based on the blog post.',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'inout',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    }
]
