const AccountDetailsItem = ({ label, value }) => {
  return (
    <div className="flex font-trade-gothic text-lg text-primary">
      <p>
        {label} {label === 'Account Number' && '(last 4 digit)'}:{' '}
      </p>
      <p
        className={`pl-3 ${label === 'Currency' ? 'uppercase' : 'capitalize'}`}
      >
        {value}
      </p>
    </div>
  );
};

export default AccountDetailsItem;
