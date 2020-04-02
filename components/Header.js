import Link from 'next/link';

const Header = () => (
    <header>
        <Link href='/'>
            <a>Home</a>
        </Link>
        <Link href='/movies'>
            <a>Movies</a>
        </Link>
        <Link href='/about'>
            <a>About</a>
        </Link>
        <style jsx>{`
            header {
                width: 100%;
                display: flex;
                padding: 1em;
                font-size: 1.2rem;
                background: indigo;
                justify-content: space-around;
            }
            header a {
                text-decoration: none;
                color: darkgray;
            }
            header a:hover {
                text-weight: bold;
                color: lightgray;
            }
        `}</style>
    </header>
);

export default Header;
