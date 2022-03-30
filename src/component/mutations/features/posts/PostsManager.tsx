import React, { useState } from 'react'
import {
  Post,
  useAddPostMutation,
  useGetPostsQuery,
} from '../../services/posts'
import { PostDetail } from './PostDetail'

const AddPost = () => {
  const initialValue = { name: '' }
  const [post, setPost] = useState<Pick<Post, 'name'>>(initialValue)
  const [addPost, { isLoading }] = useAddPostMutation()

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const handleAddPost = async () => {
    try {
      await addPost(post).unwrap()
      setPost(initialValue)
    } catch {
      console.log("error happened")
    }
  }

  return (
   <div>{post.name}</div>
  )
}

const PostList = () => {
  const { data: posts, isLoading } = useGetPostsQuery()
  // const { push } = useHistory()

  if (isLoading) {
    return <div>Loading</div>
  }

  if (!posts) {
    return <div>No posts :(</div>
  }

  return (
    <div>Post list</div>
     
  )
}

export const PostsCountStat = () => {
  const { data: posts } = useGetPostsQuery()

  if (!posts) return null

  return (
    <div>{posts?.length}</div>
  )
}

export const PostsManager = () => {
  return (
    <div>Post manager</div>
  )
}

export default PostsManager
