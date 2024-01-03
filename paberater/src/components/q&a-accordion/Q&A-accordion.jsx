import Accordion from 'react-bootstrap/Accordion';

function QAaccordion({ items }) {
  return (
    <Accordion defaultActiveKey="0" flush>
      {items.map((item, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default QAaccordion;