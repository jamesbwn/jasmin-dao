export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/drondin/olympus-graph";
export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

export const TOKEN_DECIMALS = 9;

export const POOL_GRAPH_URLS = {
  4: "https://api.thegraph.com/subgraphs/name/pooltogether/rinkeby-v3_4_3",
  1: "https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether-v3_4_3",
};

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  56: {
    BUSD_ADDRESS: "0xe9e7cea3dedca5984780bafc599bd69add087d56", // duplicate
    USDT_ADDRESS: "0x55d398326f99059ff775485246999027b3197955",
    PRESALE_TOKEN_ADDRESS: "0x5217c6e7e38cf567bb6b77c8cad8661ba863bd53",
    CONVERT_ADRESS: "0x345fcD87bccf3455448F0E8F374A4291e48ccD66",
    BUSD_PAL_ADDRESS: "0x9c96d18ae3acb917f3ce1e2e6df68ca860ea3cdc",

    OLD_STAKING_ADDRESS: "0x9ae7972BA46933B3B20aaE7Acbf6C311847aCA40", //#
    OLD_STAKING_HELPER_ADDRESS: "0x2ca8913173D36021dC56922b5db8C428C3fdb146", //#
    OLD_SWAND_ADDRESS: "0x36F26880C6406b967bDb9901CDe43ABC9D53f106", //#
  //  MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d", //#
  //  DISTRIBUTOR_ADDRESS: "0x59D9CF509366C750A2123B47FfA8EB4504738649", //#
    BONDINGCALC_ADDRESS1: "0x7D8Dc5F89089D44a776F5D1047f4C8565C3DF091", //#
  //  REDEEM_HELPER_ADDRESS: "0x8D1906D112008f7C29A719F06dc62904a1136126",
    PT_TOKEN_ADDRESS: "0x0E930b8610229D74Da0A174626138Deb732cE6e9", // #  33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    PT_PRIZE_POOL_ADDRESS: "0xEaB695A8F5a44f583003A8bC97d677880D528248", // #  NEW
    PT_PRIZE_STRATEGY_ADDRESS: "0xf3d253257167c935f8C62A02AEaeBB24c9c5012a", //#   NEW

    WAND_ADDRESS: '0x9424D4452B65C4348aD4EBA2198497F40a3a898f',
    SWAND_ADDRESS: '0x31a69ACFcC214416008481B6c8f891915a60279f',
    STAKING_ADDRESS: '0x987e72F37ACaF8be3322dCd023C054C865A539e8',
    STAKING_HELPER_ADDRESS:'0x1F2b0Ece3C1486958462Cb8610fBe619aED5c83A',
    TREASURY_ADDRESS: "0x27931b863d0Cb205eBec8561B9515e2B891B0D9E",
    REDEEM_HELPER_ADDRESS: '0xF07eA5B71c29031367b8E6d2E6ee62Eb460b00e1',
    DISTRIBUTOR_ADDRESS: "0x90f791F7f1CeE13B0F29234ff9F4C0b7F429A310", 
  },
  97: {
    BUSD_ADDRESS: "0x78867bbeef44f2326bf8ddd1941a4439382ef2a7",
    WAND_ADDRESS: '0x51514f02CF40830277f9F44C03f6A617dc98Ec05',
    SWAND_ADDRESS: '0xD52A08D9B6b94594ff20AA9530A05D8b97F41002',
    STAKING_ADDRESS: "0xFEE266e4869CB65a2f0115fD7128ac5FA5318524",
  
    STAKING_HELPER_ADDRESS: "0x4518Aeb3447beB36ad06cF6b344C8e41b3c733c5",

    BONDINGCALC_ADDRESS1: "0xe9c2Bef3804778a439a5728E27efa8e922fe6330",
    BUSD_PAL_ADDRESS: "0x35f40d6523c38ef8eb13b6c0aae59ecd26165444",
    TREASURY_ADDRESS: "0x748Fba6BB62a75DB5DAe4586A3a97683504D37dd",
    REDEEM_HELPER_ADDRESS: "0xD5E8238Af7E3ED9934C686474E693FbC41a6c7bd",
    DISTRIBUTOR_ADDRESS: "0x4aa53f8c46Cf48e310fDe605A22fa9773BcE05d1",


    //staking_warmup-0xaA6a1F1658548c2012de6a1817644a80Fbaab304
    // PT_TOKEN_ADDRESS: "0x0a2d026bacc573a8b5a2b049f956bdf8e5256cfd", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
    // PT_PRIZE_POOL_ADDRESS: "0xf9081132864ed5e4980CFae83bDB122d86619281", // NEW
    // PT_PRIZE_STRATEGY_ADDRESS: "0x2Df17EA8D6B68Ec444c9a698315AfB36425dac8b", // NEW


  },
};
