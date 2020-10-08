new Vue({
    el: "#app",
    data: {
        myString: null,
        caseSelector: "ToUpper",
        theString: "String comes here",

    },
    
    methods: {
        ConvertString(){
            if(this.caseSelector == "ToUpper"){
                this.theString = this.myString.toUpperCase()
            }
            else if(this.caseSelector == "ToLower"){
                this.theString = this.myString.toLowerCase()
            }
        }
    }
})