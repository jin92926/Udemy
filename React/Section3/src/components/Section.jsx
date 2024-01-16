const Section = ({ title, children, ...props }) => {
  //하나하나씩 모두 중괄호로 풀어올 필요 없이 ...props로 모두 가져올 수 있음
  // 이 패턴은 forwarded porps 또는 proxy props라 함
  // 너무 많지 않다면 직관적으로 가져오는 것도 좋은듯
  //   console.log(props);
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
