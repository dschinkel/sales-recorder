import React from 'react';
import {render} from '@testing-library/react-native';
import TopicInput from '../TopicInput';

describe('TopicInput', () => {
  it('renders the correct label and placeholder', () => {
    const {getByText, getByPlaceholderText} = render(
      <TopicInput topic="" onTopicChange={() => {}} />,
    );

    expect(getByText('What was the topic of your conversation?')).toBeTruthy();
    expect(getByPlaceholderText('Enter topic here')).toBeTruthy();
  });
});
