import { EndpointOptions, Wallet } from '@cosmos-kit/core';
import { MainWalletBase } from '@cosmos-kit/core';
import { ChainSpiderVault } from './chain-wallet';
import { SpiderVaultClient } from './client';

export class SpiderVaultMainWallet extends MainWalletBase {
  constructor(walletInfo: Wallet, preferredEndpoints?: EndpointOptions['endpoints']) {
    super(walletInfo, ChainSpiderVault);
    this.preferredEndpoints = preferredEndpoints;
  }

  async initClient() {
    this.initing();
    try {
      const globalLuxa = (window as any)?.luxa;
      if (!globalLuxa) {
        this.initClientDone();
        return;
      }
      this.initClientDone(new SpiderVaultClient(globalLuxa));
    } catch (error) {
      this.initClientError(error as Error);
    }
  }
}
