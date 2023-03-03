import * as react from 'react';
import react__default, { ReactNode } from 'react';

type Step = {
    icon: ReactNode;
    minutes: number;
};
interface TheReadTimeProps {
    /**
     * @default [{icon:"🍣",minutes:1},{icon:"🍔",minutes:5},{icon:"🍱",minutes:15}]
     */
    steps?: Step[];
    /**
     * How many words read per minute
     * @default 200
     */
    speed?: number;
    /**
     * total time in minute
     */
    time?: number;
    displayRender?: (emoji: ReactNode[], totalTime: number) => ReactNode;
    children?: ReactNode;
}

declare const TheReadTime: react__default.FC<TheReadTimeProps>;

declare const wordCount: (text: string) => number;

declare const extractTextFromReactNode: (node: ReactNode) => string;

declare const convertTimeToEmoji: (steps: Step[], totalTime: number) => ReactNode[];

declare const convertNumberToTime: (minute: number) => string;

declare const _default: {
    TheReadTime: react.FC<TheReadTimeProps>;
    wordCount: (text: string) => number;
    extractTextFromReactNode: (node: react.ReactNode) => string;
    convertTimeToEmoji: (steps: Step[], totalTime: number) => react.ReactNode[];
    convertNumberToTime: (minute: number) => string;
};

export { Step, TheReadTime, TheReadTimeProps, convertNumberToTime, convertTimeToEmoji, _default as default, extractTextFromReactNode, wordCount };
