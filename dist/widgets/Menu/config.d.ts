interface Edition {
    key: string;
    tokenSymbol: string;
    tokenAddress: string;
    referrals: {
        enabled: boolean;
    };
    masterChefTokenPerBlock: string;
    priceLink: string;
    startTime: Date;
    startBlock: string;
    logoText: string;
    logoUrl: string;
    homeSecondaryTitle: string;
    homeHeroImg1: string;
    homeHeroImg2: string;
    homeStakingCardBackground: string;
    farmPrimaryTitle: string;
    farmSecondaryTitle: string;
    poolPrimaryTitle: string;
    poolSecondaryTitle: string;
    bottomIllustration: JSX.Element;
}
export declare function getMenuLinks(edition: Edition): ({
    label: string;
    icon: string;
    href: string;
    items?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
})[];
export declare const socials: ({
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    items?: undefined;
})[];
export declare const MENU_HEIGHT = 64;
export declare const MENU_ENTRY_HEIGHT = 48;
export declare const SIDEBAR_WIDTH_FULL = 240;
export declare const SIDEBAR_WIDTH_REDUCED = 56;
export {};
