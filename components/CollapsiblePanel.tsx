import {Disclosure} from "@headlessui/react";
import {FC} from "react";

interface CollapsiblePanelProps {
    title: string;
}

const CollapsiblePanel: FC<CollapsiblePanelProps> = ({title, children}) => {
    return (
        <Disclosure>
            {({open}) => <div className="border-b border-gray-700">
                <Disclosure.Button
                    className="text-white py-4 font-bold text-xl md:text-2xl w-full text-left focus:underline flex justify-between items-center hover-fade">
                    {title}
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform duration-200 transform ${open && "rotate-45"}`} fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                    </svg>
                </Disclosure.Button>
                <Disclosure.Panel className="pb-6 text-sm md:text-base">
                    {children}
                </Disclosure.Panel>
            </div>}
        </Disclosure>
    )
}

export default CollapsiblePanel;