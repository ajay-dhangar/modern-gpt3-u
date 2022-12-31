import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  const date = `Sep 26, 2021`;
  const title = `GPT-3 and Open  AI is the future. Let us exlore how it is?`;

  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
      </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article imgUrl={blog01} date={date} title={title}/>
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article imgUrl={blog02} date={date} title={title}/>
            <Article imgUrl={blog03} date={date} title={title}/>
            <Article imgUrl={blog04} date={date} title={title}/>
            <Article imgUrl={blog05} date={date} title={title}/>
          </div>
        </div>
    </div>
  )
}

export default Blog;