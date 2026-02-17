import 'react-native';
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';

it('renders correctly', () => {
  const {getByText} = render(<App />);
  expect(getByText('Sales Recorder')).toBeTruthy();
});

it('lists all sales questions', () => {
  const {getByText} = render(<App />);
  const expectedQuestions = [
    'Company Name',
    'What was Topic of your conversation with the customer',
    "What is the customer's objectives",
    'What is the Timeline for the project',
    'Who are the Decision makers for the project',
    'Estimated Deal Size',
    'Decision Makers’ Goals, Likes, and Interests?',
    'Concerns',
    'Competition',
    'Budget',
    'Marketing Support Expectations',
    'Confidence Level',
    'Strategy',
    'What Does Success Look Like for Them?',
    'Procurement, Legal, Security? Gating step?',
    'Risk to Forecast Date?',
  ];

  expectedQuestions.forEach(question => {
    expect(getByText(question)).toBeTruthy();
  });
});
