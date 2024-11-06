import {FC, useState} from "react";

type TitleColor = "blue" | "green" | "yellow" | "red" | "pink" | "purple";

interface ContentSectionProps {
    title: string;
    id?: string;
    titleColor: TitleColor;
}

function getTitleColor(titleColor: TitleColor) {
    switch (titleColor) {
        case "blue":
            return "neon-text-blue";
        case "green":
            return "neon-text-green";
        case "yellow":
            return "neon-text-yellow";
        case "red":
            return "neon-text-red";
        case "pink":
            return "neon-text-pink";
        case "purple":
            return "neon-text-purple";
    }
}

const ContentSection: FC<ContentSectionProps> = ({title, id, titleColor, children}) => {
    const [isHovered, setHovered] = useState(false);

    return <section id={id} onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
        <div className="max-w-5xl mx-auto px-6">
            <h1 className={`text-xl md:text-3xl font-bold mb-8 font-display transition-shadows ease-out duration-500 ${getTitleColor(titleColor)}${isHovered ? "-intense" : ""}`}>
                {title}
            </h1>
            <div className="text-sm md:text-base">
                {children}
            </div>
        </div>
    </section>
}

export default ContentSection;