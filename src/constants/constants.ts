const pkg = require("../../package.json");

export namespace Constants {
  export const extensionName = pkg.name;
  export const extensionDisplayName = pkg.displayName;
  export const extrnsionVersion = pkg.version;

  export const outputChannelName: string = `${extensionDisplayName}`;
  export const sqliteExplorerViewId = "pkg.contributes.views.explorer[0].id";
}
