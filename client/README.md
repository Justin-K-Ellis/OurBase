# OurBase client

## i18n

All user-facing strings go through [react-i18next](https://react.i18next.com/). Don't hardcode text in components.

- Strings live in `src/i18n/locales/<lang>/common.json`. English (`en`) is the only locale for now.
- Keys are nested by feature or page, with camelCase leaves, e.g. `nav.home` or `about.title`.
- In components, use the hook:

  ```tsx
  const { t } = useTranslation();
  return <h1>{t("home.title")}</h1>;
  ```

- Keys are type-checked against the `en` locale file (`src/i18n/i18next.d.ts`), so `t("some.missing.key")` fails `pnpm run build`. To add a string, add it to `common.json` first.
