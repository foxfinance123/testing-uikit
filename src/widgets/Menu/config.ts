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

export function getMenuLinks(edition: Edition) {
  const isExchange = edition.key === "exchange";
  const farmUrl = isExchange ? `https://${edition.key}.worldswap.finance/` : "/";

  return [
    {
      label: "Editions",
      icon: "LayerIcon",
      items: [
        {
          label: "Dublin 🇮🇪",
          href: "https://dublin.worldswap.finance",
        },
        {
          label: "Amsterdam 🇳🇱",
          href: "https://amsterdam.worldswap.finance",
        },
      ],
    },
    {
      label: "Home",
      icon: "HomeIcon",
      href: farmUrl,
    },
    {
      label: "Exchange",
      href: `https://exchange.pancakeswap.com/#/swap?outputCurrency=${edition.tokenAddress}`,
      icon: "ExchangeIcon",
    },
    {
      label: "Liquidity",
      href: "https://exchange.pancakeswap.com/#/pool",
      icon: "LiquidityIcon",
    },
    {
      label: "Farms",
      icon: "FarmIcon",
      href: `${farmUrl}farms`,
    },
    {
      label: "Pools",
      icon: "PoolIcon",
      href: `${farmUrl}pools`,
    },
    {
      label: "Referrals",
      icon: "GroupsIcon",
      href: `${farmUrl}referrals`,
    },
    // {
    //   label: 'Lottery',
    //   icon: 'TicketIcon',
    //   href: '/lottery',
    // },
    // {
    //   label: 'NFT',
    //   icon: 'NftIcon',
    //   href: '/nft',
    // },
    {
      label: "Info",
      icon: "InfoIcon",
      items: [
        {
          label: "PooCoin",
          href: `https://poocoin.app/tokens/${edition.tokenAddress}`,
        },
        {
          label: "PancakeSwap",
          href: `https://pancakeswap.info/token/${edition.tokenAddress}`,
        },
      ],
    },
    {
      label: "More",
      icon: "MoreIcon",
      items: [
        {
          label: "Github",
          href: "https://github.com/WorldSwap",
        },
        {
          label: "Docs",
          href: "https://docs.worldswap.finance",
        },
      ],
    },
  ];
}

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/WorldSwapFinance",
      },
      // {
      //   label: "Announcements",
      //   href: "https://t.me/",
      // },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/WorldSwap",
  },
  // {
  //   label: "Reddit",
  //   icon: "RedditIcon",
  //   href: "https://www.reddit.com/r/",
  // },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
