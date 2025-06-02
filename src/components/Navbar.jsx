export default function Navbar() {
    return (
        <>
            <nav className="bg-pink-200">
                <h1>Fayy</h1>
                <ul>
                    <li>
                        <a href="/">Home</a>
                        <a href="/blog">Blog</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}