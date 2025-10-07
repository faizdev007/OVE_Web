const urlreplacer = (url:string) => {
    return url.replace('https://admin.optimalvirtualemployee.com', '')
}

const Breadcrumb = ({ items }: { items: { url: string, text:string }[] }) => {
    return (
        <nav aria-label="breadcrumb" className="flex items-center">
            <ol className="flex flex-wrap text-sm">
                {items.map((item:any, idx:number) => (
                    <li key={idx} className="flex items-center">
                        {item.url && idx+1 !== items.length ? (
                            <a href={item.text === "Home" ? '/blog' :urlreplacer(item?.url)} className="text-black hover:underline font-bold capitalize">
                                {item.text === "Home" ? 
                                    'blog'
                                    : item.text}
                            </a>
                        ) : (
                            <span className="text-gray-500">{item.text}</span>
                        )}
                        {idx < items.length - 1 && (
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