class ScratchFetcher{
	constructor(){}
	getInfo(){
		 return {
			"id": "Fetcher",
			"name": "Fetcher",
			"blocks": [
				  {
					  "opcode": "fetchraw",
					  "blockType": "reporter",
					  "text": "fetch raw data from URL: [u]",
					  "arguments": {
						  "u": {
							"type": "string",
                            "defaultValue": ""
						  },
					  }
				  },
				  {
					  "opcode": "extractjson",
					  "blockType": "reporter",
					  "text": "extract property: [p] from JSON data: [j]",
					  "arguments": {
						  "p": {
							"type": "string",
                            "defaultValue": ""
						  },
						  "j":{
							"type": "string",
                            "defaultValue": ""
						  }
					  }
				  }
				  ]
			};
	}
	fetchraw({u}){
		return fetch(u)
        .then(response=>response.text())
	}
	extractjson({p,j}){
		if(p in JSON.parse(j)){
		    let out=JSON.parse(j)[p]
            let t=typeof(out)
			if(t=="string"||t=="number"){
				return out
			}
			if(t=="boolean"){
				return t?true:false
			}
			return JSON.stringify(out)
		}
		return ""
	}
}
Scratch.extensions.register(new ScratchFetcher())