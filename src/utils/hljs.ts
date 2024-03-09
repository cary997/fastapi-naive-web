/*
 * @Author: Cary
 * @Date: 2024-02-03 16:09:55
 * @LastEditors: Cary
 * @LastEditTime: 2024-03-06 09:17:36
 * @FilePath: /src/utils/hljs.ts
 * @Descripttion:
 */
import hljs from "highlight.js/lib/core"
import json from "highlight.js/lib/languages/json"
import shell from "highlight.js/lib/languages/shell"
import yaml from "highlight.js/lib/languages/yaml"
import python from "highlight.js/lib/languages/python"

hljs.registerLanguage("json", json)

hljs.registerLanguage("shell", shell)

hljs.registerLanguage("yaml", yaml)

hljs.registerLanguage("python", python)

export default hljs
