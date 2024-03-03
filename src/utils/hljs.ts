/*
 * @Author: guoyaolei
 * @Date: 2024-02-03 16:09:55
 * @LastEditors: guoyaolei
 * @LastEditTime: 2024-02-04 14:36:03
 * @FilePath: /fastapi-naive-web/src/utils/hljs.ts
 * @Descripttion:
 */
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import shell from "highlight.js/lib/languages/shell";
import yaml from "highlight.js/lib/languages/yaml";
import python from "highlight.js/lib/languages/python";

hljs.registerLanguage("json", json);

hljs.registerLanguage("shell", shell);

hljs.registerLanguage("yaml", yaml);

hljs.registerLanguage("python", python);

export default hljs;
