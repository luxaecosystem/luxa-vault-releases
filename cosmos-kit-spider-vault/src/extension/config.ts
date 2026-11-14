import { Wallet } from '@cosmos-kit/core';

export const spiderVaultExtensionInfo: Wallet = {
  name: 'spider-vault-extension',
  prettyName: 'Spider Vault',
  logo: 'https://luxaecosystem.alwaysdata.net/assets/128.png',
  mode: 'extension',
  mobileDisabled: false,
  rejectMessage: {
    source: 'Request rejected by user.',
  },
  connectEventNamesOnWindow: ['luxa#accountsChanged', 'keplr_keystorechange'],
  downloads: [
    {
      device: 'desktop',
      browser: 'chrome',
      link: 'https://chromewebstore.google.com/detail/jfhaclclifggggclkpeakpgddohpdbmm',
    },
    {
      device: 'mobile',
      os: 'android',
      link: 'https://luxaecosystem.xyz/download.html',
    }
  ],
};
