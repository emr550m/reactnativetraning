export class Sum {
    constructor(a,b){
        this.a=a;
        this.b=b;
        this.sumValue=0;
    }
    sumPromise(){
        return new Promise((resolve,reject)=>{
           setTimeout(()=>{
                this.sumValue=this.a+this.b 
           },5000);
            resolve(this.sumValue);   
        });
    }
    sum()
    {
        this.sumValue=this.a+this.b 
        return this.sumValue;
    }
    getA(){
        return this.a;
    }
    getB(){
        return this.a;
    }
}
