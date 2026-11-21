# Contributing to Tyllage-Web

> **Tyllage-Web does not accept outside contributions.**
> This repository is proprietary and is maintained only by the SoLeaf team. Pull requests, patches,
> issues and feature work from anyone outside the team will be closed without review. Forking or
> copying this repository does not give you any right to use, run, modify, deploy or redistribute its
> code or content. See [LICENSE](LICENSE).

If you are not a member of the SoLeaf team:

- **Found a security problem?** Report it privately as described in [SECURITY.md](SECURITY.md). Do not
  open a public issue.
- **Interested in licensing, a partnership or permission to use SoLeaf material?** Email
  [soleaf.co@gmail.com](mailto:soleaf.co@gmail.com) or contact the team through the
  [GitHub organisation hosting this repository](https://github.com/Tyllage).

The rest of this guide is for **SoLeaf team members** only.

## For SoLeaf team members

- All work you do on this repository belongs to SoLeaf LLP and is covered by the
  [existing proprietary license](LICENSE).
- Do not copy SoLeaf code, content or brand assets into personal projects, other repositories or
  public places (gists, forums, AI chat tools that keep your data) without approval.

1. Branch from `main` and open a pull request; don't push directly to `main`.
2. Run `npm run typecheck`, `npm run lint` and `npm run build` before pushing. The build in CI includes type checking.
3. Never commit secrets, `.env` files, AWS credentials or customer data.
4. Keep GitHub Actions pinned to full commit SHAs, as described in the README.
5. Treat [tyllage.com](https://tyllage.com) as the corporate site of SoLeaf LLP and describe Evercrop as its flagship product in development.
