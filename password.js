function generatepassword(length,includelower,includeupper,includenums,includesymb){
   const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
   const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numberchars = "0123456789";
   const symbolschars = "@!*#";

   let allowedchars = "";
   let password = "";

   allowedchars += includelower?lowercasechars:"";
   allowedchars += includeupper?uppercasechars:"";
   allowedchars += includenums?numberchars:"";
   allowedchars += includesymb?symbolschars:"";
   
   if(length <=0){
     return `(password length must be at least 1 )`;
   }
   if(allowedchars.length === 0){
    return '(At least one character need to be selected )';
   }

   for(let i=0;i<length;i++){
    const randomindex = Math.floor(Math.random()* allowedchars.length);
    password +=allowedchars[randomindex]
   }
   return password;
}

const passwordlen = 8;
const includelower =true;
const includeupper=true;
const includenums =true;
const includesymb =true;

const password = generatepassword( passwordlen,
                  includelower,
                  includeupper,
                  includenums,
                  includesymb);
console.log(`generated password : ${password}`);