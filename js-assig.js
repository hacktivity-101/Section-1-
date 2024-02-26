// prime  or non prime
const p = (n) => {
    c = 0;
    for (let i=1; i<=n; i++) {
        if (n%i==0) {
            c=c+1;
        }
    }
    if(c ===2) {
        console.log("Prime")
    }else {
        console.log("non prime")
    }
    };
    p(2);
    
    
    
    
    // prime b/w 100-600
    const primerange=(s,e) =>{
    
        for(let i=s;i<=e;i++){
            let c=0
            for(let j=1;j<=i;j++){
                if(i%j==0){
                    c=c+1
                }
            }
            if(c==2){
                console.log(i)
            }
        }
    }
    primerange(100,600)
    
    
    // Fibonacci series
    const f= (n)=>{
        var a=0,b=1
        console.log(a)
        console.log(b)
        for(let i=3;i<=n;i++){
            next=a+b
            console.log(next)
            a=b
            b=next
        }
    
    }
    f(5)
    
    
    
    
    //area of a triangle
    const tarea=(breath,height)=>{
        return 1/2*(breath*height);
    }
    console.log(tarea(50,4))
    
    
    
    // Number Reverse
    const r=(n)=>{
        let b=0
        m=n
        while (m!=0){
            a=m%10
            b=b*10+a
            m=math.floor(m/10)
        }
        return b
    }
    console.log(r(5219))
    console.log("end")
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    