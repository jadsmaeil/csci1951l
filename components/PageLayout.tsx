import {FC, useEffect} from "react";

export interface PageLayoutProps {
}

const PageLayout: FC<PageLayoutProps> = ({children}) => {
    useEffect(() => {
        console.log("%c👋 Why, hello there!\n%cThis site was designed and developed by Nathan Luu. Check out what I'm working on (or just come say hi) at https://luu.dev/.", "font-size:1.125rem; font-weight:600", "font-weight:600");
    }, []);
    return <div>
        <main>
            {children}
        </main>
        <footer>
        </footer>
    </div>
}

export default PageLayout;