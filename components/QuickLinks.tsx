import {FC} from "react";

interface QuickLinksProps {
    links: {
        name: string;
        href: string;
    }[];
}

const QuickLinks: FC<QuickLinksProps> = ({links}) => {
    return <div className="text-xl font-light whitespace-pre-wrap mt-14">
        {/* Quick Links Divider*/}
        <div className="relative my-4">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-700"/>
            </div>
            <div className="relative flex justify-start">
                                <span
                                    className="text-gray-100 pr-2 bg-dark-purple text-xl md:text-2xl font-bold inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 opacity-90"
                                         viewBox="0 0 20 20"
                                         fill="currentColor">
                                        <path fillRule="evenodd"
                                              d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    Useful Links
                                </span>
            </div>
        </div>

        {links.map(link => <a key={link.name}
                              className="quick-link"
                              href={link.href}
                              target="_blank">
            {link.name}
        </a>)}
    </div>
}

export default QuickLinks;