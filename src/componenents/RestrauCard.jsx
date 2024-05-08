import PropTypes from 'prop-types';

const RestrauCard = ({ image_url, name, price, description }) => {
    return (
        <div className="max-w-48 card rounded-md px-1 py-1 flex flex-col gap-1 border-[1px] border-black m-5">
            <img className="img rounded-lg" src={image_url} alt="" />
            <h1 className="name">{name}</h1>
            <p className="price">{price}$</p>
            <p className="cuisines">{description}</p>
        </div>
    );
}

RestrauCard.propTypes = {
    image_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

export default RestrauCard;
