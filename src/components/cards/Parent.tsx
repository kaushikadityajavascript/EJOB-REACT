import React, { useState } from "react";
import CardDetails from "./Child";


interface Card{
        id: number;
        name: string;
        loc: string;
        image: string;
}

const CardLayout: React.FC = () => {
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);
    const cards: Card[] = [
     { id: 1, name: "Netaji Subhas Chandra Bose", loc: "San Francisco", image: "https://jharhub.com/wp-content/uploads/2024/05/9d9771c3-d768-42df-ad44-f44e6857b4cd.jpg"},
    { id: 2, name: "Bhagat Singh", loc: "Delhi", image: "https://im.hunt.in/cg/iol/about/personalities/freedom-fighters/bhagat-singh.jpg" },
    { id: 3, name: "Mahatma Gandhi", loc: "Gujrat", image: "https://internationalschoolguwahati.com/wp-content/uploads/2023/08/Mahatma-Gandhi_studio_1931-1.jpg" },
    { id: 4, name: "Khudiram Bose", loc: "Kolkata", image: "https://static.india.com/wp-content/uploads/2023/08/Baji-Rout.jpg" },
    { id: 5, name: "Rabindra Nath Tagore", loc: "Kolkata", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Rabindranath_Tagore.jpg/1200px-Rabindranath_Tagore.jpg" },
    { id: 6, name: "Satyajit Ray", loc: "KOlkata", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjmhV-F1x2I0rKMx_Q3hKqh3a9eRoYtvSbg&s" },
    { id: 7, name: "Vidyasagar", loc: "Midnapore", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLFdfKfIZiH7M7d2swmgilUmgvruGUOLwVw&s" },
    { id: 8, name: "S Ramanujan", loc: "Chennai", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXua5o4-NmRe2O5Pxj43yl8KcPHuHifrqMQ&s"},
    { id: 9, name: "APJ Abdul Kalam", loc: "Kerala", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1ncpJNqvH8LQ8diiuPXglJtPrxkKsUNWhQ&s" },
    { id: 10, name: "Sushant Singh Rajput", loc: "Patna", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Sushant_sr_Manish_M_B%27day_bash.jpg/220px-Sushant_sr_Manish_M_B%27day_bash.jpg" },
    { id: 11, name: "Christopher Moore", loc: "Austin", image: "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg?auto=compress&cs=tinysrgb&w=600"},
    { id: 12, name: "Ava Lopez", loc: "Jacksonville", image:"https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 13, name: "Matthew White", loc: "Fort Worth", image:"https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 14, name: "Emma Martin", loc: "Columbus", image:"https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 15, name: "Andrew Thompson", loc: "Charlotte", image: "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg?auto=compress&cs=tinysrgb&w=600" },
     { id: 16, name: "Marry Doe", loc: "New York", image:"https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600", }, 
    ];
   
    return (
        <div className="container mt-4">
            <div className="row g-3">
                {
                    cards.map((item) => (
                        <div key={item.id} className="col-md-3">
                            <div className="card-text-center">
                                <img
                                    src={item.image}
                                    className="card-img-top"
                                    alt=""
                                />
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p>{item.loc}</p>
                                    <button
                                        className="btn"
                                        onClick={()=>setSelectedCard(item)}
                                    >Show Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <CardDetails card ={selectedCard}/>
        </div>
    );
}

export default CardLayout;