function compile(text){
    var lines = text.split(/\r|\r\n|\n/);
    lines.forEach(line => {
        if(line.startsWith("tag")){
            tagName = line.substr(4).split("=")[0].trim();
            tagVar = line.substr(4).split("=")[1].split(",");
            tagVar.forEach(t => {
                new tag(tagName, t.trim());
                let obj = Object.entries(alltags);
                obj.push([t.trim(),{'tagName':tagName,'id':t.trim()}]);
                alltags = Object.fromEntries(obj); 
            });
        }
        if(line.startsWith("#")){
            id = line.split("=")[0].split(".")[0];
            property = line.split("=")[0].split(".")[1].trim();
            value = line.split("=")[1].trim();
            $(id).attr(property,value);
        }
    });
}