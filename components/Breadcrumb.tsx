const urlTotext = (url:string) => {
    let splittext = url.split("-").filter(Boolean);
    return splittext.join(' ');
}

const Breadcrumb = () => {
    const path = window.location.pathname;
    let breadcurmbdata = path.split("/").filter(Boolean);
    let URL = '';
    const urlupdate = (text:string) =>{
        URL = URL+'/'+text;
        return URL;
    }
    return (
        <nav aria-label="breadcrumb" className="flex items-center">
            <ol className="flex flex-wrap text-sm">
                {breadcurmbdata.map((item:any, idx:number) => (
                    <li key={idx} className="flex items-center">
                        {item && idx+1 !== breadcurmbdata.length ? (
                            <a href={urlupdate(item)} className="hover:underline font-bold capitalize">
                                {urlTotext(item)}
                            </a>
                        ) : (
                            <span className="text-gray-500">{urlTotext(item)}</span>
                        )}
                        {idx < breadcurmbdata.length - 1 && (
                            <span className="mx-2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                                </svg>
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumb;