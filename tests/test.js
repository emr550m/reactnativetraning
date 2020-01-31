import { Sum } from "../../src/sum";

describe('Sum', () => {
    it(' construct a b correctly', () => {
        let s = new Sum(5,6)
        expect(s.a).toEqual(5);
        expect(s.b).toEqual(6);
    });
    it(' sub a b correctly', () => {
        let s = new Sum(5,6)
        expect(s.sum()).toEqual(11);
    });
    it(' sumPromise a b correctly', () => {
        jest.useFakeTimers();
        let s = new Sum(5,6)
        var ss=s.sumPromise();
        jest.runAllTimers();
        expect(s.sumValue).toEqual(11);
        ss.then((result)=>{
            expect(result).toEqual(11);
        });       
    });
   it(' sumPromise a b correctly', () => {
        jest.useFakeTimers();
        let s = new Sum(5,6)
        var ss=s.sumPromise();
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 5000);
        ss.then((result)=>{
            expect(s.sumValue).toEqual(11);
            expect(result).toEqual(11);
        });      
    });
    
});
