class SlothMachine {

    private coins : number;

    constructor(){
        this.coins = 0;
    }

    public play() : void {
        this.coins++;
        if(this.goodLuck() && this.goodLuck() && this.goodLuck()) {
            console.log(`ongratulations!!!. You won ${this.coins} coins!!`)
            this.coins = 0;
        } else {
            console.log("Good luck next time!!")
        }

    }

    private goodLuck() : boolean {
        return Boolean(Math.round(Math.random()));
    }

}