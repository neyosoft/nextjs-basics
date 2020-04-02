import {withRouter} from 'next/router';
import Layout from '../components/Layout';
import Markdown from 'react-markdown';

const Content = withRouter((props) => (
    <div>
        <h1>{props.router.query.title}</h1>
        <div className="markdown">
            <Markdown source={`
This is our blog post.
Yes, we can have a [http://google.com](google)
And we can have a title as well.

### This is a title
And here is the content.
            `} />
        </div>
        <style jsx>{`
            markdown {
                font-family: 'Arial';
            }
        
            .markdown a {
                text-decoration: none;
                color: blue;
            }
        
            .markdown a:hover {
                opacity: 0.6;
            }
        
            .markdown h3 {
                margin: 0;
                padding: 0;
                text-transform: uppercase;
            }
        `}</style>
        <p>This is the blog post content</p>
    </div>
))

const Page = (props) => (
    <Layout>
        <Content />
    </Layout>
)

export default Page;