export  class GetColor{
    constructor(){}
     public colorIs(salary : number) {
        if(salary<20000)
        {
            return 'black';
        }
      else if(salary>=20000 && salary<30000){
          return 'blue';
      }
      else if(salary>=30000 && salary<40000){
          return 'red';
      }
      else{
          return 'green';
      }
    }
}