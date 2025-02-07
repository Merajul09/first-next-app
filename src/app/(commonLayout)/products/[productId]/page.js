const DynamicProductPage = async ({ params, searchParams }) => {
  const searchValue = await searchParams;
  console.log(searchValue);
  return (
    <div>
      <h1 className="text-4xl text-center">
        This is {await params.productId} product page by search value{" "}
      </h1>
    </div>
  );
};

export default DynamicProductPage;
