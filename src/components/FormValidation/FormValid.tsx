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
    const ageRef = useRef<any>();
    const errAge = useRef<any>();
    const genderRef = useRef<any>();
    const locationRef = useRef<any>();
    
    const [isFirstNameValid, setIsFirstNameValid] = useState<boolean>(false);
    const [isLastNameValid, setIsLastNameValid] = useState<boolean>(false);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
    const [isAgeValid, setIsAgeValid] = useState<boolean>(false);
    const [isGenderValid, setIsGenderValid] = useState<boolean>(false);
    const [isLocationValid, setIsLocationValid] = useState<boolean>(false);

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

    const chkAge: React.KeyboardEventHandler<HTMLInputElement> = () => { 
        if (ageRef.current) {
            if (ageRef.current.value < 18) {
                errAge.current.innerHTML = "You are not eligible to apply";
                ageRef.current.classList.add("is-invalid");
                setIsAgeValid(false);
            } else {
                errAge.current.innerHTML = "";
                ageRef.current.classList.remove("is-invalid");
                ageRef.current.classList.add("is-valid");
                setIsAgeValid(true);
            }
        }
    }
    const chkGender: React.ChangeEventHandler<HTMLSelectElement> = () => {
    if (genderRef.current?.value) {
        genderRef.current.classList.remove("is-invalid");
        genderRef.current.classList.add("is-valid");
        setIsGenderValid(true);
    } else {
        genderRef.current.classList.remove("is-valid");
        genderRef.current.classList.add("is-invalid");
        setIsGenderValid(false);
    }
};
   const chkLocation: React.ChangeEventHandler<HTMLSelectElement> = () => {
    if (locationRef.current?.value) {
        locationRef.current.classList.remove("is-invalid");
        locationRef.current.classList.add("is-valid");
        setIsLocationValid(true);
    } else {
        locationRef.current.classList.remove("is-valid");
        locationRef.current.classList.add("is-invalid");
        setIsLocationValid(false);
    }
};
    const isFormValid:boolean = (isFirstNameValid && isLastNameValid && isPasswordValid && isAgeValid  &&  isGenderValid && isLocationValid)
    return (
        <>
            
            
            <div className="container mt-4">
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">First Name</label>
                            <input type="text" className="form-control" id="" placeholder="First Name" ref={fnameRef} onKeyUp={handleKeyDown}  />
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
                    <label htmlFor="genderSelect">Gender</label>
                        <select className="form-control" id="genderSelect" ref={genderRef} onChange={chkGender}>
                            <option value="" disabled selected>Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                </div>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="">Age</label>
                            <input type="number" className="form-control" id="" placeholder="Age" ref={ageRef} onInput={chkAge}/>
                             <p ref={errAge}></p>
                        </div>
                         <div className="col">
                            <label htmlFor="">Location</label>
                            <select  className="form-control" id="exampleFormControlSelect2" ref={locationRef} onChange={chkLocation}>
                                <option>Kolkata</option>
                                <option>Mumbai</option>
                                <option>Ranchi</option>
                                <option>Chennai</option>
                            </select>
                        </div>
                    </div>
                </div>
                 <div className="form-group">
        <div className="row">
            <div className="col">
                <label htmlFor="">Qualification</label>
                <select multiple className="form-control" id="exampleFormControlSelect2">
                    <option>Btech</option>
                    <option>Mtech</option>
                    <option>MCA</option>
                    <option>Msc</option>
                    <option>Bsc</option>
                </select>
            </div>
            <div className="col">
                <label htmlFor="">Skills</label>
                    <select multiple className="form-control" id="exampleFormControlSelect2">
                        <option>Node Js</option>
                        <option>Kafka</option>
                        <option>SQL</option>
                        <option>MongoDB</option>
                        <option>AWS</option>
                    </select>
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
                <div className="form-group">
                    <div className="form-group custom-file">
                        <input type="file" className="custom-file-input" id="customFile"/>
                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                </div>
     
    </div>
                   <button type="button" className="btn btn-primary" disabled={!isFormValid}> Submit </button>
            </div>
        </>
    );
}
export default FormValid