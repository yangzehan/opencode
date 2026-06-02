import type { Configuration } from "electron-builder"
import baseConfig from "./electron-builder.config"

const base = baseConfig

export default {
  ...base,
  win: {
    ...base.win,
    target: ["portable"],
  },
  portable: {
    artifactName: "opencode-desktop-portable-${arch}.${ext}",
  },
} satisfies Configuration
