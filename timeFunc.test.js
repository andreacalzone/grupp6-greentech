const {validTime}=require("./timeFunc")
describe('validTime',()=>{
    it('throw error when kontaktformula receives a number',function(){
        expect(validTime("abc")).toBe(false);
    })
})
describe('validTime',()=>{
    it('throw error when kontaktformula receives a number',function(){
        expect(validTime("a:b")).toBe(false);
    })
})