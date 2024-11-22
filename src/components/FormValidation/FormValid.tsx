import { useRef, useState } from "react";

const FormValid = () => {
    const fnameRef = useRef<any>();
    const lnameRef = useRef<any>();
    const succfname = useRef<any>();
    const succlname = useRef<any>();
    const errfname = useRef<any>();
    const errlname = useRef<any>();
    const pwdref = useRef<any>();
    const cpwdref = useRef<any>();
    const succpwd = useRef<any>();
    const errpwd = useRef<any>();
    
    const [isFirstNameValid, setIsFirstNameValid] = useState<boolean>(false);
    const [isLastNameValid, setIsLastNameValid] = useState<boolean>(false);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

   // first name validation
   const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = () => {
        if (fnameRef.current) {
            const fnameLength = fnameRef.current.value.length;
            console.log("🚀 ~ FormValid ~ fnameLength:", fnameLength)
            if (fnameLength< 6) {
                if (errfname.current) {
                    errfname.current.innerHTML = "Error, First Name must be 6 or more characters";
                     errfname.current.style.color = "red";
                }
                if (succfname.current) {
                    succfname.current.innerHTML = "";
                }
                // fnameRef.current.classList.remove("is-valid");
                fnameRef.current.classList.add("is-invalid");
                setIsFirstNameValid(false);
            } else {
                if (errfname.current) {
                    errfname.current.innerHTML = "";
                }
                if (succfname.current) {
                    succfname.current.innerHTML = "Success";
                }
                 fnameRef.current.classList.remove("is-invalid");
                fnameRef.current.classList.add("is-valid");
                setIsFirstNameValid(true)
            }
        }
    };
    // Last name validation
    const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = () => {
        if (lnameRef.current) {
            if (lnameRef.current.value.length < 6) {
               if (errlname.current) {
                   errlname.current.innerHTML = "Error,Last Name must be 6 or more characters";
                   errlname.current.style.color = "red";
                }
                if (succlname.current) {
                    succlname.current.innerHTML = "";
                }
                // lnameRef.current.classList.remove("is-valid");
                lnameRef.current.classList.add("is-invalid");
                setIsLastNameValid(false);
            } else {
                if (errlname.current) {
                    errlname.current.innerHTML = "";
                }
                if (succlname.current) {
                    succlname.current.innerHTML = "Success"
                    succlname.current.style.color = "green";
                }
                lnameRef.current.classList.remove("is-invalid");
                lnameRef.current.classList.add("is-valid");
                setIsLastNameValid(true);
            }
        }
    }
    // Password validation
    const chkpwd: React.KeyboardEventHandler<HTMLInputElement> = () => {
        if (pwdref.current && cpwdref.current) {
            if (pwdref.current.value === cpwdref.current.value) {
                errpwd.current.innerHTML = "";
                succpwd.current.innerHTML = "Password Matched";
                cpwdref.current.classList.remove("is-invalid");
                cpwdref.current.classList.add("is-valid");
            setIsPasswordValid(true);
        } else {
            succpwd.current.innerHTML = "";
            errpwd.current.innerHTML = "Password Mismatched";
            cpwdref.current.classList.remove("is-valid");
            cpwdref.current.classList.add("is-invalid");
              setIsPasswordValid(false);
        }
       }
    }
    const isFormValid:boolean = (isFirstNameValid && isLastNameValid && isPasswordValid);
    return (
        <>
            <div className="container">
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">First Name</label>
                            <input type="text" className="form-control" id="" placeholder="First Name" ref={fnameRef} onKeyUp={handleKeyDown} />
                            <p ref={succfname}></p>
                            <p ref={errfname}></p>
                        </div>
                         <div className="col">
                            <label htmlFor="">Last Name</label>
                            <input type="text" className="form-control" id="" placeholder="Last Name" ref={lnameRef} onKeyUp={handleKeyUp}/>
                             <p ref={succlname}></p>
                            <p ref={errlname}></p>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Password</label>
                            <input type="password" className="form-control" id="" placeholder="Password" ref={pwdref} onKeyUp={chkpwd}  />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Confirm Password</label>
                            <input type="password" className="form-control" id="" placeholder="Password" ref={cpwdref} onKeyUp={chkpwd} />
                            <p ref={succpwd}></p>
                            <p ref={errpwd}></p>
                        </div>
                    </div>
                </div>
                   <button type="button" className="btn btn-primary" disabled={!isFormValid}> Submit </button>
            </div>
        </>
    );
}
export default FormValid