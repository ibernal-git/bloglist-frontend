import React, { useState } from 'react'
import blogService from '../services/blogs'

const CreateBlog = ({ handleNotification, blogs, setBlogs }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleForm = async (event) => {
    event.preventDefault()
    try {
      const newBlog = await blogService.create({ title, author, url })

      setTitle('')
      setAuthor('')
      setUrl('')
      setBlogs(blogs.concat(newBlog))
      handleNotification(`A new blog ${newBlog.title} by ${newBlog.author} added`, false)
    } catch (exception) {
      handleNotification('the blog cannot be created, please fill in the following fields', true)
    }
  }
  return (
    <>
      <h1>create new</h1>
      <form onSubmit={handleForm}>
        <div>
          title:
          <input
            type='text'
            value={title}
            name='Title'
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author:
          <input
            type='text'
            value={author}
            name='Title'
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          url:
          <input
            type='text'
            value={url}
            name='Title'
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

export default CreateBlog
