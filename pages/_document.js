import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html lang='en'>
                <Head>
                    <link
                        href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
                        rel='stylesheet'></link>
                    <link href='https://fonts.googleapis.com/css?family=Open+Sans&display=swap' rel='stylesheet'></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <style global jsx>{`
                        body {
                            margin: 0;
                            font-size: 110%;
                            background: #f0f0f0;
                            font-family: 'Open Sans';
                        }
                    `}</style>
                </body>
            </html>
        );
    }
}
