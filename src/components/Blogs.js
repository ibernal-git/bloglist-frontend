import React, { useState, useEffect } from 'react'
import Blog from './Blog'
import CreateBlog from './CreateBlog'
import blogService from '../services/blogs'

const Blogs = ({ setMessage, handleNotification }) => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])
  return (
    <>
      <CreateBlog blogs={blogs} setBlogs={setBlogs} setMessage={setMessage} handleNotification={handleNotification} />
      <div>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
        )}
      </div>
    </>
  )
}

export default Blogs
