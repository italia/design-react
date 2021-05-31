import React, { useState } from 'react';
import { Button, Collapse, Card, CardBody } from '../../src';

const CollapseExample = () => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  };
  return (
    <div>
      <Button color='primary' onClick={toggle}>
        Link with href
      </Button>{' '}
      <Button color='primary' onClick={toggle}>
        Button with data-target
      </Button>
      <Collapse isOpen={collapse}>
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default CollapseExample;
