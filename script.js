let age = document.querySelector('#from').addEventListener('submit',(e)=>{
    e.preventDefault()
    const fname= document.querySelector('#fname').value;
    const lname= document.querySelector('#lname').value;
    const email= document.querySelector('#email').value;
    const phone= document.querySelector('#phone').value;
    const dob = document.querySelector('#dob').value;
    const gender = document.querySelector('#gender').value;
    const occou= document.querySelector('#occu').value;

    class student{
        constructor(fname,lname,email,phone,dob,gender,occou){
            this.fname=fname;
            this.lname=lname;
            this.email=email;
            this.phone=phone;
            this.dob=dob;
            this.gender=gender;
            this.occou=occou;
            this.age = ''
        };
        ageCalculator(){
            if(this.age === ''){
                let birth= new Date(this.dob);
                let timeDeff= Date.now() - birth.getTime();
                let ageInMillisecond= new Date(timeDeff);
                let ageInYear= Math.abs(ageInMillisecond.getUTCFullYear() - 1970)
                this.age= ageInYear
            }
            return this.age
        }
    }
    let student1 =new student(fname, lname, email, phone, dob,gender, occou);
    //console.log(student1.ageCalculator())
    console.log(student1)
})
