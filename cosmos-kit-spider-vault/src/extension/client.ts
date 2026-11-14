import { StdSignDoc } from '@cosmjs/amino';
import { DirectSignDoc, SignOptions, WalletClient } from '@cosmos-kit/core';

export class SpiderVaultClient implements WalletClient {
  readonly client: any;

  constructor(client: any) {
    this.client = client;
  }

  async enable(chainIds: string | string[]) {
    if (typeof chainIds === 'string') {
      chainIds = [chainIds];
    }
    for (const chainId of chainIds) {
      await this.client.enable(chainId);
    }
  }

  async getAccount(chainId: string) {
    const key = await this.client.getKey(chainId);
    return {
      name: key.name || 'Spider Vault Account',
      address: key.address,
      algo: key.algo || 'secp256k1',
      pubkey: key.pubKey,
    };
  }

  async getOfflineSigner(chainId: string, preferredSignType?: 'amino' | 'direct') {
    if (preferredSignType === 'amino') {
      return this.client.getOfflineSigner(chainId);
    }
    return this.client.getOfflineSignerAuto ? this.client.getOfflineSignerAuto(chainId) : this.client.getOfflineSigner(chainId);
  }

  async signAmino(chainId: string, signer: string, signDoc: StdSignDoc, signOptions?: SignOptions) {
    return this.client.getOfflineSigner(chainId).signAmino(signer, signDoc);
  }

  async signDirect(chainId: string, signer: string, signDoc: DirectSignDoc, signOptions?: SignOptions) {
    return this.client.getOfflineSigner(chainId).signDirect(signer, signDoc);
  }

  async signArbitrary(chainId: string, signer: string, data: string | Uint8Array) {
    return this.client.signArbitrary(signer, data);
  }
}
