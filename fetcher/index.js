class ScratchFetcher {
    constructor() {
    }
    getInfo() {
        return {
            "id": "Fetcher",
            "name": "fetcher",
            "blocks": [
                        {
                            "opcode": "fetchURL",
                            "blockType": "reporter",
                            "text": "fetch raw data from URL [url]",
                            "arguments": {
                                "url": {
                                    "type": "string",
                                    "defaultValue": ""
                                },
                            }
                        },
                        {
                            "opcode": "jsonExtract",
                            "blockType": "reporter",
                            "text": "extract property [name] from JSON data [data]",
                            "arguments": {
                                "name": {
                                    "type": "string",
                                    "defaultValue": ""
                                },
                                "data": {
                                    "type": "string",
                                    "defaultValue": ''
                                },
                            }
                        },
                ],
        };
    }
    fetchURL({url}) {
        return fetch(url).then(response => response.text())
    }
    jsonExtract({name,data}) {
        var parsed = JSON.parse(data)
        if (name in parsed) {
            var out = parsed[name]
            var t = typeof(out)
            if (t == "string" || t == "number")
                return out
            if (t == "boolean")
                return t ? 1 : 0
            return JSON.stringify(out)
        }
        else {
            return ""
        }
    }
}
Scratch.extensions.register(new ScratchFetcher())