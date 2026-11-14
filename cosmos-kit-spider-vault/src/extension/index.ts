import { spiderVaultExtensionInfo } from './config';
import { SpiderVaultMainWallet } from './main-wallet';

export * from './config';
export * from './client';
export * from './main-wallet';
export * from './chain-wallet';

export const wallets = [new SpiderVaultMainWallet(spiderVaultExtensionInfo)];
