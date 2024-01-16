import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept/CoreConcept.jsx";
import Section from "./Section.jsx";

const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {/* 함수 내부를 반환할때 ()로 감싸야 함 */}
        {/* {CORE_CONCEPTS.map(({ title, description, image }) => (
      <CoreConcept
        title={title}
        description={description}
        image={image}
      />
    ))} */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
