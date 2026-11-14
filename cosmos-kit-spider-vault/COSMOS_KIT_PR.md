# Integration of Spider Vault into CosmosKit

This package integrates **Spider Vault** (the official sovereign Web3 wallet for the LUXA Ecosystem, Chain ID `luxa-1`, and connected Cosmos IBC networks) into CosmosKit (`@cosmos-kit/core`).

## Wallet Information
- **Name:** `spider-vault-extension`
- **Pretty Name:** `Spider Vault`
- **Official Website:** https://luxaecosystem.xyz/vault.html
- **Official Chrome Web Store Extension:** https://chromewebstore.google.com/detail/jfhaclclifggggclkpeakpgddohpdbmm
- **Android APK Download:** https://luxaecosystem.xyz/download.html
- **Logo (PNG 128x128):** https://luxaecosystem.alwaysdata.net/assets/128.png
- **Supported Chains:** `luxa-1`, Cosmos Hub, Osmosis, and connected IBC chains.
- **Provider API:** `window.luxa` (exposes standard Cosmos `getOfflineSigner`, `enable`, `signDirect`, `signAmino`, `signArbitrary`).

## PR Title for `hyperweb-io/cosmos-kit`:
`feat(wallets): add Spider Vault extension wallet integration`

## PR Description Template:
```markdown
### Summary
This PR adds support for **Spider Vault**, the sovereign non-custodial Web3 wallet designed for the LUXA L1 blockchain (`luxa-1`) and connected Cosmos IBC ecosystems.

### Details
- **Wallet Name:** Spider Vault
- **Chrome Web Store URL:** https://chromewebstore.google.com/detail/jfhaclclifggggclkpeakpgddohpdbmm
- **Homepage:** https://luxaecosystem.xyz/vault.html
- **Package:** `@cosmos-kit/spider-vault`
- **Window Provider:** `window.luxa`
- Full support for `getOfflineSigner`, `getOfflineSignerAuto`, `signDirect`, and `signAmino`.
```
