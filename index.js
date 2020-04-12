
Array.prototype.eachall = function(fn) {
    try{
        this.i || (this.i = 0)
        if (this.length>0 && fn.constructor==Function) {
            while(this.i<this.length){
                var e = this[this.i];
                if (e && e.constructor == Array) {
                    e.eachall(fn);
                } else{
                    fn.call(e,e);
                };
                this.i++;
            }
            this.i=null;
            };
        }catch(err){
            console.log("have error:"+err);
        }
};