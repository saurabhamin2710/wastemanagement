import React from 'react'
import './Services.css';
import Photo5 from '../Photos/Photo5.jpg';
import Photo6 from '../Photos/Photo6.jpg';
import Photo7 from '../Photos/Photo7.jpg';
import Photo8 from '../Photos/Photo8.jpg';
import Photo9 from '../Photos/Photo9.jpg';
import Photo10 from '../Photos/Photo10.jpg';
import Photo11 from '../Photos/Photo11.jpg';
import Photo12 from '../Photos/Photo12.jpg';
export default function Services() {
    const photos = [
        { id: 2, src: Photo9, label: '' },
        { id: 3, src: Photo6, label: '' },
        { id: 1, src: Photo11, label: '' },
        { id: 5, src: Photo5, label: '' },
        { id: 7, src: Photo7, label: '' },
        { id: 8, src: Photo8, label: '' },
        { id: 10, src: Photo10, label: '' },
        { id: 12, src: Photo12, label: '' },

        // Add more photos as needed
    ];
    return (
        <div>
            <h1 className='srvc'>Bio Waste Management </h1>
            <div className="faq-container" style={{backgroundColor:""}}>
                <div className="faq-row">
                    <div className="faq-column faq-question-column" style={{ color: "green", fontSize: "30px" }}>
                        <br />
                        What does the term "Biomedical waste" refer to and what is the significance of its proper treatment?
                    </div>
                    <div className="faq-column faq-answer-column">
                        <p>Biomedical waste refers to any waste generated during medical diagnosis, treatment, or research activities involving human beings or animals. It includes various materials such as sharps (needles, scalpels), used bandages, discarded medicines, laboratory cultures, human or animal tissues, and other potentially infectious or hazardous substances.
                            Treating biomedical waste is crucial for several reasons:</p>
                        <li>
                            Prevention of Infections: Biomedical waste can contain harmful microorganisms such as bacteria, viruses, and parasites that can cause infections and diseases. Proper treatment helps in destroying or inactivating these pathogens, reducing the risk of spreading infections to healthcare workers, waste handlers, and the general public.
                        </li>
                        <li>
                            Environmental Protection: Improper disposal of biomedical waste can lead to contamination of soil, water bodies, and the atmosphere. This can have serious consequences for the environment, including the contamination of water supplies and the disruption of ecosystems. Treating biomedical waste ensures that hazardous substances are neutralized or rendered safe before their final disposal, minimizing environmental pollution.
                        </li> <li>
                            Public Health and Safety: Biomedical waste, if not managed appropriately, can pose significant risks to public health and safety. It can be scavenged by informal waste pickers, leading to accidental injuries and exposure to infectious materials. Treating biomedical waste reduces these risks and protects the well-being of the community.
                        </li> <li>
                            Legal Compliance: Most countries have specific regulations and guidelines in place to govern the management and treatment of biomedical waste. Healthcare facilities and other organizations generating such waste are required to comply with these regulations to maintain legal and ethical standards. Proper treatment ensures compliance with these laws and regulations.
                        </li> <li>
                            Resource Conservation: Biomedical waste often contains reusable materials such as glass, plastic, and metal. By treating the waste, these materials can be segregated, decontaminated, and recycled, reducing the demand for new resources and promoting sustainability.
                        </li>
                        Overall, proper treatment of biomedical waste is essential to safeguard public health, protect the environment, comply with regulations, and ensure the responsible management of healthcare waste.</div>
                </div>
                {/* Add more rows here */}
            </div>
            <h1 className='srvc1'>Machines and Waste Storage Areas</h1>
            <div className="photo-gallery">
                {photos.map((photo) => (
                    <div className="photo-card" key={photo.id}>
                        <img className="photo" src={photo.src} alt={photo.label} />
                        <div className="label">{photo.label}</div>
                    </div>
                ))}
            </div>
        </div >
    )
}
