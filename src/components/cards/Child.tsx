
interface CardProps{
    card: {
        id: number;
        name: string;
        loc: string;
        image: string;
    } | null;
}

const CardDetails: React.FC<CardProps> = ({ card }) => {
    if (!card) {
        return <p className="text-muted">Choose a card to view Details </p>
    }

    return (
        <div className="card details-card">
            <div className="card-body">
                <h1 className="card-title">Card Details</h1>
            <p className="card-text"><strong>Id:</strong>{card.id}</p>
            <p className="card-text"><strong>Name:</strong>{card.name}</p>
                <p className="card-text"><strong>Location:</strong>{card.loc}</p>
                <img src={card.image} className="img-fluid rounded details-image" />
            </div>
            
        </div>
    );
}

export default CardDetails;