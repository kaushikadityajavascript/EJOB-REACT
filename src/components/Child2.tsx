interface Type {
    value: {
        id: number;
        name: string;
        add: string;
    }[];
}

const Child2: React.FC<Type> = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>User Details</h3>
            </div>
            <div className="card-body">
                {props.value.map((item) => (
                    <div key={item.id}>
                        <p>ID: {item.id}</p>
                        <p>Name: {item.name}</p>
                        <p>Address: {item.add}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Child2;
