export default function Header() {
    return (
        <div className="flex justify-between uppercase">          
            <h1 className="text-3xl text-white italic font-serif px-5">Pelix</h1>
            <ul className='text-white flex leading-8 text-sm'>
                <li className="px-3">
                    <a href="/">
                        home
                    </a>
                </li>
                <li className="px-3">
                    <a href="/movies">
                        movies
                    </a>
                </li>
                <li className="px-3">
                    <a href="/series">
                        series
                    </a>
                </li>
            </ul>
        </div>
    )
}