import Link from "next/link";

function Navbar() {
    return (
        <div>
            <Link href="./stores">About</Link>
            <Link href="./">Home</Link>
            <Link href="./search/2">Search</Link>
        </div>
    )
}

export default Navbar