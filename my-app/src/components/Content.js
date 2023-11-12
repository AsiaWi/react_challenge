import savedPosts from '../posts.json';
import css from './css/Content.module.css'
import React, { Component } from 'react'
 
 export class Content extends Component {
    constructor(props) {
      super(props)
    
    //   this.state = {
    //      first
    //   }
    }

  

   render() {
    const postsArray = savedPosts.savedPosts;

     return (
       <div className={css.Content}>
            <h1 className={css.TitleBar}>My Photos</h1>
            <div className={css.SearchResults}>
                {postsArray.map(post => {
                    return (
                        <div className={css.SearchItem}>
                            <p>{post.title}</p>
                            <p>{post.name}</p>
                            <img src={post.image}></img>
                            <p>{post.description}</p>

                        </div>
                    )
                } )}
            
             
       </div>
       </div>
       )
       }
       }

 export default Content

