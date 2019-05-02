import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean} from '@storybook/addon-knobs';

import { ListCard } from '../../components';

const stories = storiesOf('ListCard', module);

const headerList = ['header1', 'header2', 'header3','header4']
const itemsList = [
  ['header1', 'header2', 'header3','header4'],
  ['headdeer1', 'heaewder2', 'hessader3','heazzzder4']
]

stories.addDecorator(withKnobs);

stories
  .add('with text', () =>(
    <ListCard
    header={'header'}
    items={["a", "b"]}
    onClick={action('clicked')}>Hello ListCard</ListCard>
  ))
  .add('with some emoji', () => (
    <ListCard
    header={'header'} items={["a", "b"]}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </ListCard>
  ))
  .add('with disabled prop activated', () => {
    const disabled = boolean('Disabled', true);
    return <ListCard
    header={'header'}
     items={["a", "b"]}
     disabled={disabled} > Disabled </ListCard>
  })
  .add('with custom Header', () => {
    const header = select('Custom Header', headerList, 'header1');

    return (
    <ListCard header={header} items={[1,2,3]}> Themed </ListCard>)
   });
