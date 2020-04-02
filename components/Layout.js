import Router from 'next/router';
import Header from './Header';
import Footer from './Footer';

import NProgress from 'nprogress';

Router.onRouteChangeStart = (url) => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = (props) => (
    <div className='root'>
        <Header />

        {props.children}
        <Footer />

        <style jsx>{`
            .root {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
            }
        `}</style>
    </div>
);

export default Layout;
