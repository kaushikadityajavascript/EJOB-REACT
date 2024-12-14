const Home=()=>{

    return(
        <>
<div className="card">
    <div className="card-header">
        <h2>Login</h2>
    </div>
    <div className="card-body">
        <div className="form-group">
            <div className="row">
                <div className="col">
                    <label htmlFor="">Username | Phone</label>
                    <input type="text" name="" id="" className="form-control" />
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col">
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" className="form-control" />
                </div>
            </div>
        </div>
        <div className="form-group">
            <div className="row">
                <div className="col">
                    <input type="button" value="Login" className="form-control btn btn-success" />
                    
                </div>
            </div>
        </div>
    </div>
</div>
        
        </>
    )
}
export default Home