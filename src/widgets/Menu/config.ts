export function getMenuLinks(base: string, tokenAddress: string) {
  const isExchange = base === "exchange";
  const farmUrl = isExchange ? `https://${base}.worldswap.finance/` : "/";
  // const exchangeUrl = isExchange ? '/' : 'https://exchange.worldswap.finance/'

  return [
    {
      label: "Home",
      icon: "HomeIcon",
      href: farmUrl,
    },
    {
      label: "Exchange",
      href: `https://exchange.pancakeswap.com/#/swap?outputCurrency=${tokenAddress}`,
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
          href: `https://poocoin.app/tokens/${tokenAddress}`,
        },
        {
          label: "PancakeSwap",
          href: `https://pancakeswap.info/token/${tokenAddress}`,
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
