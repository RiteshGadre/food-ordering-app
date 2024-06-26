import PropTypes from 'prop-types';

const RestrauCard = ({ image_url, name, price, description }) => {
    return (
        <div className="max-w-48 hover:scale-95 hover:duration-150 card rounded-md px-1 py-1 flex flex-col gap-1 m-5">
            <img className="img rounded-lg" src={image_url} alt="" />
            <div className="px-2">
                <h1 className="name font-medium">{name}</h1>
                <p className="price font-medium">{price}$</p>
                <p className="cuisines text-[#686b78]">{description}</p>
            </div>
            
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
