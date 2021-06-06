import React, { useEffect } from 'react'
import { fetchPost } from '../redux/Posts/actions/PostActions'
import { useDispatch, useSelector } from 'react-redux'

const Post = () => {
    const state = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchPost())
    }, [dispatch])
    
    return (
        <div>
           {state.loading ? <h1>Loading...</h1> : <p></p>}
           {state.posts ? state.posts.map((post) => {
               return (
                   <h3 key={post.id}> { post.title } </h3>
               )
           }) : ""}
           {state.error ? <p> { state.error } </p> : ""}
        </div>
    )
}

export default Post
