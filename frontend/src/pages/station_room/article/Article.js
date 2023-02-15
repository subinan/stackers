import React from 'react'
import ArticleDetail from './ArticleDetail'
import CommentList from '../comment/CommentList'
// import CommentCreate from '../comment/CommentCreate'

function Article(props) {
  return (
    <div className="right-style">
      <ArticleDetail info={props.info}></ArticleDetail>
      <CommentList></CommentList>
    </div>
  )
}
export default Article
