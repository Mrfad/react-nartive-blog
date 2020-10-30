import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
    const blogPosts = [
        {title: 'blog Post #1'},
        {title: 'blog Post #2'},
        {title: 'blog Post #3'},
        {title: 'blog Post #4'},
        {title: 'blog Post #5'}
    ];
    return <BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider>
};
export default BlogContext;