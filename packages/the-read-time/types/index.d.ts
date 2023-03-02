import * as React from 'react';
import React__default, { ReactNode } from 'react';

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

declare const TheReadTime: React__default.FC<TheReadTimeProps>;

declare const _default: {
    TheReadTime: React.FC<TheReadTimeProps>;
};

export { Step, TheReadTime, TheReadTimeProps, _default as default };
