export default function FlowerItem({ flower }) {
    return (
        <li className="flower-item">
            <article>
                <img src={flower.image} alt={flower.name} />
                <div>
                    <h3>{flower.name}</h3>
                </div>
            </article>
        </li>
    );
}
