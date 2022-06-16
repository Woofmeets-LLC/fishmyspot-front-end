import AccountDetailsItem from './AccountDetailsItem';

const BankAccountDetails = ({ stripeAccount }) => {
  const {
    country,
    account_holder_name,
    routing_number,
    currency,
    last4,
    bank_name,
    account_holder_type,
  } =
    stripeAccount?.attributes?.stripeAccountData?.external_accounts?.data?.[0];
  return (
    <div className="col-span-5 pt-10 lg:pt-0">
      <div className="rounded-xl bg-white py-5 px-4 shadow-md">
        <h2 className="pb-4 font-trade-gothic-bold text-2xl text-primary">
          Bank Account Details
        </h2>
        <div>
          <AccountDetailsItem label={'Bank Name'} value={bank_name} />
          <AccountDetailsItem
            label={'Account Holder Name'}
            value={account_holder_name}
          />
          <AccountDetailsItem
            label={'Account Holder Type'}
            value={account_holder_type}
          />
          <AccountDetailsItem label={'Routing Number'} value={routing_number} />
          <AccountDetailsItem label={'Account Number'} value={last4} />
          <AccountDetailsItem label={'Country'} value={country} />
          <AccountDetailsItem label={'Currency'} value={currency} />
        </div>
      </div>
    </div>
  );
};

export default BankAccountDetails;
