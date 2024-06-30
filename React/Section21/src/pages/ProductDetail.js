import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>product details</h1>
      <p>{params.productId}</p>
      <p>
        {/* 상대경로, 절대경로인지 확인해야함,
        App에서 product와 detail은 /의 자녀기 때문에 상대경로로 설정되어 있으면
        바로 /로 돌아가게 됨, relative로 설정할 수 있음 */}
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetail;
