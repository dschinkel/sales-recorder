import React from 'react';
import {render} from '@testing-library/react-native';
import Topic from '../Topic.tsx';

describe('Topic Input', () => {
  it('shows label and placeholder', () => {
    const {getByText, getByPlaceholderText} = render(
      <Topic topic="" onTopicChange={() => {}} />,
    );

    expect(getByText('What was the topic of your conversation?')).toBeTruthy();
    expect(getByPlaceholderText('Enter topic here')).toBeTruthy();
  });
});
