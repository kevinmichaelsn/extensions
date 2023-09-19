class ScratchFetcher{
	constructor(){
    
    }
	getInfo(){
		 return {
			"id": "Fetcher",
			"name": "scratchfetcher",
			"blocks": [
				  {
					  "opcode": "fetchraw",
					  "blockType": "reporter",
					  "text": "fetch raw data from URL: [u]",
					  "arguments": {
						  "u": {
								  "type": "string",
						  },
					  }
				  },
				  {
					  "opcode": "extractjson",
					  "blockType": "reporter",
					  "text": "extract property: [p] from JSON data: [j]",
					  "arguments": {
						  "p": {
								  "type": "string"
						  },
						  "j":{
							  "type": "string"
						  }
					  }
				  }
				  ]
			};
	}
	fetchraw({u}){
		return fetch(u).then(response=>response.text())
	}
	extractjson({p,j}){
		if(p in JSON.parse(j)){
			var out=JSON.parse(j)[p]
			if(typeof(out)=="string"||typeof(out)=="number"){
				return out
			}
			if(typeof(out)=="boolean"){
				return typeof(out)?true:false
			}
			return JSON.stringify(out)
		}else{
			return ""
		}
	}
}
Scratch.extensions.register(new ScratchFetcher())