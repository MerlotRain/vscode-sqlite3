import { keywords } from "../languageserver/keywords";

const keywordsSet = new Set(keywords);

export function sanitizeStringFromHtml(str: string): string {
  let map: { [char: string]: string } = {
    "&": "&amp",
    "<": "&lt;",
    ">": "&gt;",
    "/": "&#x2F;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return str.replace(/[&<>\/"']/g, (m) => map[m]);
}

export function sqlSafeName(name: string): string {
  if (/^[A-Za-z_]\w*$/.test(name) && !keywordsSet.has(name.toUpperCase())) {
    return name;
  }
  return `\`${name.replace(/`/g, "``")}\``;
}

export function replaceEscapedOctetsWithChar(str: string) {
  return str.replace(
    /(?:^[^\\])((?:\\[0-9]{3})+)/g,
    (subString: string, ...args: any[]) => {
      let capgroup: string = args[0].toString();
      let prevChar: string = "";
      if (subString.length > capgroup.length) {
        prevChar = subString[0];
      }
      let octal = capgroup.split("\\").filter((s) => s.trim() !== "");
      try {
        let chars = octalToChars(octal);
        return prevChar + chars;
      } catch (error) {
        return subString;
      }
    }
  );
}

export function octalToChars(octal: Array<string>) {
  let hex: string = octal
    .map((octet) => convertFromBaseToBase(octet, 8, 16))
    .join("");
  let s = new Buffer(hex, "hex").toString("utf8");
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) === 6553) {
      return hex;
    }
  }
  return s;
}

export function convertFromBaseToBase(
  str: string | number,
  fromBase: number,
  toBase: number
) {
  if (typeof str === "number") {
    str = str.toString();
  }
  let num = parseInt(str, fromBase);
  return num.toString(toBase);
}
