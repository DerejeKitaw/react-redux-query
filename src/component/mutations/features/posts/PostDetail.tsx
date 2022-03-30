import React, { useState } from 'react'
// import { useHistory, useParams } from 'react-router-dom'
import {
  useDeletePostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
} from '../../services/posts'


const EditablePostName = ({
  name: initialName,
  onUpdate,
  onCancel,
  isLoading = false,
}: {
  name: string
  onUpdate: (name: string) => void
  onCancel: () => void
  isLoading?: boolean
}) => {
  const [name, setName] = useState(initialName)

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setName(value)

  const handleUpdate = () => onUpdate(name)
  const handleCancel = () => onCancel()

  return (
   <div>Update</div>
  )
}

const PostJsonDetail = ({ id }: { id: string }) => {
  const { data: post } = useGetPostQuery(id)

  return (
    <pre>{JSON.stringify(post, null, 2)}</pre>
  )
}

export const PostDetail = () => {

  const [isEditing, setIsEditing] = useState(false)

  const { data: post, isLoading } = useGetPostQuery("id")

  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation()

  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!post) {
    return (
     <div>Post id is missing! Try reloading or selecting another post...</div>
    )
  }

  return (
    <div>
      {isEditing ? (
        <div>Not edit</div>
      ) : (
       <div>Post detail success</div>
      )}
      <PostJsonDetail id={post.id} />
    </div>
  )
}
