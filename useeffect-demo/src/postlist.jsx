import { useState, useEffect } from 'react'
import PostCard from './PostCard'

import LoadingSpinner from './components/shared/LoadingSpinner'
import ErrorMessage from './components/shared/ErrorMessage'

function PostList() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchPosts = async () => {
        try {
            setLoading(true)
            setError(null)

            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            )

            if (!response.ok) {
                throw new Error('Failed to fetch posts')
            }

            const data = await response.json()
            setPosts(data.slice(0, 10))

        } catch (err) {
            setError(err.message)

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    // ⏳ LOADING STATE
    if (loading) {
        return <LoadingSpinner text="Loading posts..." />
    }

    // ❌ ERROR STATE
    if (error) {
        return (
            <ErrorMessage
                message={error}
                onRetry={fetchPosts}
            />
        )
    }

    // 📭 EMPTY STATE
    if (posts.length === 0) {
        return <p>No posts found.</p>
    }
   // 📦 SUCCESS STATE
    return (
        <div className="post-list">
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}

export default PostList