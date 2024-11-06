import {FC} from "react";

export interface FAQSectionProps {
    question: string;
}

const FAQSection: FC<FAQSectionProps> = ({question, children}) => {
    return <section>
        <h2 className="text-base md:text-lg font-bold text-white">
            {question}
        </h2>
        <p className="mt-1">
            {children}
        </p>
    </section>
}

export default FAQSection;