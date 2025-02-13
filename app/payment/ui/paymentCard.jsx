const PaymentCard = ({ icon, label, description, onSelect, selected, className }) => {
    return (
      <div
        className={`flex items-center gap-4 p-4 border-2 rounded-md cursor-pointer transition ${className} ${
          selected ? "border-blue-500 shadow-md" : "border-gray-300"
        }`}
        onClick={onSelect}
      >
        <img src={icon} alt="Payment Logo" className="w-24 h-auto" />
        <div>
          <p className="font-semibold">{label}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    );
};

export default PaymentCard;