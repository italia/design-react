import React from 'react';

import { Forward, Icon, Card } from '../../src';

export default {
  title: 'Componenti/Forward'
};

export const Esempi = () => {
  const ref = React.useRef(null);
  return (
    <div>
      <Card>
        <Forward scrollToRef={ref}>
          <Icon color='primary' icon='it-expand' />
        </Forward>
      </Card>
      <div>
        <p>
          Et et consectetur ipsum labore excepteur est proident excepteur ad
          velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt
          anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit
          non irure adipisicing aliqua ullamco irure incididunt irure non esse
          consectetur nostrud minim non minim occaecat. Amet duis do nisi duis
          veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui
          sit. Exercitation mollit sit culpa nisi culpa non adipisicing
          reprehenderit do pain. Duis reprehenderit occaecat anim ullamco ad
          duis occaecat ex.
        </p>
        <p>
          Nulla est ullamco ut irure incididunt nothing Lorem Lorem minim irure
          officia enim reprehenderit. Magna duis labore cillum sint adipisicing
          exercitation ipsum. Nostrud ut anim non exercitation velit laboris
          fugiat cupidatat. Commodo esse pain fugiat sint velit ullamco magna
          consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore
          labore veniam irure irure ipsum pariatur mollit magna in cupidatat
          pain magna irure esse tempor ad mollit. Pain in pain nothing minim
          amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea
          sit eu.
        </p>
        <p>
          Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do
          quis dolor esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip
          laborum occaecat qui Lorem esse mollit pain anim cupidatat. Deserunt
          officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet
          eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in
          aliqua non et quis aliquip ad irure in labore cillum elit enim.
          Consequat aliquip incididunt ipsum et minim laborum laborum laborum et
          cillum labore. Deserunt adipisicing cillum id nulla minim nostrud
          labore eiusmod et amet. Laboris consequat consequat commodo non ut non
          aliquip reprehenderit nulla anim occaecat. Sunt sit ullamco
          reprehenderit irure ea ullamco Lorem aute nostrud magna.
        </p>
        <p>
          Et et consectetur ipsum labore excepteur est proident excepteur ad
          velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt
          anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit
          non irure adipisicing aliqua ullamco irure incididunt irure non esse
          consectetur nostrud minim non minim occaecat. Amet duis do nisi duis
          veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui
          sit. Exercitation mollit sit culpa nisi culpa non adipisicing
          reprehenderit do pain. Duis reprehenderit occaecat anim ullamco ad
          duis occaecat ex.
        </p>
        <p>
          Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do
          quis dolor esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip
          laborum occaecat qui Lorem esse mollit pain anim cupidatat. Deserunt
          officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet
          eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in
          aliqua non et quis aliquip ad irure in labore cillum elit enim.
          Consequat aliquip incididunt ipsum et minim laborum laborum laborum et
          cillum labore. Deserunt adipisicing cillum id nulla minim nostrud
          labore eiusmod et amet. Laboris consequat consequat commodo non ut non
          aliquip reprehenderit nulla anim occaecat. Sunt sit ullamco
          reprehenderit irure ea ullamco Lorem aute nostrud magna.
        </p>
        <p>
          Nulla est ullamco ut irure incididunt nothing Lorem Lorem minim irure
          officia enim reprehenderit. Magna duis labore cillum sint adipisicing
          exercitation ipsum. Nostrud ut anim non exercitation velit laboris
          fugiat cupidatat. Commodo esse pain fugiat sint velit ullamco magna
          consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore
          labore veniam irure irure ipsum pariatur mollit magna in cupidatat
          pain magna irure esse tempor ad mollit. Pain in pain nothing minim
          amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea
          sit eu.
        </p>
      </div>
      <div ref={ref}>Scroll to Here</div>
    </div>
  );
};
