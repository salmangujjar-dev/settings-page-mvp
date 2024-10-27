const Subscriptions = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">Your Subscriptions</h2>
        <p className="text-gray-600">
          Here are your active subscriptions. Each subscription will be billed
          on the same billing cycle.
          <br />
          Subcriptions can be updated or cancelled at any time.
        </p>
      </div>
    </div>
  );
};

export default Subscriptions;
